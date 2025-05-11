import { createBrowserRouter } from "react-router";
import Root from "../src/Root";
import App from "../src/App";
import Home from "../src/Components/Homde/Home";
import Laptops from "../src/Components/Laptops/Laptops";
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
    ],
  },
]);

export default router;
