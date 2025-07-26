import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Committee",
      path: "/committee",
      dropdown: [
        { name: "Advisory Committee", path: "/committee/advisory" },
        { name: "Technical Committee", path: "/committee/technical" },
        { name: "Organizing Committee", path: "/committee/organizing" },
      ],
      isDownload: false,
    },
    { name: "CFP", path: "/call-for-papers" },
    { name: "Publication", path: "/publication" },
    { name: "Speakers", path: "/speakers" },
    { name: "Registration", path: "/registration" },
    { name: "Imp Dates", path: "/important-dates" },
    { name: "Sponsors", path: "/sponsors" },

    {
      name: "Brouchers",
      path: "/brouchers",
      dropdown: [
        {
          name: "Sponsors Brouchers",
          path: "/downloads/sponsership_broucher.pdf",
        },
        {
          name: "XYZ Broucher",
          path: "/downloads/xyz_broucher.pdf",
        },
      ],
      isDownload: true,
    },
    {
      name: "Past Conf",
      path: "/past-conference",
      dropdown: [
        {
          name: "2024 Conference",
          path: "https://iopscience.iop.org/issue/1742-6596/2779/1",
        },
        {
          name: "2023 Conference",
          path: "https://iopscience.iop.org/issue/1742-6596/2779/1",
        },
      ],
      isDownload: false,
    },
    {
      name: "More",
      path: "/details",
      dropdown: [
        { name: "Venue", path: "/venue" },
        { name: "Accomodation", path: "/accomodation" },
        { name: "Contact", path: "/contact" },
      ],
      isDownload: false,
    },
  ];

  const renderDropdown = (link: any) => (
    <div className="absolute left-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 animate-fade-in">
      <div className="py-1">
        {link.dropdown.map((item: any) =>
          link.isDownload ? (
            <a
              key={item.path}
              href={item.path}
              download
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-conference-green"
            >
              {item.name}
            </a>
          ) : (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2 text-sm ${
                  isActive
                    ? "bg-pink-50 text-conference-green font-bold"
                    : "text-gray-700 hover:bg-pink-50 hover:text-conference-green"
                }`
              }
            >
              {item.name}
            </NavLink>
          )
        )}
      </div>
    </div>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      } transition-all duration-300`}
    >
      <nav className="max-w-[100vw] py-2">
        <div className="flex justify-center items-center">
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-gray-700 hover:text-conference-green"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) =>
              !link.dropdown ? (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-bold transition-colors duration-200 ${
                      isActive
                        ? "text-conference-green"
                        : "text-gray-700 hover:text-conference-green hover:bg-pink-50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ) : (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`px-3 py-2 rounded-md text-sm font-bold transition-colors duration-200 flex items-center ${
                      location.pathname.includes(link.path)
                        ? "text-conference-green"
                        : "text-gray-700 hover:text-conference-green hover:bg-pink-50"
                    }`}
                  >
                    {link.name}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  {openDropdown === link.name && renderDropdown(link)}
                </div>
              )
            )}
            <a
              className={`px-3 py-2 rounded-md text-sm font-bold transition-colors duration-200 flex items-center cursor-pointer text-gray-700 border bg-pink-50`}
              href="https://iopscience.iop.org/issue/1742-6596/2779/1"
            >
              ICMISI-2024(IOP)
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-lg shadow-xl p-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) =>
                !link.dropdown ? (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-bold transition-colors duration-200 ${
                        isActive
                          ? "bg-pink-50 text-conference-green"
                          : "text-gray-700 hover:text-conference-green hover:bg-pink-50"
                      }`
                    }
                    onClick={closeMenu}
                  >
                    {link.name}
                  </NavLink>
                ) : (
                  <div key={link.name} className="flex flex-col">
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.name ? null : link.name
                        )
                      }
                      className={`flex items-center justify-between px-3 py-2 rounded-md text-sm font-bold transition-colors duration-200 ${
                        location.pathname.includes(link.path)
                          ? "bg-pink-50 text-conference-green"
                          : "text-gray-700 hover:text-conference-green hover:bg-pink-50"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform duration-200 ${
                          openDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === link.name && (
                      <div className="ml-4 mt-1 border-l-2 border-pink-200 pl-4 animate-fade-in">
                        {link.dropdown.map((item: any) =>
                          link.isDownload ? (
                            <a
                              key={item.path}
                              href={item.path}
                              download
                              className="block px-3 py-2 text-sm text-gray-700 hover:text-conference-green"
                              onClick={closeMenu}
                            >
                              {item.name}
                            </a>
                          ) : (
                            <NavLink
                              key={item.path}
                              to={item.path}
                              className={({ isActive }) =>
                                `block px-3 py-2 text-sm ${
                                  isActive
                                    ? "text-conference-green font-bold"
                                    : "text-gray-700 hover:text-conference-green"
                                }`
                              }
                              onClick={closeMenu}
                            >
                              {item.name}
                            </NavLink>
                          )
                        )}
                      </div>
                    )}
                  </div>
                )
              )}
              <a
                className={`px-3 py-2 rounded-md text-sm font-bold transition-colors duration-200 flex items-center cursor-pointer text-gray-700 border bg-pink-50`}
                href="https://iopscience.iop.org/issue/1742-6596/2779/1"
              >
                ICMISI-2024(IOP)
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
