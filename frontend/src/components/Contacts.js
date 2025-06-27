

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const Contacts = () => {
  const [contacts, setContacts] = useState([]); // All contacts
  const [filteredContacts, setFilteredContacts] = useState([]); // Filtered contacts
  const [loading, setLoading] = useState(true); // Loading state
  const [activeCategory, setActiveCategory] = useState("All"); // Default category is "All"
  const [searchTerm, setSearchTerm] = useState(""); // Search term
  const [sortOrder, setSortOrder] = useState("asc"); // Sort order (asc or desc)

  // Fetch contacts when the component loads
  useEffect(() => {
    fetchContacts();
  }, []);

  // Filter and sort contacts whenever the active category, search term, or sort order changes
  useEffect(() => {
    filterAndSortContacts();
  }, [activeCategory, searchTerm, sortOrder, contacts]);

  // Fetch all contacts from the backend
  const fetchContacts = async () => {
    try {
      const res = await axios.get("/api/contacts");
      setContacts(res.data); // Set all contacts
      setFilteredContacts(res.data); // Initially show all contacts
      setLoading(false);
    } catch (err) {
      toast.error("Failed to fetch contacts");
      setLoading(false);
    }
  };

  // Filter and sort contacts based on category, search term, and sort order
  const filterAndSortContacts = () => {
    let updatedContacts = contacts;

    // Filter by category
    if (activeCategory !== "All") {
      updatedContacts = updatedContacts.filter(
        (contact) => contact.category === activeCategory
      );
    }

    // Filter by search term
    if (searchTerm) {
      updatedContacts = updatedContacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort by name
    updatedContacts.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    setFilteredContacts(updatedContacts);
  };

  // Delete a contact
  const deleteContact = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        await axios.delete(`/api/contacts/${id}`);
        toast.success("Contact deleted successfully");
        fetchContacts(); // Refresh the contact list
      } catch (err) {
        toast.error("Failed to delete contact");
      }
    }
  };

  // Export contacts to CSV
  const exportToCSV = () => {
    const csvContent = [
      ["Name", "Email", "Phone"], // CSV headers
      ...contacts.map((contact) => [contact.name, contact.email, contact.phone]), // Contact data
    ]
      .map((row) => row.join(",")) // Join each row with commas
      .join("\n"); // Join rows with newlines

    const blob = new Blob([csvContent], { type: "text/csv" }); // Create a Blob object
    const url = URL.createObjectURL(blob); // Create a URL for the Blob
    const link = document.createElement("a"); // Create a temporary link element
    link.href = url;
    link.download = "contacts.csv"; // Set the file name
    link.click(); // Trigger the download
  };

  // Show a loading message while fetching contacts
  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Contacts</h1>

      {/* Search and Sort */}
      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded w-full md:w-1/3"
        />

        {/* Sort Dropdown */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border rounded w-full md:w-1/4"
        >
          <option value="asc">Sort: A-Z</option>
          <option value="desc">Sort: Z-A</option>
        </select>
      </div>


<div className="mb-4 flex space-x-4">
  {["All", "Family", "Friends", "Work", "Others"].map((category) => (
    <button
      key={category}
      onClick={() => setActiveCategory(category)}
      className={`px-4 py-2 rounded cursor-pointer ${
        activeCategory === category
          ? "bg-gradient-to-r from-blue-500 to-green-500 text-white"
          : "bg-gray-200 text-gray-700"
      } hover:bg-gradient-to-r hover:from-blue-400 hover:to-green-400`}
    >
      {category}
    </button>
  ))}
</div>




      {/* Export to CSV Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={exportToCSV}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Export to CSV
        </button>
      </div>

      {/* Display filtered contacts */}
      {filteredContacts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">No contacts found in this category.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Phone</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.map((contact) => (
                <tr key={contact._id}>
                  <td className="py-2 px-4 border-b">{contact.name}</td>
                  <td className="py-2 px-4 border-b">{contact.email}</td>
                  <td className="py-2 px-4 border-b">{contact.phone}</td>
                  <td className="py-2 px-4 border-b">
                    <div className="flex space-x-2">
                      <Link
                        to={`/view/${contact._id}`}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <FaEye />
                      </Link>
                      <Link
                        to={`/edit/${contact._id}`}
                        className="text-yellow-500 hover:text-yellow-700"
                      >
                        <FaEdit />
                      </Link>
                      <button
                        onClick={() => deleteContact(contact._id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Contacts;