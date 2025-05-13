import React from "react";
import { useLoaderData } from "react-router";
import User from "./User";

const Users = () => {
  const Users = useLoaderData();
  console.log(Users);
  return (
    <div className="my-12 text-2xl">
      <p>This Is Users {Users.length}</p>
      <div className="mx-auto grid grid-cols-2 container gap-5 p-5 ">
        {Users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
