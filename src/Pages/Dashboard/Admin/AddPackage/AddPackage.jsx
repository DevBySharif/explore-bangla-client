import useAuth from "../../../../Hook/useAuth";

const AddPackage = () => {
  const { user } = useAuth();

  const handleAddPackage = () => {
    console.log("add package");
  };

  return (
    <div>
      <div>
        <section className="p-6 text-gray-900">
          <form
            onSubmit={handleAddPackage}
            className="container flex flex-col mx-auto space-y-12"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium text-2xl">Add Your Package</p>
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
              </div>
            </fieldset>
            <button className="btn btn-warning" type="submit">
              Add Package
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddPackage;
