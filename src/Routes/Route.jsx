import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Mainlayout from "../Layout/Mainlayout/Mainlayout";
import AddPackage from "../Pages/Dashboard/Admin/AddPackage/AddPackage";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import MyProfile from "../Pages/Dashboard/Admin/MyProfile/MyProfile";

import AboutUs from "../Components/AboutUs/AboutUs";
import Blogs from "../Components/Blogs/Blogs";
import ContactUs from "../Components/ContactUs/ContactUs";
import GuidesProfile from "../Pages/Dashboard/Guide/GuideProfile/GuidesProfile";
import MyAssignedTours from "../Pages/Dashboard/Guide/MyAssignedTours/MyAssignedTours";
import MyBookings from "../Pages/Dashboard/Tourist/MyBookings/MyBookings";
import MyWishlist from "../Pages/Dashboard/Tourist/MyWishlist/MyWishlist";
import TouristProfile from "../Pages/Dashboard/Tourist/TouristProfile/TouristProfile";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import AllPackages from "../Pages/Home/PackageDetails/AllPackages";
import PackageDetails from "../Pages/Home/PackageDetails/PackageDetails";
import Register from "../Pages/Home/Register/Register";
import GuideProfile from "../Pages/Home/TourismAndTravel/GuideProfile";
import AllStories from "../Pages/Home/TouristStories/AllStories";
import StoryDetails from "../Pages/Home/TouristStories/StoryDetails";
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
      {
        path: "packages/allPackages",
        element: <AllPackages></AllPackages>,
      },
      {
        path: "guide/profile/:id",
        element: <GuideProfile></GuideProfile>,
      },
      {
        path: "allStories",
        element: <AllStories></AllStories>,
      },
      {
        path: "storyDetails/:id",
        element: <StoryDetails></StoryDetails>,
      },
      {
        path: "aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "contactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
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
    children: [
      {
        path: "admin/myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "admin/addPackage",
        element: <AddPackage></AddPackage>,
      },
      {
        path: "admin/manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "tourist/myProfile",
        element: <TouristProfile></TouristProfile>,
      },
      {
        path: "tourist/myBookings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "tourist/myWishlist",
        element: <MyWishlist></MyWishlist>,
      },
      {
        path: "guide/myProfile",
        element: <GuidesProfile></GuidesProfile>,
      },
      {
        path: "guide/myAssignedTour",
        element: <MyAssignedTours></MyAssignedTours>,
      },
    ],
  },
]);

export default Route;
