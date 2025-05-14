import React from "react";
import { Link, useNavigate } from "react-router";

const Post = ({ post }) => {
  // Button e dynamic link er bodole onClick
  const Navigate = useNavigate();
  const handleNavigate = () => {
    Navigate(`/posts/${post.id}`);
  };

  
  return (
    <div className="border-2 p-3 rounded-2xl gap-5 ">
      <p className="text-2xl">Title: {post.title}</p>
      {/* <Link className="bg-[#ddd] p-2 rounded-full " to={`/posts/${post.id}`}>
        PostDetails
      </Link> */}
      <button
        className="bg-[#ddd] p-2 rounded-full cursor-pointer "
        onClick={() => handleNavigate()}
      >
        Details
      </button>
    </div>
  );
};

export default Post;
