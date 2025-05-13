import React from "react";

const User = ({ user }) => {
  const { name, email } = user;
  //   console.log(user);

  return (
    <div className="border border-amber-700 p-5 rounded-2xl ">
      <h2>{name}</h2>
      <h2>{email}</h2>
      <div className="my-2">
        <button
          type="button"
          className="px-5 py-2  rounded-2xl bg-gray-800 text-gray-100 "
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default User;
