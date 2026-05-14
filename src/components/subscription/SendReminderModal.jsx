import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMail, FiPhone, FiCheck } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";

const YELLOW = "#F5C518";

const stepVariants = {
  enter: (dir) => ({ opacity: 0, x: dir * 32 }),
  center: { opacity: 1, x: 0 },
  exit:  (dir) => ({ opacity: 0, x: -dir * 32 }),
};

export default function SendReminderModal({ row, onClose }) {
  const [step,    setStep]    = useState(1);
  const [channel, setChannel] = useState(null);
  const [dir,     setDir]     = useState(1);
  const [form,    setForm]    = useState({
    to: "", subject: "", phone: "", message: "",
  });

  const goNext = () => { setDir(1);  setStep((s) => s + 1); };
  const goBack = () => { setDir(-1); setStep((s) => s - 1); };

  const stepLabel = (n) =>
    n === 1 ? "Channel" : n === 2 ? "Compose" : "Sent";

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-black/40" onClick={step < 3 ? onClose : undefined} />

      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 20 }}
        animate={{ opacity: 1, scale: 1,    y: 0  }}
        exit={{   opacity: 0, scale: 0.93,  y: 20 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-white rounded-2xl w-full max-w-xl mx-4 overflow-hidden shadow-2xl"
      >

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-yellow-50 flex items-center justify-center">
              <IoNotificationsOutline className="text-[#F5C518] text-lg" />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm">Send Reminder</p>
              <p className="text-xs text-gray-400">To {row.name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 transition-colors p-1 rounded-lg hover:bg-gray-100"
          >
            <FiX size={16} />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center px-6 py-4 gap-2">
          {[1, 2, 3].map((n, i) => (
            <div key={n} className="flex items-center gap-2 flex-1 last:flex-none">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors duration-300"
                style={n <= step
                  ? { background: YELLOW, color: "#fff" }
                  : { background: "#f3f4f6", color: "#9ca3af" }
                }
              >
                {n}
              </div>
              <span className={`text-xs font-semibold transition-colors duration-300 ${n <= step ? "text-gray-800" : "text-gray-400"}`}>
                {stepLabel(n)}
              </span>
              {i < 2 && (
                <div
                  className="flex-1 h-px mx-1 transition-colors duration-300"
                  style={{ background: n < step ? YELLOW : "#e5e7eb" }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="overflow-hidden px-6 pb-6">
          <AnimatePresence mode="wait" custom={dir}>

            {/* STEP 1 — Channel */}
            {step === 1 && (
              <motion.div
                key="step1"
                custom={dir}
                variants={stepVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.22, ease: "easeInOut" }}
              >
                <p className="text-sm text-gray-500 mb-4 mt-1">
                  Choose how you'd like to reach out
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { key: "email",    icon: <FiMail size={28} />,      title: "Email",    sub: "Send a template reminder" },
                    { key: "whatsapp", icon: <BsWhatsapp size={28} />,  title: "WhatsApp", sub: "Send a reminder"          },
                  ].map((ch) => (
                    <motion.button
                      key={ch.key}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setChannel(ch.key)}
                      className="flex flex-col items-start gap-3 p-4 rounded-xl border-2 transition-all duration-200 text-left"
                      style={{
                        borderColor: channel === ch.key ? YELLOW : "#e5e7eb",
                        background:  channel === ch.key ? "#FFFDE7" : "#fff",
                      }}
                    >
                      <span className="text-gray-700">{ch.icon}</span>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{ch.title}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{ch.sub}</p>
                      </div>
                    </motion.button>
                  ))}
                </div>
                <div className="flex justify-end gap-2 mt-6">
                  <button
                    onClick={onClose}
                    className="px-5 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all"
                  >
                    Cancel
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={goNext}
                    disabled={!channel}
                    className="px-5 py-2 rounded-xl text-sm font-bold text-gray-900 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{ background: YELLOW }}
                  >
                    Next →
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* STEP 2 — Email Compose */}
            {step === 2 && channel === "email" && (
              <motion.div
                key="step2-email"
                custom={dir}
                variants={stepVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.22, ease: "easeInOut" }}
                className="space-y-4 mt-1"
              >
                {[
                  { label: "To",      field: "to",      type: "input"    },
                  { label: "Subject", field: "subject", type: "input"    },
                  { label: "Message", field: "message", type: "textarea" },
                ].map(({ label, field, type }) => (
                  <div key={field}>
                    <label className="block text-sm text-gray-700 font-medium mb-1.5 text-left">
                      {label}
                    </label>
                    {type === "textarea" ? (
                      <textarea
                        rows={4}
                        value={form[field]}
                        onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
                        className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50 outline-none focus:border-[#F5C518] transition-colors resize-none"
                      />
                    ) : (
                      <input
                        type="text"
                        value={form[field]}
                        onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
                        className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50 outline-none focus:border-[#F5C518] transition-colors"
                      />
                    )}
                  </div>
                ))}
                <div className="flex justify-end gap-2 pt-1">
                  <button
                    onClick={goBack}
                    className="px-5 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all"
                  >
                    Back
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={goNext}
                    className="px-5 py-2 rounded-xl text-sm font-bold text-gray-900 transition-all"
                    style={{ background: YELLOW }}
                  >
                    Send Reminder
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* STEP 2 — WhatsApp Compose */}
            {step === 2 && channel === "whatsapp" && (
              <motion.div
                key="step2-whatsapp"
                custom={dir}
                variants={stepVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.22, ease: "easeInOut" }}
                className="space-y-4 mt-1"
              >
                {/* Phone number field added */}
                <div>
                  <label className="block text-sm text-gray-700 font-medium mb-1.5 text-left">
                    Phone Number
                  </label>
                  <div className="flex items-center gap-2 px-3 py-2.5 border border-gray-200 rounded-xl bg-gray-50">
                    <FiPhone className="text-gray-400 shrink-0" />
                    <input
                      type="text"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      placeholder="+91 00000 00000"
                      className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 font-medium mb-1.5 text-left">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50 outline-none focus:border-[#F5C518] transition-colors resize-none"
                  />
                </div>
                <div className="flex justify-end gap-2 pt-1">
                  <button
                    onClick={goBack}
                    className="px-5 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all"
                  >
                    Back
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={goNext}
                    className="px-5 py-2 rounded-xl text-sm font-bold text-gray-900 transition-all"
                    style={{ background: YELLOW }}
                  >
                    Send
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* STEP 3 — Success */}
            {step === 3 && (
              <motion.div
                key="step3"
                custom={dir}
                variants={stepVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.22, ease: "easeInOut" }}
                className="flex flex-col items-center py-8"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.1 }}
                  className="w-14 h-14 rounded-full bg-yellow-50 flex items-center justify-center mb-4"
                >
                  <FiCheck className="text-[#F5C518] text-2xl" />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="font-bold text-gray-900 text-base"
                >
                  Reminder Sent
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32 }}
                  className="text-sm text-gray-400 mt-1"
                >
                  {channel === "email" ? "Email" : "WhatsApp"} delivered to {row.name}.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-2 mt-8"
                >
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all"
                  >
                    Close
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-xl text-sm font-bold text-gray-900 transition-all"
                    style={{ background: YELLOW }}
                  >
                    Done
                  </motion.button>
                </motion.div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}