import toast from "react-hot-toast";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import useGuides from "../../../Hook/useGuides";
import usePackages from "../../../Hook/usePackages";
import vid1 from "../../../assets/1.mp4";
import vid2 from "../../../assets/2.mp4";
import vid3 from "../../../assets/3.mp4";
import vid4 from "../../../assets/4.mp4";
const TourismAndTravel = () => {
  const packages = usePackages();
  const guides = useGuides();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const handleWishlist = (tourPackage) => {
    const wishListInfo = {
      packageId: tourPackage._id,
      packageName: tourPackage.tripTitle,
      email: user?.email,
    };
    console.log(wishListInfo);
    axiosPublic
      .post("/wishlist", wishListInfo)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Added to your wishlist");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="mt-24">
      <div className="text-center">
        <small className="text-base  font-poppins font-medium text-[#5E6282] text-center">
          GUIDE
        </small>
        <h1 className="text-5xl text-[#14183E] font-bold mb-20 mt-3 text-center">
          Tourism and Travel Guide
        </h1>
      </div>
      <div role="tablist" className="tabs tabs-lifted tabs-lg">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Overview"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <h1 className="text-4xl my-12 text-center capitalize">
            Here are some tourist location for you
          </h1>
          <div className="carousel">
            <div id="slide1" className="carousel-item relative w-full">
              <video
                className="rounded-lg lg:h-[500px] w-full"
                autoPlay
                loop
                muted
              >
                <source src={vid1} type="video/mp4" />
              </video>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <video
                className="rounded-lg lg:h-[500px] w-full"
                autoPlay
                loop
                muted
              >
                <source src={vid2} type="video/mp4" />
              </video>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <video
                className="rounded-lg lg:h-[500px] w-full"
                autoPlay
                loop
                muted
              >
                <source src={vid3} type="video/mp4" />
              </video>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <video
                className="rounded-lg lg:h-[500px] w-full"
                autoPlay
                loop
                muted
              >
                <source src={vid4} type="video/mp4" />
              </video>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Packages"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {packages.map((tourPackage) => (
              <div
                key={tourPackage.id}
                className="card card-compact  h-96 bg-base-100 shadow-xl"
              >
                <figure>
                  <img
                    className="h-[250px] w-full"
                    src={tourPackage.spotPhoto}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body group">
                  <div className="flex justify-between">
                    <h2 className="card-title">{tourPackage.tripTitle}</h2>
                    <FaHeart
                      onClick={() => handleWishlist(tourPackage)}
                      className="text-3xl text-red-500 transition-all duration-150 ease-in hover:scale-125 cursor-pointer slide-in-elliptic-top-fwd"
                    ></FaHeart>
                  </div>
                  <p className="font-poppins  group-hover:font-bold">
                    Tour Type: {tourPackage.tourType}
                  </p>
                  <p className="font-poppins group-hover:font-bold">
                    Price: ${tourPackage.price}
                  </p>
                  <Link
                    to={`package/details/${tourPackage._id}`}
                    className="card-actions font-poppins "
                  >
                    <button className="btn btn-block btn-warning uppercase group-hover:text-white">
                      View Package
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end items-center my-4">
            <Link to="/packages/allPackages">
              <button className="btn btn-warning">All Packages</button>
            </Link>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Guides"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {guides.map((guide) => (
              <div
                key={guide._id}
                className=" bg-white flex items-center justify-center min-h-screen"
              >
                <section className="w-full max-w-[430px] relative  rounded-[6px] shadow-xl backdrop-blur-sm mx-2 overflow-hidden">
                  <a
                    target="_blank"
                    className="absolute text-[#231f39] bg-orange-400 rounded-[4px] top-6 left-6 px-2 py-1 text-sm font-bold roll-in-blurred-right"
                    rel="noreferrer"
                  >
                    PRO
                  </a>
                  <a target="_blank" className="" rel="noreferrer">
                    <img
                      src={guide.profilePicture}
                      className="rounded-full w-[120px] mx-auto my-10 p-0 border-[6px] box-content border-[#231f39] shadow-[0px_27px_16px_-11px_rgba(31,27,56,0.25)] transition-all duration-150 ease-in hover:scale-105 cursor-pointer slide-in-elliptic-top-fwd"
                    />
                  </a>
                  <h1 className="text-xl font-bold text-center">
                    {guide.name}
                  </h1>
                  <small className="block my-1 text-center">Bangladesh</small>

                  {guide.workExperience.map((experience) => (
                    <p key={experience.position} className="mt-5 text-center">
                      {experience.position}
                    </p>
                  ))}
                  <div className="flex items-center justify-center gap-2 w-[80%] mx-auto mt-5 mb-10">
                    <button className="flex-1 border border-orange-300 rounded-[4px] py-3 text-white bg-orange-400 transition-all duration-150 ease-in hover:bg-orange-500">
                      Message
                    </button>
                    <Link
                      className="flex-1 border border-orange-300 rounded-[4px] py-3 text-white bg-orange-400 transition-all duration-150 ease-in hover:bg-orange-500 text-center"
                      to={`/guide/profile/${guide._id}`}
                    >
                      <button>Details</button>
                    </Link>
                  </div>
                  <div className="text-black p-4 text-sm font-semibold backdrop-blur-sm">
                    <p>SKILLS</p>
                    <ul className="flex mt-4 flex-wrap items-center justify-start gap-2 gap-y-3 [&>li]:border-2 [&>li]:border-yellow-300 [&>li]:px-3 [&>li]:py-1 [&>li]:rounded-[4px] [&>li]:transition-all [&>li]:duration-150 [&>li]:ease-in [&>li:hover]:scale-105 [&>li:hover]:cursor-pointer">
                      {guide.skills.map((skill, indx) => (
                        <li key={indx}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourismAndTravel;
