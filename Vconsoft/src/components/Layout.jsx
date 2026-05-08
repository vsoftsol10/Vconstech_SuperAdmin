
// import { useState, useRef, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import {
//     Search, Bell, LayoutDashboard, Users,
//     Building2, CreditCard, TrendingUp, HardHat, Menu
// } from 'lucide-react';
// import Logo from "../assets/logo.png";

// const navItems = [
//     { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
//     { label: 'Lead & Sales', icon: TrendingUp, path: '/lead' },
//     { label: 'Customer', icon: Users, path: '/customer' },
//     { label: 'Department', icon: Building2, path: '/department' },
//     { label: 'Subscription', icon: CreditCard, path: '/subscription' },
// ];

// export default function Layout({ children }) {
//     const location = useLocation();

//     const [isOpen, setIsOpen] = useState(false);
//     const sidebarRef = useRef();

//     // 👉 Close when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (e) => {
//             if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
//                 setIsOpen(false);
//             }
//         };

//         if (isOpen) {
//             document.addEventListener("mousedown", handleClickOutside);
//         }

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [isOpen]);

//     return (
//         <div className="flex h-screen bg-[#F5F5F5] overflow-hidden">

//             {/* 🔥 Overlay (mobile only) */}
//             {isOpen && (
//                 <div className="fixed inset-0 bg-black/30 z-40 md:hidden"></div>
//             )}

//             {/* Sidebar */}
//             <aside
//                 ref={sidebarRef}
//                 className={`fixed md:static z-50 top-0 left-0 h-full w-[220px] bg-white flex flex-col border-r border-gray-100
//         transform transition-transform duration-300
//         ${isOpen ? "translate-x-0" : "-translate-x-full"}
//         md:translate-x-0`}
//             >
//                 {/* Logo */}
//                 <div className="flex items-center gap-2 px-5 py-5">
//                     <img src={Logo} alt="" />
//                 </div>

//                 {/* Nav */}
//                 <nav className="flex-1 px-3 mt-4 space-y-1">
//                     {navItems.map((item) => {
//                         const isActive = location.pathname === item.path;

//                         return (
//                             <Link
//                                 key={item.path}
//                                 to={item.path}
//                                 onClick={() => setIsOpen(false)} // close after click
//                                 className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
//                 ${isActive
//                                         ? 'bg-[#FFC107] text-white'
//                                         : 'text-gray-600 hover:bg-gray-50 hover:translate-x-1'
//                                     }`}
//                             >
//                                 <item.icon className="w-5 h-5" />
//                                 {item.label}
//                             </Link>
//                         );
//                     })}
//                 </nav>
//             </aside>

//             {/* Main */}
//             <div className="flex-1 flex flex-col overflow-hidden">

//                 {/* Header */}
//                <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-6">

//   {/* LEFT */}
//   <div className="flex items-center gap-2 flex-1 min-w-0">  {/* ✅ flex-1 + min-w-0 prevents overflow */}
    
//     {/* Hamburger */}
//     <button onClick={() => setIsOpen(true)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 flex-shrink-0">
//       <Menu className="w-5 h-5" />
//     </button>

//     {/* Search — ✅ flex-1 so it fills available space, max-w caps it on desktop */}
//     <div className="relative flex-1 min-w-0 max-w-xs md:max-w-sm lg:max-w-md">
//       <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//       <input
//         type="text"
//         placeholder="Search..."
//         className="w-full pl-10 pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none 
//           focus:ring-2 focus:ring-yellow-200 focus:border-yellow-400 transition-all"
//       />
//     </div>
//   </div>

//   {/* RIGHT */}
//   <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">  {/* ✅ flex-shrink-0 keeps icons from squishing */}

//     {/* ✅ Icon-only on mobile, full text on md+ */}
//     <button className="bg-[#FFC107] hover:bg-[#F5A623] text-white font-medium 
//       px-2 py-2 md:px-4 rounded-lg transition-all active:scale-95">
//       <span className="hidden md:inline">+ Quick Add</span>
//       <span className="md:hidden text-lg leading-none font-bold">+</span>
//     </button>

//     {/* Bell */}
//     <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
//       <Bell className="w-5 h-5 text-gray-600" />
//       <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
//     </button>

//     {/* Avatar */}
//     <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
//       <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" alt="avatar" />
//     </div>
//   </div>
// </header>

//                 {/* Content */}
//                 <main className="flex-1 overflow-auto p-4 md:p-6">
//                     {children}
//                 </main>
//             </div>
//         </div>
//     );
// }
import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Search, Bell, LayoutDashboard, Users,
    Building2, CreditCard, TrendingUp, HardHat, Menu
} from 'lucide-react';
import Logo from "../assets/logo.png";

// ✅ Animation keyframes
const animStyles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-18px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideInDown {
    from { opacity: 0; transform: translateY(-10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes popIn {
    from { opacity: 0; transform: scale(0.93); }
    to   { opacity: 1; transform: scale(1); }
  }
`;

const navItems = [
    { label: 'Dashboard',    icon: LayoutDashboard, path: '/dashboard' },
    { label: 'Lead & Sales', icon: TrendingUp,       path: '/lead' },
    { label: 'Customer',     icon: Users,            path: '/customer' },
    { label: 'Department',   icon: Building2,        path: '/department' },
    { label: 'Subscription', icon: CreditCard,       path: '/subscription' },
];

export default function Layout({ children }) {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        if (isOpen) document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <>
            {/* ✅ Inject keyframes once */}
            <style>{animStyles}</style>

            <div className="flex h-screen bg-[#F5F5F5] overflow-hidden">

                {/* Overlay — ✅ fades in */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/30 z-40 md:hidden"
                        style={{ animation: "fadeIn 0.2s ease both" }}
                    />
                )}

                {/* Sidebar */}
                <aside
                    ref={sidebarRef}
                    className={`fixed md:static z-50 top-0 left-0 h-full w-[220px] bg-white flex flex-col border-r border-gray-100
                        transform transition-transform duration-300
                        ${isOpen ? "translate-x-0" : "-translate-x-full"}
                        md:translate-x-0`}
                >
                    {/* Logo — ✅ slides down on load */}
                    <div
                        className="flex items-center gap-2 px-5 py-5"
                        style={{ animation: "slideInDown 0.4s ease both" }}
                    >
                        <img src={Logo} alt="logo" />
                    </div>

                    {/* Nav items — ✅ staggered slide in from left */}
                    <nav className="flex-1 px-3 mt-4 space-y-1">
                        {navItems.map((item, i) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    style={{ animation: `slideInLeft 0.35s ease ${80 + i * 55}ms both` }}
                                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                                        ${isActive
                                            ? 'bg-[#FFC107] text-white shadow-sm shadow-yellow-200'
                                            : 'text-gray-600 hover:bg-gray-50 hover:translate-x-1'
                                        }`}
                                >
                                    {/* ✅ Icon subtly scales on active */}
                                    <item.icon
                                        className="w-5 h-5 flex-shrink-0 transition-transform duration-200"
                                        style={{ transform: isActive ? "scale(1.15)" : "scale(1)" }}
                                    />
                                    {item.label}

                                    {/* ✅ Active indicator dot */}
                                    {isActive && (
                                        <span
                                            className="ml-auto w-1.5 h-1.5 rounded-full bg-white/70"
                                            style={{ animation: "popIn 0.3s ease both" }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </aside>

                {/* Main */}
                <div className="flex-1 flex flex-col overflow-hidden">

                    {/* Header — ✅ slides down */}
                    <header
                        className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-6"
                        style={{ animation: "slideInDown 0.4s ease both" }}
                    >
                        {/* LEFT */}
                        <div className="flex items-center gap-2 flex-1 min-w-0">

                            {/* Hamburger — ✅ pops in on mobile */}
                            <button
                                onClick={() => setIsOpen(true)}
                                className="md:hidden p-2 rounded-lg hover:bg-gray-100 active:scale-90 transition-all flex-shrink-0"
                                style={{ animation: "popIn 0.35s ease 0.1s both" }}
                            >
                                <Menu className="w-5 h-5" />
                            </button>

                            {/* Search — ✅ fades in */}
                            <div
                                className="relative flex-1 min-w-0 max-w-xs md:max-w-sm lg:max-w-md"
                                style={{ animation: "fadeUp 0.4s ease 0.15s both" }}
                            >
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full pl-10 pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none
                                        focus:ring-2 focus:ring-yellow-200 focus:border-yellow-400 transition-all"
                                />
                            </div>
                        </div>

                        {/* RIGHT — ✅ each item fades up with stagger */}
                        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">

                            {/* Quick Add */}
                            <button
                                className="bg-[#FFC107] hover:bg-[#F5A623] text-white font-medium
                                    px-2 py-2 md:px-4 rounded-lg transition-all active:scale-95"
                                style={{ animation: "fadeUp 0.4s ease 0.2s both" }}
                            >
                                <span className="hidden md:inline">+ Quick Add</span>
                                <span className="md:hidden text-lg leading-none font-bold">+</span>
                            </button>

                            {/* Bell */}
                            <button
                                className="relative p-2 rounded-full hover:bg-gray-100 transition hover:scale-110 active:scale-95"
                                style={{ animation: "fadeUp 0.4s ease 0.28s both" }}
                            >
                                <Bell className="w-5 h-5 text-gray-600" />
                                {/* ✅ Dot pulses */}
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                            </button>

                            {/* Avatar */}
                            <div
                                className="w-9 h-9 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 ring-2 ring-transparent hover:ring-yellow-300 transition-all duration-200"
                                style={{ animation: "popIn 0.35s ease 0.35s both" }}
                            >
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" alt="avatar" />
                            </div>
                        </div>
                    </header>

                    {/* Content — ✅ fades up on every route change */}
                    <main
                        key={location.pathname}
                        className="flex-1 overflow-auto p-4 md:p-6"
                        style={{ animation: "fadeUp 0.35s ease both" }}
                    >
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
}