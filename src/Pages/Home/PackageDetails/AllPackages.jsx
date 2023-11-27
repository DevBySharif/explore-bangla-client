import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import usePackages from "../../../Hook/usePackages";

const AllPackages = () => {
  const allPackages = usePackages();
  return (
    <div>
      <h1 className="text-5xl text-center capitalize my-12">
        All the packages we offer
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allPackages.map((tourPackage) => (
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
                <FaHeart className="text-3xl text-red-500 transition-all duration-150 ease-in hover:scale-125 cursor-pointer slide-in-elliptic-top-fwd"></FaHeart>
              </div>
              <p className="font-poppins  group-hover:font-bold">
                Tour Type: {tourPackage.tourType}
              </p>
              <p className="font-poppins group-hover:font-bold">
                Price: ${tourPackage.price}
              </p>
              <Link
                to={`package/details/${allPackages._id}`}
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
    </div>
  );
};

export default AllPackages;
