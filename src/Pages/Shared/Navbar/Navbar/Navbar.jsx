import { Link, useLocation } from "react-router-dom";
import useAuth from "../../../../Hook/useAuth";
import logo from "../../../../assets/logo.svg";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { user, logOut } = useAuth();

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navLink = (
    <>
      <li>
        <Link
          className="font-poppins font-medium hover:border-b-4 border-orange-500"
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="font-poppins font-medium hover:border-b-4 border-orange-500"
          to="/"
        >
          Community
        </Link>
      </li>
      <li>
        <Link
          className="font-poppins font-medium hover:border-b-4 border-orange-500"
          to="/"
        >
          Blogs
        </Link>
      </li>
      <li>
        <Link
          className="font-poppins font-medium hover:border-b-4 border-orange-500"
          to="/"
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          className="font-poppins font-medium hover:border-b-4 border-orange-500"
          to="/"
        >
          Contact Us
        </Link>
      </li>
    </>
  );

  return (
    <div className="w-full">
      <div className="absolute flex justify-end w-full">
        {isHomePage && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="504"
            height="524"
            viewBox="0 0 704 724"
            fill="none"
            className="lg:block md:block hidden"
          >
            <path
              d="M22.3069 222C-18.0931 153.2 5.4736 13.3333 22.3069 -48L701.807 -149L766.307 122.5L727.807 723.5C649.14 724.5 473.707 717 401.307 679C310.807 631.5 351.807 555 276.807 515C201.807 475 244.807 369.5 218.807 329.5C192.807 289.5 72.8069 308 22.3069 222Z"
              fill="#FFF1DA"
            />
          </svg>
        )}
      </div>
      <div className="navbar relative  lg:max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <img className="h-full object-cover" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-info btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt={user?.displayName} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-content rounded-box w-auto"
              >
                <li>
                  <button className="btn btn-sm text-white btn-ghost pointer-events-none">
                    {user?.displayName}
                  </button>
                </li>
                <li>
                  <button className="btn btn-sm text-white btn-ghost pointer-events-none">
                    {user?.email}
                  </button>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-white btn btn-ghost btn-sm"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    className="btn btn-sm text-white btn-ghost"
                    onClick={handleSignOut}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="px-6 py-2 font-medium bg-orange-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
