import { NavLink } from "react-router-dom";
import useScrollPosition from "./useScrollPosition";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const navbarBgColor = scrollPosition > 100 ? "bg-white" : "bg-transparent";

  return (
    <nav
      className={` w-full fixed  top-0 z-10  px-8 py-6 transition-all duration-300 ${navbarBgColor}`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="w-32">
            <img src="/logo.png" alt="Zomia_website_logo" />
          </div>

          <ul className="flex space-x-5 font-bold text-lg text-slate-900">
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} hover:text-[#543cfe]`}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} hover:text-[#543cfe] transition-all duration-300`}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} hover:text-[#543cfe] transition-all duration-300`}
              to="/services"
            >
              Services
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} hover:text-[#543cfe] transition-all duration-300`}
              to="/portfolio"
            >
              Portfolio
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} hover:text-[#543cfe] transition-all duration-300`}
              to="/page"
            >
              Page
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} hover:text-[#543cfe] transition-all duration-300`}
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} hover:text-[#543cfe] transition-all duration-300`}
              to="/contact"
            >
              Contact
            </NavLink>
          </ul>
          <div className="flex space-x-5 items-center">
            <div className="bg-gradient-to-r from-[#533dfe] to-[#740fd7] hover:from-[#740fd7] hover:to-[#533dfe] p-3 rounded-sm">
              <FaSearch className="w-5 h-5 text-white" />
            </div>

            <button className="btn-main">Get A Quote</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
