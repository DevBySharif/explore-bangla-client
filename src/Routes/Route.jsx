import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout/Mainlayout";
import Home from "../Pages/Home/Home/Home";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default Route;
