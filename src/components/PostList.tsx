import React from "react";
import { Link } from "gatsby";
import { slugify } from "../utils/handlers";

interface props {
  posts: {
    id: string;
    slug: string;
    tags: string[];
    date: string;
    title: string;
  }[];
}

export default function PostList(data: props) {
  return (
    <div className="grid postListGrid">
      {data.posts.map(post => {
        return (
          <Link className="postList-container" to={post.slug} key={post.id}>
            <div className="postListData">
              <time>{post.date}</time>
              <div>{post.title}</div>
            </div>
            <div className="postTags">
              {post.tags &&
                post.tags.map(tag => (
                  <Link
                    key={tag}
                    to={`tags/${slugify(tag)}/`}
                    className={`tag-${tag}`}
                  >
                    {tag}
                  </Link>
                ))}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
