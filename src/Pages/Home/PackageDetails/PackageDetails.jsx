import { useParams } from "react-router-dom";
import useGuides from "../../../Hook/useGuides";
import usePackages from "../../../Hook/usePackages";

const PackageDetails = () => {
  const tourPackages = usePackages();
  const touristGuide = useGuides();

  const packageId = useParams();

  const foundPackage = tourPackages.find((tour) => tour._id === packageId.id);
  if (!foundPackage) {
    return <progress className="progress w-56"></progress>;
  }
  return (
    <div>
      <h1 className="text-5xl text-center capitalize mt-12">
        Discover all the packages we offer
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
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
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
            About the Tour
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
          <section className="p-6 bg-gray-100 text-gray-900">
            <form
              noValidate=""
              action=""
              className="container flex flex-col mx-auto space-y-12"
            >
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                <div className="space-y-2 col-span-full lg:col-span-1">
                  <p className="font-medium">Personal Inormation</p>
                  <p className="text-xs">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Adipisci fuga autem eum!
                  </p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="firstname" className="text-sm">
                      First name
                    </label>
                    <input
                      id="firstname"
                      type="text"
                      placeholder="First name"
                      className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="lastname" className="text-sm">
                      Last name
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      placeholder="Last name"
                      className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="email" className="text-sm">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                    />
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="address" className="text-sm">
                      Address
                    </label>
                    <input
                      id="address"
                      type="text"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label htmlFor="city" className="text-sm">
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label htmlFor="state" className="text-sm">
                      State / Province
                    </label>
                    <input
                      id="state"
                      type="text"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label htmlFor="zip" className="text-sm">
                      ZIP / Postal
                    </label>
                    <input
                      id="zip"
                      type="text"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                <div className="space-y-2 col-span-full lg:col-span-1">
                  <p className="font-medium">Profile</p>
                  <p className="text-xs">Adipisci fuga autem eum!</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="username" className="text-sm">
                      Username
                    </label>
                    <input
                      id="username"
                      type="text"
                      placeholder="Username"
                      className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="website" className="text-sm">
                      Website
                    </label>
                    <input
                      id="website"
                      type="text"
                      placeholder="https://"
                      className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                    />
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="bio" className="text-sm">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                    ></textarea>
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="bio" className="text-sm">
                      Photo
                    </label>
                    <div className="flex items-center space-x-2">
                      <img
                        src="https://source.unsplash.com/30x30/?random"
                        alt=""
                        className="w-10 h-10 rounded-full bg-gray-500 bg-gray-300"
                      />
                      <button
                        type="button"
                        className="px-4 py-2 border rounded-md border-gray-800"
                      >
                        Change
                      </button>
                    </div>
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
