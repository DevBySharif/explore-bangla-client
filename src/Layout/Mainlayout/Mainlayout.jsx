import { Outlet } from "react-router-dom";
import Banner from "../../Pages/Shared/Banner/Banner";
import Navbar from "../../Pages/Shared/Navbar/Navbar/Navbar";

const Mainlayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Mainlayout;
