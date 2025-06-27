import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { FaArrowLeft, FaEdit, FaTrash } from "react-icons/fa";


const ViewContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await axios.get(`/api/contacts/${id}`);
        setContact(res.data);
        setLoading(false);
      } catch (err) {
        toast.error("Failed to fetch contact");
        navigate("/");
      }
    };


    fetchContact();
  }, [id, navigate]);


  const deleteContact = async () => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        await axios.delete(`/api/contacts/${id}`);
        toast.success("Contact deleted successfully");
        navigate("/");
      } catch (err) {
        toast.error("Failed to delete contact");
      }
    }
  };


  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }


  return (
    <div className="max-w-lg mx-auto bg-gradient-to-r from-blue-500 to-green-500 p-8 rounded-2xl shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-extrabold text-white">Contact Details</h1>
        <Link
          to="/"
          className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 hover:scale-105 transition-transform cursor-pointer"
        >
          <FaArrowLeft className="mr-1" /> Back
        </Link>
      </div>


      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <h2 className="text-gray-500 text-sm">Name</h2>
          <p className="text-xl">{contact.name}</p>
        </div>


        <div className="mb-4">
          <h2 className="text-gray-500 text-sm">Email</h2>
          <p className="text-xl">{contact.email}</p>
        </div>


        <div className="mb-4">
          <h2 className="text-gray-500 text-sm">Phone</h2>
          <p className="text-xl">{contact.phone}</p>
        </div>


        {contact.address && (
          <div className="mb-4">
            <h2 className="text-gray-500 text-sm">Address</h2>
            <p className="text-xl">{contact.address}</p>
          </div>
        )}


        <div className="flex justify-between mt-6">
          <Link
            to={`/edit/${contact._id}`}
            className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
          >

            <FaEdit className="mr-1" /> Edit
          </Link>
          <button
            onClick={deleteContact}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 hover:scale-105 transition-transform cursor-pointer"
          >
            
            <FaTrash className="mr-1" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewContact;