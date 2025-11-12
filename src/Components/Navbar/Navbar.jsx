import { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="relative flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-3xl font-bold tracking-wide md:mb-5 mb-5">Portfolio</span>

      {/* Menu (hidden on small screens unless menuOpen is true, visible on md+) */}
      <ul
        className={`
          ${menuOpen ? "block" : "hidden"}
          mx-24 py-2 mt-4 font-semibold md:mt-5 md:mb-10 bg-black px-2 rounded-xl bg-opacity-30
          md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6
          transition-all duration-300 
        `}
        aria-hidden={!menuOpen && "true"}
      >
        <a href="#About" onClick={closeMenu}>
          <li className="text-2xl transition-all duration-300 p-1 md:p-0">About</li>
        </a>

        <a href="#Experience" onClick={closeMenu}>
          <li className="text-2xl transition-all duration-300 p-1 md:p-0">Experience</li>
        </a>

        <a href="#Projects" onClick={closeMenu}>
          <li className="text-2xl transition-all duration-300 p-1 md:p-0">Projects</li>
        </a>

        <a href="#Contact" onClick={closeMenu}>
          <li className="text-2xl transition-all duration-300 p-1 md:p-0">Contact</li>
        </a>
      </ul>

      {/* Mobile toggle (only shown on small screens) */}
      <div className="md:hidden absolute right-10 top-6 transition-all duration-300">
        {menuOpen ? (
          <RiCloseLine
            size={30}
            className="cursor-pointer"
            onClick={toggleMenu}   // <-- closes the menu
            aria-label="Close menu"
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="cursor-pointer"
            onClick={toggleMenu}   // <-- opens the menu
            aria-label="Open menu"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;




