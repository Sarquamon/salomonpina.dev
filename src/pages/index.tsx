import React from "react";

import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import config from "../utils/config";

export default function index() {
  return (
    <Layout>
      <Helmet title={`${config.siteTitle}`} />
      <main>hola</main>
    </Layout>
  );
}
