import { useRef } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import useGuides from "../../../Hook/useGuides";
import usePackages from "../../../Hook/usePackages";

const PackageDetails = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const tourPackages = usePackages();
  const touristGuide = useGuides();
  const touristGuideRef = useRef();
  const axiosPublic = useAxiosPublic();
  const packageId = useParams();

  const foundPackage = tourPackages.find((tour) => tour._id === packageId.id);
  if (!foundPackage) {
    return <progress className="progress w-56"></progress>;
  }

  const handleBookNow = (event) => {
    event.preventDefault();

    const packageName = event.target.packageName.value;
    const touristName = event.target.touristName.value;
    const touristEmail = event.target.touristEmail.value;
    const touristImage = event.target.touristImage.value;
    const touristGuide = touristGuideRef.current.value;
    const price = event.target.price.value;
    const date = event.target.date.value;

    const bookingData = {
      packageName,
      touristName,
      touristEmail,
      touristImage,
      touristGuide,
      price,
      date,
    };
    if (!user) {
      navigate("/login");
    } else {
      document.getElementById("my_modal_1").showModal();

      axiosPublic
        .post("/bookings", bookingData)
        .then((res) => {
          if (res.data.insertedId) {
            toast.success("Booking Placed");
          }
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  return (
    <div>
      <h1 className="text-5xl text-center capitalize mt-12">
        See The Package Details
      </h1>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={foundPackage.spotPhoto}
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/zGb38XP/405541508-7440815592615003-14808.png"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-5xl capitalize text-center my-6">
            About the Package
          </h1>
          <p className="font-poppins">{foundPackage.about}</p>
          <section className=" text-gray-800">
            <div className="container mx-auto flex flex-col p-6">
              <h2 className="py-4 text-3xl font-bold text-center">
                {foundPackage.tripTitle}
              </h2>

              {foundPackage.tourPlan.map((day) => (
                <div
                  key={day.day}
                  className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0"
                >
                  <div className="flex items-center justify-center  col-span-full"></div>
                  <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                    <span className="text-xs  uppercase text-orange-600">
                      {`Day ${day.day}`}
                    </span>
                    <span className="text-xl font-bold md:text-2xl">
                      Activities
                    </span>
                    <ul className="mt-4 text-gray-700 font-poppins">
                      {day.activities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        <h1 className="text-5xl text-center">Meet Your Expert Guides</h1>
        <p className="font-poppins text-center my-6">
          Get ready for an unparalleled travel experience with our team of
          expert guides. Handpicked for their deep knowledge, passion, and
          insider insights, our guides are your key to unlocking the secrets of
          each destination. From historical anecdotes to hidden gems, they're
          dedicated to making your journey not just memorable but truly
          extraordinary. Embark on a personalized adventure with our guides and
          let their expertise transform your travel story into an enriching and
          unforgettable chapter
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {touristGuide.map((guide) => (
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
                <h1 className="text-xl font-bold text-center">{guide.name}</h1>
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
                  <button className="flex-1 border border-orange-300 rounded-[4px] py-3 text-white bg-orange-400 transition-all duration-150 ease-in hover:bg-orange-500">
                    Details
                  </button>
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
        <div>
          <section className="p-6 text-gray-900">
            <form
              onSubmit={handleBookNow}
              className="container flex flex-col mx-auto space-y-12"
            >
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
                <div className="space-y-2 col-span-full lg:col-span-1">
                  <p className="font-medium text-2xl">Book Your Package</p>
                  <p className="text-xs">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Adipisci fuga autem eum!
                  </p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className=" col-span-full sm:col-span-3">
                    <label className="label">
                      <span className="label-text">Package Name</span>
                    </label>
                    <input
                      name="packageName"
                      type="text"
                      defaultValue={foundPackage.tripTitle}
                      className="input input-bordered text-sm w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900 font-poppins p-3"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label className="label">
                      <span className="label-text">Tourist Name</span>
                    </label>
                    <input
                      name="touristName"
                      type="text"
                      placeholder="Tourist Name"
                      className="text-sm w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900 font-poppins p-3 input input-bordered"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label className="label">
                      <span className="label-text">Tourist Email</span>
                    </label>
                    <input
                      name="touristEmail"
                      type="email"
                      defaultValue={user?.email}
                      className="text-sm w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900 font-poppins p-3 input input-bordered"
                    />
                  </div>
                  <div className="col-span-full">
                    <label className="label">
                      <span className="label-text">Tourist Image</span>
                    </label>
                    <input
                      name="touristImage"
                      type="text"
                      placeholder=""
                      className="text-sm w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900 font-poppins p-3 input input-bordered"
                    />
                  </div>
                  <div className=" col-span-full sm:col-span-2">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      name="price"
                      type="text"
                      placeholder="Price"
                      className="text-sm w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900 font-poppins p-3 input input-bordered"
                    />
                  </div>
                  <div className="form-control col-span-full sm:col-span-2">
                    <label className="label">
                      <span className="label-text">Tour Guide</span>
                    </label>
                    <select
                      ref={touristGuideRef}
                      className="select select-bordered"
                    >
                      <option disabled defaultValue={"pick one"}>
                        Pick one
                      </option>
                      {touristGuide.map((guide) => (
                        <option key={guide.id}>{guide.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label className="label">
                      <span className="label-text">Date</span>
                    </label>
                    <input
                      name="date"
                      type="date"
                      className="text-sm w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900 font-poppins p-3 input input-bordered"
                    />
                  </div>
                  <div>
                    <button className="btn btn-warning" type="submit">
                      Book Now
                    </button>

                    <dialog id="my_modal_1" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg text-center">
                          Confirm your Booking
                        </h3>
                        <div className="text-center mt-4">
                          <Link to="/dashboard/tourist/myBookings">
                            <button className="btn text-center">
                              See My Bookings
                            </button>
                          </Link>
                        </div>
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              </fieldset>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
