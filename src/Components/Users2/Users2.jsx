import React, { use } from "react";

const Users2 = ({ users2Promise }) => {
  const user2 = use(users2Promise);
    console.log("this is users2 data",user2);
  return <div>This Is User 2</div>;
};

export default Users2;
