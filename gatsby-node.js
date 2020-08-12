const path = require("path");

function slugify(str) {
  return (
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map(x => x.toLowerCase())
      .join("-")
  );
}

//Creates pages for every kind of posts.
const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve("./src/templates/postTemplate.tsx");
  const journeyPage = path.resolve("./src/templates/journeyTemplate.tsx");
  const tagPage = path.resolve("./src/templates/tagTemplate.tsx");

  const result = await graphql(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                title
                tags
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const postNodes = result.data.allMarkdownRemark.edges;

  const tagSet = new Set();
  const categories = new Set();

  // Creates a page for each post.
  postNodes.forEach((post, i) => {
    const previous = i === postNodes.length - 1 ? null : postNodes[i + 1].node;
    const next = i === 0 ? null : postNodes[i - 1].node;

    if (post.node.frontmatter.tags) {
      categories.add(post.node.frontmatter.tags[0]);

      post.node.frontmatter.tags.forEach(tag => {
        tagSet.add(tag);
      });
    }

    createPage({
      path: post.node.fields.slug,
      component: postTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });

  // Creates journey files list within a category (Docker, JS, etc.) page
  categories.forEach(category => {
    createPage({
      path: `/journeys/${slugify(category)}`,
      component: journeyPage,
      context: {
        category,
      },
    });
  });

  // Creates tags page
  const tagList = Array.from(tagSet);
  tagList.forEach(tag => {
    createPage({
      path: `/tags/${slugify(tag)}/`,
      component: tagPage,
      context: {
        tag,
      },
    });
  });
};

//Creates a new node with past node + new fields ("/slug/").
const createNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  let slug;
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);

    //Checks if node has slug property on frontmatter.
    if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")) {
      slug = `/${node.frontmatter.slug}/`;
    } else {
      slug = `/${parsedFilePath.dir}/${slugify(node.frontmatter.title)}`;
    }

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

exports.onCreateNode = createNode;
exports.createPages = createPages;
