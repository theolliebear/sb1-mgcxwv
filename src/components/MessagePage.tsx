import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface MessagePageProps {
  setHasSeenMessage: (value: boolean) => void;
}

const MessagePage = ({ setHasSeenMessage }: MessagePageProps) => {
  const [countdown, setCountdown] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Start audio playback
    if (audioRef.current) {
      audioRef.current.play();
    }

    // Wait for audio to finish before starting countdown
    const timer = setTimeout(() => {
      setCountdown(10);
    }, 54000); // 54 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) {
      localStorage.setItem('missionStatus', 'terminated');
      setHasSeenMessage(true);
      navigate('/terminated');
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, navigate, setHasSeenMessage]);

  return (
    <div className="min-h-screen bg-black text-green-500 p-4 flex flex-col items-center justify-center font-mono">
      <audio ref={audioRef} src="/mission.mp3" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto space-y-6"
      >
        <p className="text-lg md:text-xl leading-relaxed">
          Good morning <span className="text-yellow-500">Agent Huang</span>. Your mission, should you choose to accept it, involves the recovery of critical ingredients needed to make an antidote for <span className="text-red-500">Legumorax</span>, a poison that's entered public waters.
        </p>
        
        <p className="text-lg md:text-xl leading-relaxed">
          It is essential that you recruit <span className="text-yellow-500">Yoon-ji Kim</span> & <span className="text-yellow-500">Leanne Park</span> as members of your team. They are civilians but may come in handy if you get stuck. You have <span className="text-red-500">1 hour</span> to recruit Ms. Kim & Ms. Park. Then, you must contact us using a designated <span className="text-yellow-500">BMF</span> communication booth to receive your assignment.
        </p>
        
        <p className="text-lg md:text-xl leading-relaxed">
          Do not use any personal phone devices to contact us as our intel reports that the <span className="text-red-500">LLL</span> has tapped into the phone network to track our agents. And as always, should you or any member of your <span className="text-yellow-500">BMF</span> team be caught or killed, the secretary will disavow any knowledge of your actions.
        </p>

        {countdown !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-4xl font-bold text-center mt-8"
          >
            This message will self-destruct in {countdown} seconds
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default MessagePage;