import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../Hook/useAuth";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const handleSocialLogin = (media) => {
    media();
  };
  return (
    <div>
      <div className="divider text-white">Continue With</div>
      <div className="flex justify-center text-white">
        <button
          className="font-bold"
          onClick={() => handleSocialLogin(googleLogin)}
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
