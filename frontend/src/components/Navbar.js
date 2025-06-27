import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Contact Manager
        </Link>
        <Link to="/add" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
          Add Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
