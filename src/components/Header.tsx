import React, { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MainLogo } from "@/assets";

type HeaderProps = {}

const Header: React.FC<HeaderProps> = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 bg-[#164B88] h-[70px] w-full lg:px-[200px] flex justify-between items-center px-6">
      {/* Logo Section */}
     <img src={MainLogo} alt="Main Logo" className="h-[70px] rounded-br-[40px]" /> 

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-white font-medium">
        <NavLink
          end
          className={({ isActive }) =>
            isActive
              ? "text-white pb-1 border-b-3 border-b-green-300 font-semibold"
              : "text-[#F3F3F3] hover:text-gray-200"
          }
          to="/" >Home</NavLink>
        <NavLink
          end
          className={({ isActive }) =>
            isActive
              ? "text-white pb-1 border-b-3 border-b-green-300 font-semibold"
              : "text-[#F3F3F3] hover:text-gray-200"
          }
          to="/contact-us" >Contact Us</NavLink>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-[70px] left-0 w-full bg-[#164B88] flex flex-col items-start gap-4 p-6 text-white font-medium shadow-md md:hidden z-50"
          >
            <NavLink
              end
              className={({ isActive }) =>
                isActive
                  ? "text-white pb-1 border-b-3 border-b-green-300 font-semibold"
                  : "text-[#F3F3F3] hover:text-gray-200"
              }
              to="/" onClick={() => setMobileOpen(false)} >
              Home
            </NavLink>
            <NavLink
              end
              className={({ isActive }) =>
                isActive
                  ? "text-white pb-1 border-b-3 border-b-green-300 font-semibold"
                  : "text-[#F3F3F3] hover:text-gray-200"
              }
              to="/contact-us" onClick={() => setMobileOpen(false)} >
              Contact Us
            </NavLink>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;