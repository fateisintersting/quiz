import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full p-4 bg-red-300 text-white flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold">Quiz Master</Link>
      <div className="space-x-4">
         </div>
    </nav>
  );
};

export default Navbar;
