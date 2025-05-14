import React from "react";
import { useLoaderData } from "react-router";
import Post from "./Post";

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div>
      <p>{posts.length}</p>
      <div className="grid grid-cols-2 gap-5">
        {posts.map(post=><Post post={post} key={post.id}></Post>)}
      </div>
    </div>
  );
};

export default Posts;
