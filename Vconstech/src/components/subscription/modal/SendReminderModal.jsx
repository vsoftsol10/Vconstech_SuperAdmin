import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { YELLOW } from "../../../constants/subscriptionConstants";

import { stepVariants } from "./StepVariants";

import {
  BellIcon,
  CloseIcon,
  EmailIcon,
  WhatsAppIcon,
  CheckCircleIcon,
} from "../icons/SubscriptionIcons";

export default function SendReminderModal({
  row,
  onClose,
}) {
  const [step, setStep] = useState(1);

  const [channel, setChannel] = useState(null);

  const [dir, setDir] = useState(1);

  const [form, setForm] = useState({
    to: "",
    subject: "",
    message: "",
  });

  const goNext = () => {
    setDir(1);
    setStep((s) => s + 1);
  };

  const goBack = () => {
    setDir(-1);
    setStep((s) => s - 1);
  };

  return (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div
      className="absolute inset-0 bg-black/40"
      onClick={onClose}
    />

    <motion.div
      initial={{ opacity: 0, scale: 0.93, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.93, y: 20 }}
      className="relative bg-white rounded-2xl w-full max-w-xl mx-4 overflow-hidden"
    >
      {/* HEADER */}
      <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "#FFF8DC" }}
          >
            <BellIcon />
          </div>

          <div>
            <p className="font-bold text-gray-900 text-sm">
              Send Reminder
            </p>

            <p className="text-xs text-gray-400">
              To {row.name}
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-700"
        >
          <CloseIcon />
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <AnimatePresence mode="wait">

          {/* STEP 1 */}
          {step === 1 && (
            <motion.div
              key="step1"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={dir}
            >
              <p className="text-sm text-gray-600 mb-4">
                Choose channel
              </p>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setChannel("email")}
                  className={`p-4 rounded-xl border-2 ${
                    channel === "email"
                      ? "border-yellow-400"
                      : "border-gray-200"
                  }`}
                >
                  <EmailIcon />

                  <p className="mt-2 font-semibold">
                    Email
                  </p>
                </button>

                <button
                  onClick={() => setChannel("whatsapp")}
                  className={`p-4 rounded-xl border-2 ${
                    channel === "whatsapp"
                      ? "border-yellow-400"
                      : "border-gray-200"
                  }`}
                >
                  <WhatsAppIcon />

                  <p className="mt-2 font-semibold">
                    WhatsApp
                  </p>
                </button>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  disabled={!channel}
                  onClick={goNext}
                  className="px-5 py-2 rounded-lg font-bold"
                  style={{ background: YELLOW }}
                >
                  Next
                </button>
              </div>
            </motion.div>
          )}
{/* STEP 2 */}
{step === 2 && (
  <motion.div
    key="step2"
    variants={stepVariants}
    initial="enter"
    animate="center"
    exit="exit"
    custom={dir}
  >
    <div className="space-y-4">

      {/* EMAIL */}
      {channel === "email" && (
        <>
          <input
            type="text"
            placeholder="Subject"
            value={form.subject}
            onChange={(e) =>
              setForm((f) => ({
                ...f,
                subject: e.target.value,
              }))
            }
            className="w-full px-3 py-2 border rounded-lg"
          />

          <textarea
            rows={5}
            placeholder="Message"
            value={form.message}
            onChange={(e) =>
              setForm((f) => ({
                ...f,
                message: e.target.value,
              }))
            }
            className="w-full px-3 py-2 border rounded-lg"
          />
        </>
      )}

      {/* WHATSAPP */}
      {channel === "whatsapp" && (
        <textarea
          rows={6}
          placeholder="Message"
          value={form.message}
          onChange={(e) =>
            setForm((f) => ({
              ...f,
              message: e.target.value,
            }))
          }
          className="w-full px-3 py-2 border rounded-lg"
        />
      )}
    </div>

    <div className="flex justify-end gap-2 mt-6">
      <button
        onClick={goBack}
        className="px-5 py-2 border rounded-lg"
      >
        Back
      </button>

      <button
        onClick={goNext}
        className="px-5 py-2 rounded-lg font-bold"
        style={{ background: YELLOW }}
      >
        Send
      </button>
    </div>
  </motion.div>
)}
          {/* STEP 3 */}
          {step === 3 && (
            <motion.div
              key="step3"
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={dir}
              className="text-center py-10"
            >
              <div className="flex justify-center mb-4">
                <CheckCircleIcon />
              </div>

              <h2 className="text-lg font-bold text-gray-900">
                Reminder Sent
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                Reminder sent to {row.name}
              </p>

              <button
                onClick={onClose}
                className="mt-6 px-6 py-2 rounded-lg font-bold"
                style={{ background: YELLOW }}
              >
                Done
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </motion.div>
  </motion.div>
);
}