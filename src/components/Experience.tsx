import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Full Stack Web Developer',
      company: 'Tech Startup Company',
      duration: 'Jan 2022 - Present',
      description:
        'Developing full-stack web applications using React, Laravel, and MySQL. Leading frontend development and implementing responsive designs with modern animation libraries.',
      skills: ['React', 'Laravel', 'MySQL', 'Tailwind CSS'],
      color: 'from-neon-pink to-neon-purple',
    },
    {
      id: 2,
      title: 'Frontend Developer Intern',
      company: 'Digital Solutions Inc.',
      duration: 'Jun 2021 - Dec 2021',
      description:
        'Built responsive user interfaces using React and Vue.js. Collaborated with design team to implement UI/UX improvements and optimize performance.',
      skills: ['React', 'Vue.js', 'JavaScript', 'CSS'],
      color: 'from-neon-blue to-neon-pink',
    },
    {
      id: 3,
      title: 'Junior Web Developer',
      company: 'Creative Agency',
      duration: 'Mar 2021 - May 2021',
      description:
        'Developed website features using HTML, CSS, and JavaScript. Maintained and updated multiple client websites, ensuring cross-browser compatibility.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      color: 'from-neon-purple to-neon-blue',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey in web development and technology
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-pink via-neon-purple to-neon-blue opacity-30" />

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`mb-8 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Left/Right Content */}
              <div className="w-1/2 px-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-effect p-6 rounded-2xl hover:shadow-2xl transition-all"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br ${exp.color} border-4 border-dark-bg`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />

                  {/* Title and Company */}
                  <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className={`text-sm bg-gradient-to-r ${exp.color} bg-clip-text text-transparent font-semibold mb-2`}>
                    {exp.company}
                  </p>
                  <p className="text-xs text-gray-400 mb-4">{exp.duration}</p>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-dark-secondary rounded-full text-neon-pink border border-neon-pink border-opacity-30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-neon-purple opacity-5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-blue opacity-5 rounded-full blur-3xl" />
    </section>
  )
}

export default Experience
