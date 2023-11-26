import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Mainlayout from "../Layout/Mainlayout/Mainlayout";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import PackageDetails from "../Pages/Home/PackageDetails/PackageDetails";
import Register from "../Pages/Home/Register/Register";
import PrivateRoute from "./PrivateRoute";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "package/details/:id",
        element: <PackageDetails></PackageDetails>,
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
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
  },
]);

export default Route;
