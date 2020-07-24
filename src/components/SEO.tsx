import React from "react";
import { Helmet } from "react-helmet";

import config from "../utils/config";

interface props {
  postNode?: {
    html: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      excerpt: string;
      description: string;
      image: {
        childImageSharp: {
          fluid: {
            src: string;
          };
        };
      };
    };
  };
}

export default function SEO({ postNode }: props) {
  let title: string = config.siteTitle;
  let description: string = config.description;
  let image: string = config.siteLogo;
  let postURL: string = config.siteUrl;

  if (postNode) {
    title = postNode.frontmatter.title;
    description = postNode.frontmatter.description
      ? postNode.frontmatter.description
      : postNode.frontmatter.excerpt;
    postURL = `${config.siteUrl}${postNode.fields.slug}`;
    image = postNode.frontmatter.image.childImageSharp.fluid.src
      ? `${config.siteUrl}${postNode.frontmatter.image.childImageSharp.fluid.src}`
      : `${config.siteUrl}${config.siteLogo}`;
  }

  const schemaOrgJSONLD: {}[] = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: config.siteUrl,
      name: title,
      alternateName: config.siteTitle ? config.siteTitle : "",
    },
  ];

  if (postNode) {
    schemaOrgJSONLD.push(
      {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": postURL,
              name: title,
              image,
            },
          },
        ],
      },
      {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        url: config.siteUrl,
        name: title,
        alternateName: config.siteTitle ? config.siteTitle : "",
        headline: title,
        image: { "@type": "ImageObject", url: image },
        description,
      }
    );
  }

  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      <meta property="og:url" content={postNode ? postURL : config.siteUrl} />
      {postNode && <meta property="og:type" content="article" />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={config.userTwitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
