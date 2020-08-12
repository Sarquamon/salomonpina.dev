import React, { useMemo } from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Section from "../components/Section";
import PostList from "../components/PostList";

import { optimizedPosts } from "../utils/handlers";

export default function pageTemplate({ data, pageContext }: any) {
  const { category } = pageContext;

  const optimizedJourneys = useMemo(
    () => optimizedPosts(data.allMarkdownRemark.edges),
    [data.allMarkdownRemark.edges]
  );

  return (
    <Layout>
      <Helmet
        title={`${category[0].toUpperCase() + category.slice(1)} Journeys`}
      />
      <SEO />
      <Section>
        <h1>
          Every{" "}
          <span className={`tag tag-${category}`}>
            {category[0].toUpperCase() + category.slice(1)}
          </span>{" "}
          journey
        </h1>
      </Section>
      <Section>
        <PostList posts={optimizedJourneys} />
      </Section>
    </Layout>
  );
}

export const journeysQuery = graphql`
query ListJourneysQuery($category: String) {
  allMarkdownRemark(filter: {frontmatter: {tags: {in: [$category]}, category: {regex: "/[A-z][ourney]\\w+/g"}}}) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          description
          tags
          category
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
}
`;
