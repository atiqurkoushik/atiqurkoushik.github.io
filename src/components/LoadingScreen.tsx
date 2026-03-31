import { motion, AnimatePresence } from "framer-motion";

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
            className="relative"
          >
            <motion.h1
              className="text-7xl md:text-9xl font-heading font-bold gradient-text"
              animate={{
                textShadow: [
                  "0 0 20px rgba(168,85,247,0.4)",
                  "0 0 60px rgba(168,85,247,0.8)",
                  "0 0 20px rgba(168,85,247,0.4)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              KA
            </motion.h1>
            <motion.div
              className="absolute -inset-4 rounded-full border border-primary/30"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
