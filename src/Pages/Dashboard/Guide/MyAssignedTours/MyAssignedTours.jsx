import toast from "react-hot-toast";
import useAuth from "../../../../Hook/useAuth";
import useAxiosPublic from "../../../../Hook/useAxiosPublic";
import useBookings from "../../../../Hook/useBookings";

const MyAssignedTours = () => {
  const axiosPublic = useAxiosPublic();
  const { bookings, refetch } = useBookings();
  const { user } = useAuth();

  const assignedTour = bookings?.filter(
    (booked) =>
      booked.touristGuide.toLowerCase() === user?.displayName.toLowerCase()
  );

  const handleAccept = (booked) => {
    axiosPublic.patch(`/assigned/tour/accept${booked._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("Accepted");
      }
      refetch();
    });
  };

  const handleReject = (booked) => {
    axiosPublic.patch(`/assigned/tour/reject${booked._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("Rejected");
      }
      refetch();
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Package Name</th>
              <th>Tourist Name</th>
              <th>Tour Date</th>
              <th>Tour Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {assignedTour?.map((booked, indx) => (
              <tr key={booked._id}>
                <td>{indx + 1}</td>
                <td>{booked.packageName}</td>
                <td>{booked.touristName}</td>
                <td>{booked.date}</td>
                <td>${booked.price}</td>
                <td className="space-x-3">
                  <button
                    onClick={() => handleAccept(booked)}
                    className="btn btn-accent btn-outline"
                    disabled={booked.status === "Accepted"}
                  >
                    {booked.status === "Accepted" ? "Accepted" : "Accept"}
                  </button>
                  <button
                    onClick={() => handleReject(booked)}
                    className="btn btn-error btn-outline"
                    disabled={booked.status === "Rejected"}
                  >
                    {booked.status === "Rejected" ? "Rejected" : "Reject"}
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

export default MyAssignedTours;
