import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function WhatsAppWidget() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4"
        >
          <div className="bg-white rounded-2xl p-4 shadow-2xl border border-slate-100 max-w-[280px] hidden md:block">
            <p className="text-sm font-semibold text-navy mb-1">Questions?</p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Chat with our admissions team directly on WhatsApp for instant assistance.
            </p>
          </div>
          
          <a
            href="https://wa.me/233244367117?text=Hello Hatfield Montessori, I would like to inquire about admissions."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-8 h-8" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
