import { createBrowserRouter } from "react-router";
import Root from "../src/Root";
import App from "../src/App";
import Home from "../src/Components/Homde/Home";
import Laptops from "../src/Components/Laptops/Laptops";
import Users from "../src/Components/Users/Users";
import { Suspense } from "react";
import Posts from "../src/Components/Posts/Posts";
import UserDetails from "../src/Components/Users/UserDetails";
import PostDetails from "../src/Components/Posts/PostDetails";

// const users2Promise = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/laptops",
        Component: Laptops,
      },
      {
        path: "/app",
        Component: App,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts,
      },
      {
        path: "/posts/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails,
      },
      {
        path: "users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },
    ],
  },
]);

export default router;
