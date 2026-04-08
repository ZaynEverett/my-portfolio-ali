import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center justify-center"
      >
        {/* Animated Circles */}
        <div className="relative w-40 h-40 mb-8">
          <motion.div
            className="absolute inset-0 border-4 border-transparent border-t-neon-pink border-r-neon-pink rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-4 border-4 border-transparent border-b-neon-blue border-l-neon-blue rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-8 border-4 border-transparent border-t-neon-purple rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />

          {/* Center Text */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gradient"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading
          </motion.div>
        </div>

        {/* Loading Text */}
        <motion.p
          className="text-center text-gray-400 text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Welcome to my portfolio
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Loader
