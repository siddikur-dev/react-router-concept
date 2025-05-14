import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();
  //   agei to valo silam back

  const navigate = useNavigate();
  //   const handleBackToNavigate=()=>{
  //     navigate(``)
  //   }
  return (
    <div className="w-1/2 text-center mx-auto my-5 border-2 p-2 rounded-2xl">
      <h2 className="text-xl"> {post.title}</h2>
      <h2 className="text-xl"> {post.body}</h2>
      <h2 className="text-xl"> Id:{post.id}</h2>
      <h2 className="text-xl"> userId:{post.userId}</h2>
      <button
        onClick={() => {
          navigate(-1);
        }}
       className="bg-gray-400 p-2  cursor-pointer">
        Go Back{" "}
      </button>
    </div>
  );
};

export default PostDetails;
