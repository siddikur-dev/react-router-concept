import React from "react";
import { useLoaderData } from "react-router";

const Users = () => {
  const Users = useLoaderData();
  console.log(Users);
  return <div className="my-12 text-2xl">This Is Users</div>;
};

export default Users;
