import React, { useMemo } from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import PostList from "../components/PostList";

import { optimizedPosts } from "../utils/handlers";

export default function tagTemplate({ data, pageContext }: any) {
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  const optimizedTags = useMemo(
    () => optimizedPosts(data.allMarkdownRemark.edges),
    [data.allMarkdownRemark.edges]
  );
  const message = totalCount === 1 ? " post found." : " posts found.";

  return (
    <Layout>
      <Helmet title={``} />
      <SEO />
      <section>
        <h1>
          Every post and journey with{" "}
          <span className={`tag tag-${tag}`}>{tag}</span>
        </h1>
        <p className="subtitle">
          <span className="count">{totalCount}</span>
          {message}
        </p>
      </section>
      <section>
        <PostList posts={optimizedTags} />
      </section>
    </Layout>
  );
}

export const tagsQuery = graphql`
  query tagsQuery($tag: String) {
    allMarkdownRemark(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            categories
          }
        }
      }
    }
  }
`;
