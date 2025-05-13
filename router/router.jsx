import { createBrowserRouter } from "react-router";
import Root from "../src/Root";
import App from "../src/App";
import Home from "../src/Components/Homde/Home";
import Laptops from "../src/Components/Laptops/Laptops";
import Users from "../src/Components/Users/Users";
import { Suspense } from "react";
import Users2 from "../src/Components/Users2/Users2";
import UserDetails from "../src/Components/Users/UserDetails";

const users2Promise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);
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
        path: "/users2",
        element: (
          <Suspense
            fallback={
              <span>
                <div class="min-h-screen flex items-center justify-center">
                  <div class="w-20 h-20 border-4 border-gray-300 border-t-4 border-t-blue-400 rounded-full animate-spin"></div>
                </div>
              </span>
            }
          >
            <Users2 users2Promise={users2Promise}></Users2>
          </Suspense>
        ),
      },
      {
        path: "users/:userId",
        Component: UserDetails,
      },
    ],
  },
]);

export default router;
