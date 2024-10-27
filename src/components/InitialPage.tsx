import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const InitialPage = () => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate('/message');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-green-500 text-xl md:text-2xl mb-8 font-mono">
          Pay close attention as this message will NOT be repeated.
          <br />
          Ensure your sound is turned on.
        </h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePlayClick}
          className="bg-green-500 text-black px-6 py-3 rounded font-mono font-bold hover:bg-green-400 transition-colors"
        >
          Play audio message
        </motion.button>
      </motion.div>
    </div>
  );
};

export default InitialPage;