import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import loginImg from "../../../assets/login.svg";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useAuth();
  const [loginError, setLoginError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoginError("");

    signIn(email, password)
      .then(() => {
        toast.success("Login successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  return (
    <div
      className="relative flex font-poppins justify-center place-content-center items-center w-full"
      style={{
        backgroundImage: `url(${loginImg})`,
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div className="card flex-shrink-0 lg:w-1/3 bg-transparent shadow-xl absolute">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt text-black link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-accent">Login</button>
          </div>

          {loginError && <p className="text-red-500">{loginError}</p>}

          <p className="flex justify-between ">
            Don't have an account?
            <Link to="/register">Register</Link>
          </p>
          <SocialLogin></SocialLogin>
        </form>
      </div>
    </div>
  );
};

export default Login;
