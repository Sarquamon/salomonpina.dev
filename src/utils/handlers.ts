export const optimizedJourneysCategories = (posts: { node: any }[]) => {
  if (posts.length > 0) {
    const categories = new Set();

    posts.map(post => {
      categories.add(post.node.frontmatter.tags[0]);
    });

    return Array.from(categories);
  } else {
    return null;
  }
};

export const optimizedPosts = <T>(posts: T[]) => {
  if (posts.length > 0) {
    return posts.map(post => ({
      id: post.node.id,
      date: post.node.frontmatter.date,
      slug: post.node.fields.slug,
      tags: post.node.frontmatter.tags,
      title: post.node.frontmatter.title,
      category: post.node.frontmatter.category,
      ...(post.node.frontmatter.image && {
        image: post.node.frontmatter.image.childImageSharp.fluid.src,
      }),
    }));
  } else {
    return null;
  }
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
