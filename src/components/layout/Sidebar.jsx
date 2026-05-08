import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

import {
  FiGrid,
  FiTrendingUp,
  FiUsers,
  FiLayers,
  FiClipboard,
  FiX,
} from "react-icons/fi";

import logo from "../../assets/images/logo.jpeg";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: FiGrid,
    path: "/",
  },

  {
    id: "lead-sales",
    label: "Lead & Sales",
    icon: FiTrendingUp,
    path: "/lead-sales",
  },

  {
    id: "customer",
    label: "Customer",
    icon: FiUsers,
    path: "/customer",
  },

  {
    id: "department",
    label: "Department",
    icon: FiLayers,
    path: "/department",
  },

  {
    id: "subscription",
    label: "Subscription",
    icon: FiClipboard,
    path: "/subscription",
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {

  // Auto open sidebar on desktop
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setSidebarOpen(true);
    }
  }, [setSidebarOpen]);

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -100 }}
        animate={{
          x: sidebarOpen ? 0 : -300,
        }}
        transition={{ duration: 0.3 }}
        className={`
          fixed
          top-0
          left-0
          z-50
          w-[230px]
          min-h-screen
          bg-white
          border-r
          border-gray-200
          flex
          flex-col
          shadow-sm
          transition-transform
          duration-300

          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

          lg:translate-x-0
        `}
      >

        {/* Logo Section */}
        <div
          className="
            h-[90px]
            border-b
            border-gray-200
            flex
            items-center
            justify-between
            px-5
          "
        >

          <motion.img
            src={logo}
            alt="logo"
            className="
              w-full
              max-w-[170px]
              object-cover
              cursor-pointer
            "
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
          />

          {/* Mobile Close */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <FiX className="text-xl text-gray-700" />
          </button>

        </div>

        {/* Menu */}
        <nav className="flex flex-col py-4">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    setSidebarOpen(false);
                  }
                }}
                className={({ isActive }) =>
                  `
                  relative
                  flex
                  items-center
                  gap-3
                  h-[50px]
                  px-6
                  cursor-pointer
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "bg-[#F5C518] text-black font-semibold"
                      : "text-gray-500 hover:bg-[#fdf7e0]"
                  }
                  `
                }
              >

                {({ isActive }) => (
                  <>
                    {/* Active Left Border */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="
                          absolute
                          left-0
                          top-0
                          h-full
                          w-1
                          bg-yellow-600
                          rounded-r-md
                        "
                      />
                    )}

                    {/* Icon */}
                    <Icon className="text-[19px]" />

                    {/* Label */}
                    <span className="text-[15px] tracking-[0.2px]">
                      {item.label}
                    </span>
                  </>
                )}

              </NavLink>
            );
          })}

        </nav>

      </motion.aside>
    </>
  );
};

export default Sidebar;