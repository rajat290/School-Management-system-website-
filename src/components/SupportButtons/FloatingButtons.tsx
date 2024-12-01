import React, { useState } from 'react';
import { HelpCircle, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingButtons() {
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  const buttonVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const panelVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <>
      {/* FAQ Button */}
      <div className="fixed left-6 bottom-6 z-50">
        <motion.button
          onClick={() => setIsFaqOpen(!isFaqOpen)}
          className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          animate={{
            boxShadow: isFaqOpen
              ? "0 0 0 4px rgba(99, 102, 241, 0.3)"
              : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
        >
          <HelpCircle className="h-6 w-6" />
        </motion.button>

        <AnimatePresence>
          {isFaqOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={panelVariants}
              className="absolute bottom-16 left-0 w-80 bg-white rounded-lg shadow-xl p-4"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900">Quick Help</h3>
                <motion.button
                  onClick={() => setIsFaqOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>
              <div className="space-y-4">
                {['Documentation', 'Video Tutorials', 'FAQs'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed right-6 bottom-6 z-50">
        <motion.button
          onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          animate={{
            boxShadow: isWhatsAppOpen
              ? "0 0 0 4px rgba(34, 197, 94, 0.3)"
              : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
        >
          <MessageCircle className="h-6 w-6" />
        </motion.button>

        <AnimatePresence>
          {isWhatsAppOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={panelVariants}
              className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl p-4"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900">Chat with Us</h3>
                <motion.button
                  onClick={() => setIsWhatsAppOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>
              <motion.p
                className="text-gray-600 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Our support team is here to help! Click below to start a WhatsApp chat.
              </motion.p>
              <motion.a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 text-white text-center py-3 rounded-lg hover:bg-green-600 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Chat
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}