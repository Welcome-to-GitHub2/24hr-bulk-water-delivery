'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppFloating() {
  const phone = '27682805455'; 
  const message = encodeURIComponent("Hi! I'd like a bulk water quote for Gauteng please 💧");

  return (
    <motion.a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.15, rotate: 12 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-[0_0_30px_#25D366] transition-shadow"
    >
      <MessageCircle size={34} />
      <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full animate-ping" />
    </motion.a>
  );
}