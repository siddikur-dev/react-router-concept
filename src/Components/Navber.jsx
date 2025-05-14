import React from "react";
import "../App.css";
import { NavLink } from "react-router";

const Navber = () => {
  return (
    <nav className="flex justify-center text-2xl gap-5">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/app">App</NavLink>
      <NavLink to="/laptops">Laptops</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/posts">Posts</NavLink>
    </nav>
  );
};

export default Navber;
