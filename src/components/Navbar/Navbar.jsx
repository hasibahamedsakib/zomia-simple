import { Link, NavLink } from "react-router-dom";
import useScrollPosition from "./useScrollPosition";
import { FaBars, FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  // modal openar
  const [isOpen, setIsOpen] = useState(false);
  // scrolling tracker
  const scrollPosition = useScrollPosition();
  // background color add and remover
  const navbarBgColor =
    scrollPosition > 100 ? "bg-white" : "lg:bg-transparent bg-white";

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={` w-full lg:fixed   z-10  lg:px-10 lg:py-4  transition-all duration-300 ${navbarBgColor} `}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* website Logo */}
          <div className=" w-40 lg:w-32  p-4 ">
            <Link to="/">
              <img src="/logo.png" alt="Zomia_website_logo" />
            </Link>
          </div>
          <div className="px-3 w-full lg:hidden flex justify-between text-white bg-[#5f4ff8] p-3">
            <h2 className="text-2xl uppercase font-bold">Zomia</h2>
            <button
              className="lg:hidden block focus:outline-none "
              onClick={toggleNavbar}
            >
              {/* modal open and close */}
              {isOpen ? (
                <IoMdClose className="w-6 h-6 text-white" />
              ) : (
                <FaBars className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
          {/* All navLink are hear with active */}
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } text-left w-full lg:w-fit  ease-in-out lg:flex space-y-2 lg:space-y-0 lg:text-center  lg:space-x-3 space-x-0 flex flex-col lg:flex-row font-bold  md:text-lg text-slate-900`}
          >
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} hover:text-[#543cfe] border-b-2 lg:border-b-0 px-3 w-full block`}
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
                  : ""} hover:text-[#543cfe] border-b-2 lg:border-b-0 px-3 w-full block transition-all duration-300`}
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
                  : ""} hover:text-[#543cfe] border-b-2 lg:border-b-0 px-3 w-full block transition-all duration-300`}
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
                  : ""} hover:text-[#543cfe] border-b-2 lg:border-b-0 px-3 w-full block transition-all duration-300`}
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
                  : ""} hover:text-[#543cfe] border-b-2 lg:border-b-0 px-3 w-full block transition-all duration-300`}
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
                  : ""} hover:text-[#543cfe] border-b-2 lg:border-b-0 px-3 w-full block transition-all duration-300`}
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
                  : ""} hover:text-[#543cfe] border-b-2 lg:border-b-0 px-3 w-full block transition-all duration-300`}
              to="/contact"
            >
              Contact
            </NavLink>
          </ul>

          {/* large device visible button and search icon */}
          <div className="hidden lg:flex space-x-5 items-center">
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
