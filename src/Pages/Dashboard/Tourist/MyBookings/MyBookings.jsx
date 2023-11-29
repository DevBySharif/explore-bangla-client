import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hook/useAuth";
import useAxiosPublic from "../../../../Hook/useAxiosPublic";

const MyBookings = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axiosPublic.get("/bookings");
      return res.data;
    },
  });
  const bookedPackage = bookings?.filter(
    (pack) => pack.touristEmail === user?.email
  );

  return (
    // <div>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Package Name</th>
    //         <th>Tour Guide Name</th>
    //         <th>Tour Date</th>
    //         <th>Tour Price</th>
    //         <th>Status</th>
    //         <th>Actions</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {bookings.map((booking) => (
    //         <tr key={booking._id}>
    //           <td>{booking.packageName}</td>
    //           <td>{booking.tourGuideName}</td>
    //           <td>{booking.tourDate}</td>
    //           <td>{booking.tourPrice}</td>
    //           <td>{booking.status}</td>
    //           <td>
    //             {booking.status === "In Review" && (
    //               <button onClick={() => handleCancel(booking.id)}>
    //                 Cancel
    //               </button>
    //             )}
    //             {booking.status === "In Review" && (
    //               <button
    //                 onClick={() => handlePay(booking.id)}
    //                 disabled={status !== "Accepted"}
    //               >
    //                 Pay
    //               </button>
    //             )}
    //             <button onClick={() => handleApply(booking.id)} disabled>
    //               Apply
    //             </button>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
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
              <td>{booked.price}</td>
              <td>Blue</td>
              <td>Blue</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;
