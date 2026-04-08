import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting)
    }, { threshold: 0.3 })

    if (ref) {
      observer.observe(ref)
    }

    return () => {
      if (ref) {
        observer.unobserve(ref)
      }
    }
  }, [ref])

  const skillCategories = [
    {
      category: 'Frontend',
      color: 'from-neon-pink to-neon-purple',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 92 },
        { name: 'Bootstrap', level: 88 },
        { name: 'Tailwind CSS', level: 93 },
        { name: 'React', level: 88 },
        { name: 'Vue', level: 85 },
      ],
    },
    {
      category: 'Backend',
      color: 'from-neon-blue to-neon-purple',
      skills: [
        { name: 'PHP', level: 85 },
        { name: 'Laravel', level: 80 },
        { name: '.NET', level: 78 },
        { name: 'MySQL', level: 87 },
      ],
    },
    {
      category: 'Other',
      color: 'from-neon-green to-neon-blue',
      skills: [
        { name: 'Video Editing', level: 85 },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive collection of technologies and skills I've mastered
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={setRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-effect p-8 rounded-2xl group hover:shadow-2xl transition-all duration-300"
            >
              {/* Category Header */}
              <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-6`}>
                {category.category}
              </h3>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: skillIdx * 0.1 }}
                    className="group/skill"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-300">{skill.name}</span>
                      <span className="text-xs text-neon-pink font-bold">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-2 bg-dark-secondary rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 0.8, delay: skillIdx * 0.05, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Circular Indicators - Alternative View */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { name: 'React', level: 88 },
            { name: 'JavaScript', level: 92 },
            { name: 'Tailwind', level: 93 },
            { name: 'PHP', level: 85 },
            { name: 'Laravel', level: 80 },
            { name: 'MySQL', level: 87 },
          ].map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-24 h-24 mb-2">
                {/* Background Circle */}
                <div className="absolute inset-0 rounded-full glass-effect border-2 border-neon-pink border-opacity-30" />

                {/* Progress Circle */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  {/* Background Arc */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(255, 0, 110, 0.1)"
                    strokeWidth="4"
                  />

                  {/* Progress Arc */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    strokeDasharray={`${(skill.level / 100) * 2 * Math.PI * 45} ${2 * Math.PI * 45}`}
                    strokeDashoffset={0}
                    strokeLinecap="round"
                    initial={{ strokeDasharray: `0 ${2 * Math.PI * 45}` }}
                    animate={inView ? { strokeDasharray: `${(skill.level / 100) * 2 * Math.PI * 45} ${2 * Math.PI * 45}` } : { strokeDasharray: `0 ${2 * Math.PI * 45}` }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ff006e" />
                      <stop offset="100%" stopColor="#9d00ff" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Center Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-neon-pink">{skill.level}%</span>
                </div>
              </div>
              <p className="text-center text-sm font-semibold text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-neon-blue opacity-5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-purple opacity-5 rounded-full blur-3xl" />
    </section>
  )
}

export default Skills
