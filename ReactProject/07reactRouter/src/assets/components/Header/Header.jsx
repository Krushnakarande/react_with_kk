import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    // CHANGED: Added shadow-red-400 to the hover:shadow-xl class
    <header className="shadow sticky z-50 top-0 rounded-b-lg transition-all duration-300 hover:bg-red-50 hover:shadow-xl hover:shadow-red-400">
      
      {/* Ensure this is bg-transparent so the header's red background shows */}
      <nav className="bg-transparent border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          <div className="flex items-center lg:order-2">
            <Link
              to="/login"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `relative block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 lg:border-0 lg:p-0
                      hover:text-orange-700 
                      after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                      after:w-0 after:h-[2px] after:bg-orange-700 
                      after:transition-all after:duration-500 after:ease-in-out 
                      hover:after:w-full hover:after:left-0`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/sketches"
                  className={({ isActive }) =>
                    `relative block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 lg:border-0 lg:p-0
                      hover:text-orange-700 
                      after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                      after:w-0 after:h-[2px] after:bg-orange-700 
                      after:transition-all after:duration-500 after:ease-in-out 
                      hover:after:w-full hover:after:left-0`
                  }
                >
                  Sketches
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `relative block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 lg:border-0 lg:p-0
                      hover:text-orange-700 
                      after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                      after:w-0 after:h-[2px] after:bg-orange-700 
                      after:transition-all after:duration-500 after:ease-in-out 
                      hover:after:w-full hover:after:left-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `relative block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 lg:border-0 lg:p-0
                      hover:text-orange-700 
                      after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                      after:w-0 after:h-[2px] after:bg-orange-700 
                      after:transition-all after:duration-500 after:ease-in-out 
                      hover:after:w-full hover:after:left-0`
                  }
                >
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `relative block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 lg:border-0 lg:p-0
                      hover:text-orange-700 
                      after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                      after:w-0 after:h-[2px] after:bg-orange-700 
                      after:transition-all after:duration-500 after:ease-in-out 
                      hover:after:w-full hover:after:left-0`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;