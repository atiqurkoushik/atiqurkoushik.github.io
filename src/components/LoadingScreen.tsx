import { motion, AnimatePresence } from "framer-motion";
import avatarImg from "@/assets/koushik-avatar.png";

interface Props {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: Props) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col items-center gap-6"
          >
            {/* Avatar with animated glow rings */}
            <div className="relative">
              <motion.div
                className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden ring-2 ring-primary/60 relative z-10"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(168,85,247,0.3), 0 0 40px rgba(59,130,246,0.2)",
                    "0 0 40px rgba(168,85,247,0.6), 0 0 80px rgba(59,130,246,0.4)",
                    "0 0 20px rgba(168,85,247,0.3), 0 0 40px rgba(59,130,246,0.2)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <img src={avatarImg} alt="Koushik Atiqur" className="w-full h-full object-cover" />
              </motion.div>
              {/* Outer pulse ring */}
              <motion.div
                className="absolute -inset-3 rounded-full border border-primary/30"
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -inset-6 rounded-full border border-neon-blue/20"
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
              />
            </div>

            {/* Name text */}
            <motion.h1
              className="text-3xl md:text-4xl font-heading font-bold gradient-text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Koushik Atiqur
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
