import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import img1 from "../../../assets/best-services/img1.svg";
import img2 from "../../../assets/best-services/img2.svg";
import img3 from "../../../assets/best-services/img3.png";
import img4 from "../../../assets/best-services/img4.svg";

const BestServices = () => {
  return (
    <div className="grid w-full mx-auto mb-12">
      <div className="text-center mb-12">
        <small className="text-base font-poppins font-medium text-[#5E6282] text-center">
          SERVICE
        </small>
        <h1 className="text-5xl font-bold capitalize text-[#14183E] mt-3">
          We Offer Best Services
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center mx-auto gap-4">
        <TiltCard />
        <TiltCard2 />
        <TiltCard3 />
        <TiltCard4 />
      </div>
    </div>
  );
};

const TiltCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-orange-300 to-yellow-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <div
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          <div className="card card-compact">
            <figure>
              <img src={img1} alt="weather" />
            </figure>
            <div className="card-body">
              <h2 className="text-[#1E1D4C] font-semibold text-xl">
                Calculated Weather
              </h2>
              <p className="font-poppins text-[#5E6282]">
                Our service ensures you have the most up-to-date weather
                information tailored to your location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
const TiltCard2 = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-orange-300 to-yellow-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <div
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          <div className="card card-compact">
            <figure>
              <img src={img2} alt="weather" />
            </figure>
            <div className="card-body">
              <h2 className="text-[#1E1D4C] font-semibold text-xl">
                Best Flights
              </h2>
              <p className="font-poppins  text-[#5E6282]">
                Discover the Best Flights with our intuitive platform that
                analyzes a multitude of factors, including pricing, schedules,
                and convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
const TiltCard3 = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-orange-300 to-yellow-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <div
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          <div className="card card-compact">
            <figure>
              <div className="bg-[#FFF1DA] w-12 h-12 absolute ml-3 rounded-badge"></div>
              <img className="relative" src={img3} alt="weather" />
            </figure>
            <div className="card-body">
              <h2 className="text-[#1E1D4C] font-semibold text-xl">
                Local Events
              </h2>
              <p className="font-poppins  text-[#5E6282]">
                Stay in the know with our Local Events service, designed to keep
                you informed about the latest happenings in your area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
const TiltCard4 = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-orange-300 to-yellow-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <div
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          <div className="card card-compact">
            <figure>
              <img src={img4} alt="weather" />
            </figure>
            <div className="card-body">
              <h2 className="text-[#1E1D4C] font-semibold text-xl">
                Customization
              </h2>
              <p className="font-poppins  text-[#5E6282]">
                Tailor your experience with our Customization service, offering
                personalized solutions to meet your unique needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BestServices;
