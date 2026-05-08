import {
  FiSearch,
  FiBell,
  FiPlus,
  FiMenu,
} from "react-icons/fi";

import { motion } from "framer-motion";

const Header = ({ setSidebarOpen }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="h-[76px] bg-white border-b border-gray-200 px-4 md:px-6 flex items-center justify-between shadow-sm"
    >

      {/* Left */}
      <div className="flex items-center gap-3 flex-1">

        {/* Mobile Menu */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden w-10 h-10 rounded-lg bg-[#f5f5f5] flex items-center justify-center"
        >
          <FiMenu className="text-xl" />
        </button>

        {/* Search */}
        <div className="flex-1 max-w-[600px]">

          <div className="flex items-center h-[42px] md:h-[44px] bg-[#f5f5f5] rounded-xl px-4 border border-transparent focus-within:border-[#F5C518] transition-all duration-300">

            <FiSearch className="text-gray-400 text-lg" />

            <input
              type="text"
              placeholder="Search"
              className="flex-1 bg-transparent outline-none px-3 text-sm"
            />
          </div>
        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-2 md:gap-4 ml-3">

        {/* Quick Add */}
        <button className="flex items-center gap-2 h-[40px] md:h-[42px] px-3 md:px-5 rounded-xl bg-[#F5C518] hover:bg-yellow-500 transition-all duration-300 font-semibold text-sm">

          <FiPlus />

          <span className="hidden sm:block">
            Quick Add
          </span>
        </button>

        {/* Notification */}
        <div className="relative w-[40px] md:w-[42px] h-[40px] md:h-[42px] rounded-xl bg-[#f5f5f5] flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all duration-300">

          <FiBell className="text-gray-700 text-lg md:text-xl" />

          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </div>

        {/* Avatar */}
        <div className="w-[40px] md:w-[42px] h-[40px] md:h-[42px] rounded-full overflow-hidden">

          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </motion.header>
  );
};

export default Header;