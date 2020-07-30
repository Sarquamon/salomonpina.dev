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
  // const pagePage = path.resolve("./src/templates/pageTemplate.js");
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
                template
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
  const posts = postNodes.filter(
    post => post.node.frontmatter.template === "post"
  );
  // const pages = all.filter(post => post.node.frontmatter.template === "page");
  const tagSet = new Set();

  // Create a page for each post.
  posts.forEach((post, i) => {
    const previous = i === posts.length - 1 ? null : posts[i + 1].node;
    const next = i === 0 ? null : posts[i - 1].node;

    if (post.node.frontmatter.tags) {
      post.node.frontmatter.tags.forEach(tag => {
        tagSet.add(tag);
      });
    }

    console.log("");

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

  // Create pages page
  // pages.forEach(page => {
  //   createPage({
  //     path: page.node.fields.slug,
  //     component: pagePage,
  //     context: {
  //       slug: page.node.fields.slug,
  //     },
  //   });
  // });

  // Create tags page
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
