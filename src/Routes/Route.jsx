import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout/Mainlayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Register/Register";

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
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default Route;
