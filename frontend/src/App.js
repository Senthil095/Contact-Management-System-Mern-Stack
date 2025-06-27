
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import ViewContact from "./components/ViewContact";

function App() {
  return (
    <Router>
      <div className="App bg-ivory text-classicGray min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-8 shadow-royal rounded-xl bg-darkIvory">
          <Routes>
            <Route path="/" element={<Contacts />} />
            <Route path="/add" element={<AddContact />} />
            <Route path="/edit/:id" element={<EditContact />} />
            <Route path="/view/:id" element={<ViewContact />} />
          </Routes>
        </div>
        <ToastContainer position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;