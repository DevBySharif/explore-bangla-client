import { FaHeart } from "react-icons/fa";
import usePackages from "../../../Hook/usePackages";
import vid1 from "../../../assets/1.mp4";
import vid2 from "../../../assets/2.mp4";
import vid3 from "../../../assets/3.mp4";
import vid4 from "../../../assets/4.mp4";
const TourismAndTravel = () => {
  const packages = usePackages();
  console.log(packages);
  return (
    <div>
      <div>
        <h1 className="text-5xl text-[#14183E] font-bold my-12 text-center">
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
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <h1 className="text-4xl my-12">
            Here are some tourist location for you
          </h1>
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <video className="rounded-lg" autoPlay loop muted>
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
              <video className="rounded-lg" autoPlay loop muted>
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
              <video className="rounded-lg" autoPlay loop muted>
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
              <video className="rounded-lg" autoPlay loop muted>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((tourPackage) => (
              <div
                key={tourPackage.id}
                className="card card-compact w-96 h-96 bg-base-100 shadow-xl"
              >
                <figure>
                  <img
                    className="h-[250px]"
                    src={tourPackage.spotPhoto}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <div className="flex justify-between">
                    <h2 className="card-title">{tourPackage.tripTitle}</h2>
                    <FaHeart className="text-3xl text-pink-500"></FaHeart>
                  </div>
                  <p className="font-poppins">
                    Tour Type: {tourPackage.tourType}
                  </p>
                  <p className="font-poppins">Price: ${tourPackage.price}</p>
                  <div className="card-actions font-poppins">
                    <button className="btn btn-block btn-warning uppercase">
                      View Package
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Guides"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Tab content 3
        </div>
      </div>
    </div>
  );
};

export default TourismAndTravel;
