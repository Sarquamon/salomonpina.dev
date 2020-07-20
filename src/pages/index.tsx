import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Section from "../components/Section";
import PostList from "../components/PostList";
import config from "../utils/config";

export default function index() {
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <Section className="front-header">
        <h1>
          Hi! I'm <Link to="/about">Salomón Piña</Link>.
        </h1>
        <p className="description">
          I'm a computer science engineer,{" "}
          <a
            href="https://github.com/sarquamon"
            target="_blank"
            rel="noreferrer"
          >
            full-stack dev
          </a>
          , part-time{" "}
          <a
            href="https://www.youtube.com/channel/UCQWZ0yHcf4zvehMdgjmuHyw"
            target="_blank"
            rel="noreferrer"
          >
            youtuber
          </a>{" "}
          and English teacher. This website is a collection of all the things I
          have learned throughout my journey as a "computer guru".
        </p>
        <p>
          The purpose of this website was to create a place where I could share
          some tips, ideas, guides and experiences I've had as an engineer and
          developer.
        </p>
        <p>
          You can read my <Link to="/blog">blog</Link>, view my{" "}
          <Link to="/journeys">journeys</Link> AKA guides or say hello at my{" "}
          <a
            href="https://twitter.com/Sarquamon"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          .
        </p>
      </Section>
      <Section title="Latests">
        <PostList data="hola" tags="hola" />
      </Section>
      <Section title="Editor Picks">
        <PostList data="hola" tags="hola" />
      </Section>
      <Section title="Popular">
        <PostList data="hola" tags="hola" />
      </Section>
    </Layout>
  );
}
