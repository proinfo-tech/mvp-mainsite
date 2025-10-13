import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Use react-router-dom
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MainLogo } from "@/assets";

type HeaderProps = {
  showAuthButtons?: boolean;
};

const Header: React.FC<HeaderProps> = ({ showAuthButtons = true }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const navigateHandler = (path: string) => {
    navigate(path);
    setMobileOpen(false); // Close mobile menu on navigation
  };

  return (
     <header className="fixed top-0 left-0 z-50 bg-[#164B88] h-[70px] w-full lg:px-[200px] flex justify-between items-center px-6">
      {/* Logo Section */}
     <img src={MainLogo} alt="Main Logo" className="h-[70px] rounded-br-[40px]" /> 

      <div className="flex-1 flex justify-end items-center px-6">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 text-white font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#5ce52e] font-semibold" : "hover:text-gray-200"
            }
          >
            Home
          </NavLink>
          <span className="text-gray-400">|</span>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive ? "text-[#5ce52e] font-semibold" : "hover:text-gray-200"
            }
          >
            About Us
          </NavLink>
          <span className="text-gray-400">|</span>
          <NavLink
            to="/how-it-works"
            className={({ isActive }) =>
              isActive ? "text-[#5ce52e] font-semibold" : "hover:text-gray-200"
            }
          >
            How it works
          </NavLink>

          {showAuthButtons && (
            <div className="flex items-center gap-4 ml-8">
              <Button
                onClick={() => navigateHandler("/")}
                variant="outline"
                className="bg-[#E0E0E0] text-black border-none hover:bg-gray-200 px-8 py-2 text-sm font-semibold rounded-lg"
              >
                Login
              </Button>
              <Button
                onClick={() => navigateHandler("/")}
                className="bg-[#60B244] hover:bg-green-600 text-white px-6 py-2 text-sm font-semibold rounded-lg"
              >
                Registration
              </Button>
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-[70px] left-0 w-full bg-[#164B88] flex flex-col items-start gap-4 p-6 text-white font-medium shadow-lg md:hidden z-40"
          >
            <NavLink to="/" className="w-full py-2" onClick={() => setMobileOpen(false)}>Home</NavLink>
            <NavLink to="/about-us" className="w-full py-2" onClick={() => setMobileOpen(false)}>About Us</NavLink>
            <NavLink to="/how-it-works" className="w-full py-2" onClick={() => setMobileOpen(false)}>How it works</NavLink>
            
            {showAuthButtons && (
              <div className="flex flex-col gap-3 w-full mt-4 border-t border-gray-500 pt-4">
                <Button
                  onClick={() => navigateHandler("/login")}
                  variant="outline"
                  className="bg-[#E0E0E0] text-black border-none hover:bg-gray-200 w-full py-2 text-sm font-semibold"
                >
                  Login
                </Button>
                <Button
                  onClick={() => navigateHandler("/register")}
                  className="bg-[#60B244] hover:bg-green-600 text-white w-full py-2 text-sm font-semibold"
                >
                  Registration
                </Button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;