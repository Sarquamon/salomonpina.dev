import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

import config from "../utils/config";

export default function postTemplate({ data }: any) {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`} />
      <SEO postNode={post} postPath={post.fields.slug} postSEO />
      <header className="postTitle">
        <h1>{post.frontmatter.title}</h1>
      </header>
      <section>
        <article className="postContent">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </section>
    </Layout>
  );
}
export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
