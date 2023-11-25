import icon3 from "../../../assets/icons/icons8-hiking-48.png";
import icon1 from "../../../assets/icons/icons8-nature-48.png";
import icon2 from "../../../assets/icons/icons8-north-direction-48.png";
import icon4 from "../../../assets/icons/icons8-ropewalker-48.png";
import icon5 from "../../../assets/icons/icons8-walking-48.png";
import img1 from "../../../assets/tour-type.png";
const TourType = () => {
  return (
    <div className="mt-24 text-center">
      <small className="text-base font-poppins font-medium text-[#5E6282] text-center">
        CATEGORY
      </small>
      <h1 className="text-5xl mb-5">Tour Type</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:w-[800px]  mx-auto">
        <div className="w-[150px] h-[150px] border-4 shadow-lg shadow-sky-500/50 border-[#61B1B1] place-content-center rounded-lg">
          <div>
            <div className="flex justify-center items-center">
              <div>
                <img className="absolute z-10 p-6" src={icon1} alt="" />
                <svg
                  className="relative p-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <circle cx="50" cy="50" r="50" fill="#61B1B1" />
                </svg>
              </div>
            </div>
          </div>
          <h3>Nature</h3>
        </div>
        <div className="w-[150px] h-[150px] border-4 shadow-lg shadow-orange-500/50 border-orange-500 place-content-center rounded-lg">
          <div>
            <div className="flex justify-center items-center">
              <div>
                <img className="absolute z-10 p-6" src={icon2} alt="" />
                <svg
                  className="relative p-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <circle cx="50" cy="50" r="50" fill="#d0f2e7" />
                </svg>
              </div>
            </div>
          </div>
          <h3>Advancer</h3>
        </div>
        <div className="w-[150px] h-[150px] border-4 shadow-lg shadow-[#F3A52F]/50 border-[#F3A52F] place-content-center rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <div>
                <img className="absolute z-10 p-6" src={icon5} alt="" />
                <svg
                  className="relative p-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <circle cx="50" cy="50" r="50" fill="#F3A52F" />
                </svg>
              </div>
            </div>
          </div>
          <h3>Walking</h3>
        </div>
        <div className="w-[150px] h-[150px] border-4 shadow-lg shadow-[#AD5DC9E5]/50 border-[#AD5DC9E5] place-content-center rounded-lg">
          <div>
            <div className="flex justify-center items-center">
              <div>
                <img className="absolute z-10 p-6" src={icon3} alt="" />
                <svg
                  className="relative p-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <circle cx="50" cy="50" r="50" fill="#AD5DC9E5" />
                </svg>
              </div>
            </div>
          </div>
          <h3>Hiking</h3>
        </div>
        <div className="w-[150px] h-[150px] border-4 shadow-lg shadow-[#2E9EEFE5]/50 border-[#2E9EEFE5] place-content-center rounded-lg">
          <div>
            <div className="flex justify-center items-center">
              <div>
                <img className="absolute z-10 p-6" src={icon4} alt="" />
                <svg
                  className="relative p-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <circle cx="50" cy="50" r="50" fill="#2E9EEFE5" />
                </svg>
              </div>
            </div>
          </div>
          <h3>Sports</h3>
        </div>
      </div>
      <div className="lg:my-20 relative flex justify-center">
        <div>
          <img className="w-[800px] h-[300px] rounded-xl" src={img1} alt="" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-[50%] translate-y-1/2 bg-white p-8 w-[50%] shadow-xl rounded-md">
            <h2 className="text-2xl font-bold mb-2">Take The Best Place</h2>
            <div className="flex items-center mb-4">
              <div className="h-px bg-gray-500 flex-grow"></div>
              <span className="mx-2">|</span>
              <div className="h-px bg-gray-500 flex-grow"></div>
            </div>
            <p>
              Plan a perfect getaway in a place where the sun shines all year.
              Explore pristine beaches, enjoy relaxed activities, and pamper
              yourself at the many wellness retreats.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourType;
