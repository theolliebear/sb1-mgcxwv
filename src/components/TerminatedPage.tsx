import React from 'react';
import { motion } from 'framer-motion';

const TerminatedPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-red-600 text-4xl md:text-6xl font-mono font-bold"
      >
        Message Terminated
      </motion.h1>
    </div>
  );
};

export default TerminatedPage;