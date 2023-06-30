import Main from "../../layouts/Main";
import About from "../About/About";
import Home from "../Home/Home";
import HomePage from "../HomePage/HomePage";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/about",
        element: <About></About>
      }
    ]
  }
]);

export default router;
