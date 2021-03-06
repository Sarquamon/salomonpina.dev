import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import config from "../utils/config";

export default function FouroFour() {
  return (
    <Layout>
      <Helmet title={`404 | ${config.siteTitle}`} />
      <SEO />
      <h1>404</h1>
    </Layout>
  );
}
