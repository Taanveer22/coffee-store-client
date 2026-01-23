import Swal from "sweetalert2";

const UserInfo = ({ element, handleRemoveFromUi }) => {
  const handleDeleteUser = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your user has been deleted.",
                icon: "success",
              });
              // Call the parent function to update the list
              handleRemoveFromUi(id);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        {/* head */}
        <thead>
          <tr className="flex flex-col lg:flex-row justify-around">
            <th>Name</th>
            <th>Email</th>
            <th>Creation Time</th>
            <th>Last Signin Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="flex flex-col lg:flex-row justify-around">
            <td>{element?.name}</td>
            <td>{element?.email}</td>
            <td>{element?.creationTime}</td>
            <td>{element?.lastSignInTime}</td>
            <td>
              <button
                onClick={() => handleDeleteUser(element._id)}
                className="btn btn-xs btn-error"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserInfo;
