import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import DropdownMenu from "./DropdownMenu";
import SendReminderModal from "../modal/SendReminderModal";

export default function ActionMenu({ row,
  onDelete, }) {
  const [open, setOpen] = useState(false);

  const [modalRow, setModalRow] = useState(null);

  return (
    <>
      <div className="relative">

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-gray-400 hover:text-gray-700 font-bold text-lg leading-none active:scale-95 transition-transform duration-150 px-2"
        >
          ⋮
        </button>

        <AnimatePresence>
          {open && (
           <DropdownMenu
  row={row}
  onClose={() => setOpen(false)}
  onDelete={onDelete}
  onNotification={(r) => {
    setModalRow(r);
    setOpen(false);
  }}
/>
          )}
        </AnimatePresence>

      </div>

      <AnimatePresence>
        {modalRow && (
          <SendReminderModal
            row={modalRow}
            onClose={() => setModalRow(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}