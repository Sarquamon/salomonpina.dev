import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import config from "../utils/config";
import SEO from "../components/SEO";

export default function FouroFour() {
  return (
    <Layout>
      <Helmet title={`404 | ${config.siteTitle}`} />
      <SEO />
      <h1>404</h1>
      <p>The page you're looking for was not found.</p>
    </Layout>
  );
}
