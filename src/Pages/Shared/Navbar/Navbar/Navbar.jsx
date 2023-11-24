import { Link, useLocation } from "react-router-dom";
import logo from "../../../../assets/logo.svg";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Community</Link>
      </li>
      <li>
        <Link to="/">Blogs</Link>
      </li>
      <li>
        <Link to="/">About Us</Link>
      </li>
      <li>
        <Link to="/">Contact Us</Link>
      </li>
    </>
  );

  return (
    <div>
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
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
