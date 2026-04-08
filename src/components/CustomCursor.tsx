import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).tagName === 'A' ||
        (e.target as HTMLElement).tagName === 'BUTTON' ||
        (e.target as HTMLElement).getAttribute('role') === 'button'
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [])

  return (
    <>
      {/* Main Cursor Circle */}
      <motion.div
        className={`fixed w-8 h-8 border-2 rounded-full pointer-events-none z-40 ${
          isHovering
            ? 'border-neon-pink shadow-neon-pink'
            : 'border-neon-blue shadow-neon-blue'
        }`}
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      {/* Inner Dot */}
      <motion.div
        className="fixed w-1 h-1 bg-neon-pink rounded-full pointer-events-none z-40"
        animate={{
          x: position.x - 2,
          y: position.y - 2,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 28 }}
      />
    </>
  )
}

export default CustomCursor
