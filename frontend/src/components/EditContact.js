

// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";

// const EditContact = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     category: "Others", // Default category
//   });

//   const { name, email, phone, address, category } = formData;

//   useEffect(() => {
//     const fetchContact = async () => {
//       try {
//         const res = await axios.get(`/api/contacts/${id}`);
//         const { name, email, phone, address, category } = res.data;

//         setFormData({
//           name,
//           email,
//           phone,
//           address: address || "",
//           category: category || "Others",
//         });
//         setLoading(false);
//       } catch (err) {
//         toast.error("Failed to fetch contact");
//         navigate("/");
//       }
//     };

//     fetchContact();
//   }, [id, navigate]);

//   const onChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !phone) {
//       return toast.error("Please fill in all required fields");
//     }

//     try {
//       await axios.put(`/api/contacts/${id}`, formData);
//       toast.success("Contact updated successfully");
//       navigate("/");
//     } catch (err) {
//       toast.error("Failed to update contact");
//     }
//   };

//   if (loading) {
//     return <div className="text-center py-10">Loading...</div>;
//   }

//   return (
//     <div className="max-w-lg mx-auto bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-8 rounded-2xl shadow-xl">
//       <h1 className="text-4xl font-extrabold mb-6 text-white text-center cursor-pointer hover:scale-105 transition-transform">
//         Edit Contact
//       </h1>

//       <form onSubmit={onSubmit} className="space-y-6">
//         <div>
//           <label className="block text-white font-semibold mb-2 cursor-pointer">
//             Name *
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={name}
//             onChange={onChange}
//             className="w-full p-3 border-none rounded-lg bg-white text-gray-800 shadow-md focus:ring-2 focus:ring-purple-400 focus:outline-none cursor-text"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-white font-semibold mb-2 cursor-pointer">
//             Email *
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={onChange}
//             className="w-full p-3 border-none rounded-lg bg-white text-gray-800 shadow-md focus:ring-2 focus:ring-purple-400 focus:outline-none cursor-text"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-white font-semibold mb-2 cursor-pointer">
//             Phone *
//           </label>
//           <input
//             type="text"
//             name="phone"
//             value={phone}
//             onChange={onChange}
//             className="w-full p-3 border-none rounded-lg bg-white text-gray-800 shadow-md focus:ring-2 focus:ring-purple-400 focus:outline-none cursor-text"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-white font-semibold mb-2 cursor-pointer">
//             Address
//           </label>
//           <textarea
//             name="address"
//             value={address}
//             onChange={onChange}
//             className="w-full p-3 border-none rounded-lg bg-white text-gray-800 shadow-md focus:ring-2 focus:ring-purple-400 focus:outline-none cursor-text"
//             rows="3"
//           ></textarea>
//         </div>

//         <div>
//           <label className="block text-white font-semibold mb-2 cursor-pointer">
//             Category
//           </label>
//           <select
//             name="category"
//             value={category}
//             onChange={onChange}
//             className="w-full p-3 border-none rounded-lg bg-white text-gray-800 shadow-md focus:ring-2 focus:ring-purple-400 focus:outline-none cursor-pointer"
//           >
//             <option value="Family">Family</option>
//             <option value="Friends">Friends</option>
//             <option value="Work">Work</option>
//             <option value="Others">Others</option>
//           </select>
//         </div>

//         <div className="flex justify-between">
//           <button
//             type="button"
//             onClick={() => navigate("/")}
//             className="bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 hover:scale-105 transition-transform cursor-pointer"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
//           >
//             Update Contact
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditContact;


import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    category: "Others", // Default category
  });

  const { name, email, phone, address, category } = formData;

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await axios.get(`/api/contacts/${id}`);
        const { name, email, phone, address, category } = res.data;

        setFormData({
          name,
          email,
          phone,
          address: address || "",
          category: category || "Others",
        });
        setLoading(false);
      } catch (err) {
        toast.error("Failed to fetch contact");
        navigate("/");
      }
    };

    fetchContact();
  }, [id, navigate]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      return toast.error("Please fill in all required fields");
    }

    try {
      await axios.put(`/api/contacts/${id}`, formData);
      toast.success("Contact updated successfully");
      navigate("/");
    } catch (err) {
      toast.error("Failed to update contact");
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="max-w-lg mx-auto bg-gradient-to-r from-blue-500 to-green-500 p-8 rounded-2xl shadow-xl">
      <h1 className="text-4xl font-extrabold mb-6 text-white text-center cursor-pointer hover:scale-105 transition-transform">
        Edit Contact
      </h1>

      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label className="block text-white font-semibold mb-2 cursor-pointer">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            className="w-full p-3 border-none rounded-lg bg-white text-gray-800 shadow-md focus:ring-2 focus:ring-blue-400 focus:outline-none cursor-text"
            required
          />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2 cursor-pointer">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            className="w-full p-3 border-none rounded-lg bg-white text-gray-800 shadow-md focus:ring-2 focus:ring-blue-400 focus:outline-none cursor-text"
            required
          />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2 cursor-pointer">
            Phone *
          </label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={onChange}
            className="w-full p-3 border-none rounded-lg bg-white text-gray-800 shadow-md focus:ring-2 focus:ring-blue-400 focus:outline-none cursor-text"
            required
          />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2 cursor-pointer">
            Address
          </label>
          <textarea
            name="address"
            value={address}
            onChange={onChange}
            className="w-full p-3 border-none rounded-lg bg-white text-gray-800 shadow-md focus:ring-2 focus:ring-blue-400 focus:outline-none cursor-text"
            rows="3"
          ></textarea>
        </div>

        <div>
          <label className="block text-white font-semibold mb-2 cursor-pointer">
            Category
          </label>
          <select
            name="category"
            value={category}
            onChange={onChange}
            className="w-full p-3 border-none rounded-lg bg-white text-gray-800 shadow-md focus:ring-2 focus:ring-blue-400 focus:outline-none cursor-pointer"
          >
            <option value="Family">Family</option>
            <option value="Friends">Friends</option>
            <option value="Work">Work</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 hover:scale-105 transition-transform cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
          >
            Update Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContact;