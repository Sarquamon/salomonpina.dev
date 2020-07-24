import React from "react";
import { Helmet } from "react-helmet";

import SEO from "../components/SEO";
import Layout from "../components/Layout";

import config from "../utils/config";

export default function about() {
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <h1>About Me</h1>
    </Layout>
  );
}
