import React from "react";
import { Link } from "gatsby";
import { slugify } from "../utils/handlers";

interface props {
  posts:
    | {
        id: string;
        slug: string;
        tags: string[];
        date: string;
        title: string;
        image: string;
        category: string;
      }[]
    | null;
}

export default function PostList({ posts }: props) {
  return (
    <div className="grid postListGrid">
      {posts &&
        posts.map(post => {
          return (
            <Link className="postList-container" to={post.slug} key={post.id}>
              {post.image && (
                <div className="postListImage">
                  <img src={post.image} alt="post image" loading="lazy" />
                </div>
              )}
              <div className="postListData">
                <time>{post.date}</time>
                <div>{post.title}</div>
              </div>
              <div className="postTags">
                {post.tags &&
                  post.tags.map(tag => (
                    <Link
                      key={tag}
                      to={`/tags/${slugify(tag)}/`}
                      className={`tag tag-${tag}`}
                    >
                      #{tag}
                    </Link>
                  ))}
                <Link
                  to={`/${slugify(post.category[0])}/`}
                  className="postListCat"
                >
                  #{post.category}
                </Link>
              </div>
            </Link>
          );
        })}
    </div>
  );
}
