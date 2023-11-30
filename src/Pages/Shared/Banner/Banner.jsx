import { FaPlayCircle } from "react-icons/fa";
import traveller from "../../../assets/Traveller 1.png";
const Banner = () => {
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={traveller} className="lg:max-w-xl" />

        <div>
          <p className="text-xl  font-semibold uppercase mb-6 text-[#DF6951] font-poppins">
            Explore the Unseen Treasures of Bangladesh
          </p>
          <h1 className="lg:text-5xl md:text-3xl text-3xl font-bold text-[#181E4B]">
            Embark on a Journey Through{" "}
            <span className="text-green-500">Bangladesh&lsquo;s</span> Hidden
            Gems
          </h1>
          <p className="py-6 font-poppins text-[#5E6282]">
            Explore the vibrant landscapes, rich culture, and captivating
            history of Bangladesh with our curated guides. From serene
            landscapes to bustling markets, discover the heart and soul of this
            beautiful country. Your adventure begins here!
          </p>
          <div className="flex items-center gap-5 text-[#686D77]">
            <button className="btn btn-warning text-white">
              Find out more
            </button>
            <FaPlayCircle className="text-orange-700 text-5xl"></FaPlayCircle>
            Play Demo
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
