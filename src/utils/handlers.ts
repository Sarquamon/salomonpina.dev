export const optimizedPosts = <T>(posts: T[]) => {
  return posts.map(post => ({
    id: post.node.id,
    date: post.node.frontmatter.date,
    slug: post.node.fields.slug,
    tags: post.node.frontmatter.tags,
    title: post.node.frontmatter.title,
    ...(post.node.frontmatter.image && {
      image: post.node.frontmatter.image.childImageSharp.fluid.src,
    }),
  }));
};

export const slugify = (str: string) => {
  return (
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )!
      .map(x => x.toLowerCase())
      .join("-")
  );
};
