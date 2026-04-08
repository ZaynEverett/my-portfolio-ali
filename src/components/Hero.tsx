import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = "Hi, I'm Ali Ahmed – Web Developer & Student"
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, textIndex + 1))
        setTextIndex(textIndex + 1)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [textIndex, fullText.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-neon-blue mb-6 font-semibold"
        >
          Welcome to my portfolio
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold mb-6 text-gradient"
        >
          Ali Ahmed
        </motion.h1>

        {/* Typing Text */}
        <motion.div
          variants={itemVariants}
          className="text-2xl md:text-4xl font-bold mb-8 h-16 flex items-center justify-center"
        >
          <span className="text-neon-pink">
            {displayedText}
            <span className="animate-pulse ml-2">|</span>
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Passionate Developer | Creative Thinker | Future Innovator
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          I'm a passionate web developer and university student who continuously learns and
          improves skills in modern web technologies. I build visually appealing and functional
          web applications while exploring the world of video editing and creative design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold rounded-lg neon-glow-pink hover-glow transition-all"
          >
            View Projects
          </motion.button>
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aliahmedhome09876@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-neon-blue text-neon-blue font-bold rounded-lg hover:bg-neon-blue hover:text-dark-bg transition-all"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center mb-16"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 glass-effect rounded-full neon-glow-blue hover-glow transition-all"
          >
            <FaGithub className="w-6 h-6 text-neon-blue" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 glass-effect rounded-full neon-glow-purple hover-glow transition-all"
          >
            <FaLinkedin className="w-6 h-6 text-neon-purple" />
          </motion.a>
        </motion.div>

        {/* Floating Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="p-3 glass-effect rounded-full neon-glow-pink">
            <FiArrowDown className="w-6 h-6 text-neon-pink" />
          </div>
        </motion.div>
      </motion.div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-neon-pink opacity-5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  )
}

export default Hero
