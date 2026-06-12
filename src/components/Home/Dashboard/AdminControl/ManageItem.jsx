import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../Section/SectionTitle";
import useMenu from "../../shared/usemenu";
import useAxiosSecure from "../../shared/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ManageItem = () => {
  const axiosSecure = useAxiosSecure();
  const [menu,, refetch] = useMenu();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${id}`)
          .then(result => {
            if (result.data.deletedCount > 0) {
              refetch();
              Swal.fire({ title: "Deleted!", text: "Your item has been deleted.", icon: "success" });
            }
          });
      }
    });
  };

  const handleEdit = (item) => {
    navigate(`/dashboad/editItem/${item._id}`, { state: { item } });
  };

  return (
    <div className="px-4 py-6">
      <SectionTitle heading='manage item' subheading='whats up' />

      <div className="overflow-x-auto rounded-xl border border-base-200 shadow-sm">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Img</th>
              <th>Name</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id} className="hover">
                <th>{index + 1}</th>
                <td><img className="h-10 w-10 rounded-xl object-cover" src={item.image} alt={item.name} /></td>
                <td className=''>{item.name}</td>
                <td className="whitespace-nowrap">${item.price}</td>
                <td>
                  <button onClick={() => handleEdit(item)} className="btn btn-ghost text-xl">
                    <FaEdit className='text-blue-500' />
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(item._id)} className="btn btn-ghost text-xl">
                    <FaTrashAlt className='text-red-500' />
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

export default ManageItem;