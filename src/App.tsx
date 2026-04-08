import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@components/Navbar'
import Loader from '@components/Loader'
import Hero from '@components/Hero'
import Skills from '@components/Skills'
import Projects from '@components/Projects'
import Services from '@components/Services'
import Experience from '@components/Experience'
import Education from '@components/Education'
import Contact from '@components/Contact'
import Footer from '@components/Footer'
import CustomCursor from '@components/CustomCursor'
import BackToTop from '@components/BackToTop'
import ChatBot from '@components/ChatBot'
import AnimatedBackground from '@components/AnimatedBackground'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="relative w-full min-h-screen bg-dark-bg text-white overflow-x-hidden">
      <CustomCursor />
      <AnimatedBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
          <Skills />
          <Projects />
          <Services />
          <Experience />
          <Education />
          <Contact />
          <Footer />
        </motion.div>
      </div>

      <ChatBot />
      <BackToTop />
    </div>
  )
}

export default App
