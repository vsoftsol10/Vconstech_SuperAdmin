// // import { useEffect, useRef } from "react";
// // import { motion } from "framer-motion";

// // import {
// //   EditIcon,
// //   TrashIcon,
// //   BellIcon,
// // } from "../icons/SubscriptionIcons";

// // export default function DropdownMenu({
// //   row,
// //   onClose,
// //   onNotification,
// // }) {
// //   const ref = useRef(null);

// //   useEffect(() => {
// //     const handler = (e) => {
// //       if (ref.current && !ref.current.contains(e.target)) {
// //         onClose();
// //       }
// //     };

// //     document.addEventListener("mousedown", handler);

// //     return () =>
// //       document.removeEventListener("mousedown", handler);
// //   }, [onClose]);

// //   return (
// //     <motion.div
// //       ref={ref}
// //       initial={{ opacity: 0, scale: 0.88, y: -6 }}
// //       animate={{ opacity: 1, scale: 1, y: 0 }}
// //       exit={{ opacity: 0, scale: 0.88, y: -6 }}
// //       className="absolute right-0 top-8 z-50 bg-white border border-gray-100 rounded-xl shadow-lg py-1 min-w-[148px]"
// //     >

// //       {/* YOUR MENU ITEMS */}

// //     </motion.div>
// //   );
// // }
// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// import {
//   EditIcon,
//   TrashIcon,
//   BellIcon,
// } from "../icons/SubscriptionIcons";

// export default function DropdownMenu({
//   row,
//   onClose,
//   onNotification,
// }) {
//   const ref = useRef(null);

//   useEffect(() => {
//     const handler = (e) => {
//       if (ref.current && !ref.current.contains(e.target)) {
//         onClose();
//       }
//     };

//     document.addEventListener("mousedown", handler);

//     return () =>
//       document.removeEventListener("mousedown", handler);
//   }, [onClose]);

//   const items = [
//     {
//       icon: <EditIcon />,
//       label: "Edit",
//       color: "text-gray-700",
//     },
//     {
//       icon: <TrashIcon />,
//       label: "Delete",
//       color: "text-red-500",
//     },
//     {
//       icon: <BellIcon />,
//       label: "Notification",
//       color: "text-gray-700",
//     },
//   ];

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, scale: 0.88, y: -6 }}
//       animate={{ opacity: 1, scale: 1, y: 0 }}
//       exit={{ opacity: 0, scale: 0.88, y: -6 }}
//       transition={{ duration: 0.15, ease: "easeOut" }}
//       className="absolute right-0 top-8 z-50 bg-white border border-gray-100 rounded-xl shadow-lg py-1 min-w-[148px]"
//       style={{
//         boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
//       }}
//     >
//       {items.map((item) => (
//         <button
//           key={item.label}
//           onClick={() => {
//             if (item.label === "Notification") {
//               onNotification(row);
//             }

//             onClose();
//           }}
//           className={`flex items-center gap-2.5 w-full px-4 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors ${item.color}`}
//         >
//           {item.icon}
//           {item.label}
//         </button>
//       ))}
//     </motion.div>
//   );
// }
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import {
  EditIcon,
  TrashIcon,
  BellIcon,
} from "../icons/SubscriptionIcons";

export default function DropdownMenu({
  row,
  onClose,
  onNotification,
  onDelete, // ADD THIS
}) {
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handler);

    return () =>
      document.removeEventListener("mousedown", handler);
  }, [onClose]);

  const items = [
    {
      icon: <EditIcon />,
      label: "Edit",
      color: "text-gray-700",
    },
    {
      icon: <TrashIcon />,
      label: "Delete",
      color: "text-red-500",
    },
    {
      icon: <BellIcon />,
      label: "Notification",
      color: "text-gray-700",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.88, y: -6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.88, y: -6 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="absolute right-0 top-8 z-50 bg-white border border-gray-100 rounded-xl shadow-lg py-1 min-w-[148px]"
    >
      {items.map((item) => (
        <button
          key={item.label}
          onClick={() => {

            if (item.label === "Notification") {
              onNotification(row);
            }

            if (item.label === "Delete") {
              onDelete(row.id);
            }

            onClose();
          }}
          className={`flex items-center gap-2.5 w-full px-4 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors ${item.color}`}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </motion.div>
  );
}