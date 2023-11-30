import useAuth from "../../../../Hook/useAuth";
import useBookings from "../../../../Hook/useBookings";

const MyBookings = () => {
  const { bookings } = useBookings();
  const { user } = useAuth();
  const bookedPackage = bookings?.filter(
    (pack) => pack.touristEmail === user?.email
  );

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Package Name</th>
            <th>Tour Guide Name</th>
            <th>Tour Date</th>
            <th>Tour Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookedPackage?.map((booked, indx) => (
            <tr key={booked._id}>
              <td>{indx + 1}</td>
              <td>{booked.packageName}</td>
              <td>{booked.touristGuide}</td>
              <td>{booked.date}</td>
              <td>${booked.price}</td>
              <td>{booked.status || "In Review"}</td>
              <td className="space-x-3">
                <button
                  className="btn btn-accent"
                  disabled={booked.status !== "Accepted"}
                >
                  Pay
                </button>

                {booked.status !== "Accepted" &&
                booked.status !== "Rejected" ? (
                  <button className="btn btn-error">Cancel</button>
                ) : (
                  ""
                )}
                <button
                  className="btn btn-primary"
                  disabled={bookedPackage.length < 3}
                >
                  Apply
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;
