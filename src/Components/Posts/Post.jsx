import React from "react";
import { Link } from "react-router";

const Post = ({ post }) => {
    // const {id,title}=post
  return (
    <div className="border-2 p-3 rounded-2xl gap-5">
      <p className="text-2xl">Title: {post.title}</p>
      <Link className="bg-[#ddd] p-2 rounded-full " to={`/posts/${post.id}`}>
        PostDetails
      </Link>
    </div>
  );
};

export default Post;
