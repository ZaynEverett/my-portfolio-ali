import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { MdVolumeUp, MdVolumeOff } from 'react-icons/md'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Services', id: 'services' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(id)
    setIsOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#" className="text-2xl font-bold text-gradient">
              Ali Ahmed
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-neon-pink'
                    : 'text-gray-300 hover:text-white'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-neon-pink to-neon-purple"
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
            {/* Music Toggle */}
            <motion.button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 text-gray-300 hover:text-neon-blue transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={isMuted ? 'Unmute Background Music' : 'Mute Background Music'}
            >
              {isMuted ? <MdVolumeOff size={20} /> : <MdVolumeUp size={20} />}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="glass-effect px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md ${
                activeSection === item.id
                  ? 'text-neon-pink bg-dark-secondary'
                  : 'text-gray-300 hover:text-white hover:bg-dark-secondary'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.button>
          ))}
          {/* Music Toggle Mobile */}
          <motion.button
            onClick={() => setIsMuted(!isMuted)}
            className="flex items-center w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-neon-blue hover:bg-dark-secondary rounded-md"
            whileTap={{ scale: 0.95 }}
          >
            {isMuted ? <MdVolumeOff size={20} className="mr-2" /> : <MdVolumeUp size={20} className="mr-2" />}
            {isMuted ? 'Unmute Music' : 'Mute Music'}
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
