import icon3 from "../../../assets/icons/icons8-hiking-48.png";
import icon1 from "../../../assets/icons/icons8-nature-48.png";
import icon2 from "../../../assets/icons/icons8-north-direction-48.png";
import icon4 from "../../../assets/icons/icons8-ropewalker-48.png";
import icon5 from "../../../assets/icons/icons8-walking-48.png";
import img1 from "../../../assets/tour-type.png";

const TourType = () => {
  const tourTypes = [
    {
      icon: icon1,
      fillColor: "#61B1B1",
      label: "Nature",
    },
    {
      icon: icon2,
      fillColor: "#d0f2e7",
      label: "Advancer",
    },
    {
      icon: icon5,
      fillColor: "#F3A52F",
      label: "Walking",
    },
    {
      icon: icon3,
      fillColor: "#AD5DC9E5",
      label: "Hiking",
    },
    {
      icon: icon4,
      fillColor: "#2E9EEFE5",
      label: "Sports",
    },
  ];

  return (
    <div className="mt-12 lg:mt-24 text-center">
      <small className="text-base font-poppins font-medium text-[#5E6282] text-center">
        CATEGORY
      </small>
      <h1 className="text-4xl lg:text-5xl mb-5">Tour Type</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:w-full mx-auto">
        {tourTypes.map((tourType, index) => (
          <div
            key={index}
            className="w-full sm:w-[150px] lg:w-[180px] h-[150px] sm:h-[180px] border-4 shadow-lg place-content-center rounded-lg mb-4 sm:mb-6 lg:mb-8 mx-auto"
          >
            <div className="flex justify-center items-center">
              <div>
                <img className="absolute z-10 p-6" src={tourType.icon} alt="" />
                <svg
                  className="relative p-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <circle cx="50" cy="50" r="50" fill={tourType.fillColor} />
                </svg>
              </div>
            </div>
            <h3 className="text-sm lg:text-base">{tourType.label}</h3>
          </div>
        ))}
      </div>
      <div className="lg:my-12 relative flex justify-center">
        <div className="w-full lg:w-[800px] h-[300px] mx-auto">
          <img className="w-full h-full rounded-xl" src={img1} alt="" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white p-4 sm:p-8 w-full lg:w-[50%] xl:w-[40%] 2xl:w-[35%] 2xl:p-12 shadow-xl rounded-md">
            <h2 className="text-lg lg:text-2xl xl:text-3xl font-bold mb-2">
              Take The Best Place
            </h2>
            <div className="flex items-center mb-4">
              <div className="h-px bg-gray-500 flex-grow"></div>
              <span className="mx-2">|</span>
              <div className="h-px bg-gray-500 flex-grow"></div>
            </div>
            <p className="text-sm lg:text-base font-poppins">
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
