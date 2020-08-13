import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Card from "../components/Card";

import { optimizedJourneysCategories } from "../utils/handlers";

export default function Journeys({ data }: any) {
  const optimizedCategories = optimizedJourneysCategories(
    data.allMarkdownRemark.edges
  );

  return (
    <Layout>
      <Helmet title="Journeys" />
      <SEO />
      <h1>Journeys</h1>
      <div>
        {optimizedCategories &&
          optimizedCategories.map((category, index) => {
            return <Card key={index} category={category} />;
          })}
      </div>
    </Layout>
  );
}

export const journeysQuery = graphql`
  query journeysComponentQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "journeys" } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`;
