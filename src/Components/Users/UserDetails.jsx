import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  console.log(user);

  return (
    <div className="">
      <h2 className="  text-center text-green-700 font-extrabold justify-center flex">
        UserDetails
      </h2>
      <div className="mx-auto border-2 p-3 rounded-2xl">
        <h1>Name: {user.name}</h1>
        <h1>Web: {user.website}</h1>
        <h1>📞: {user.phone}</h1>
      </div>
    </div>
  );
};

export default UserDetails;
