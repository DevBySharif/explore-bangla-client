import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAuth from "../../../../Hook/useAuth";
import useAxiosPublic from "../../../../Hook/useAxiosPublic";

const MyWishlist = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: wishlist = [], refetch } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const res = await axiosPublic.get("/wishlist");
      return res.data;
    },
  });

  const userWishlist = wishlist?.filter((list) => list.email === user?.email);

  const handleDelete = (wish) => {
    axiosPublic
      .delete(`/wishlist/${wish._id}`)
      .then(() => {
        toast.success("Deleted Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
    refetch();
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Package Name</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {userWishlist?.map((wish, indx) => (
              <tr key={wish._id}>
                <th>{indx + 1}</th>
                <td>{wish._id}</td>
                <td>{wish.packageName}</td>
                <td>
                  <button className="btn btn-ghost">Details</button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(wish)}
                    className="btn btn-ghost"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyWishlist;
