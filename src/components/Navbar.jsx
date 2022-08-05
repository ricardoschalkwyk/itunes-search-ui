import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center p-6">
      <nav className="flex gap-4">
        <div>
          <NavLink
            to="/"
            className="px-3 py-1 bg-slate-500 rounded hover:bg-neutral-900 text-white"
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/favorites"
            className="px-3 py-1 bg-slate-500 rounded hover:bg-neutral-900 text-white"
          >
            Favorites
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
