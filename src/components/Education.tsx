import { motion } from 'framer-motion'
import { FiAward, FiBook } from 'react-icons/fi'

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      institution: 'University Name',
      year: '2020 - Present',
      description: 'Pursuing a degree in Computer Science with focus on web development and software engineering',
      color: 'from-neon-pink to-neon-purple',
      icon: FiBook,
    },
    {
      id: 2,
      degree: 'Advanced Certificate',
      field: 'Web Development',
      institution: 'Online Learning Platform',
      year: '2021',
      description: 'Completed comprehensive web development course covering HTML, CSS, JavaScript, React, and backend technologies',
      color: 'from-neon-blue to-neon-pink',
      icon: FiAward,
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="education" className="py-20 px-4 relative">
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
            Education
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic background and certifications
          </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu) => {
            const IconComponent = edu.icon
            return (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group glass-effect p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-opacity-20"
              >
                {/* Icon and Color Accent */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.color} p-3 flex items-center justify-center group-hover:shadow-lg transition-all`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </motion.div>
                  <span className={`text-sm font-bold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                    {edu.year}
                  </span>
                </div>

                {/* Degree and Field */}
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-neon-pink transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-lg text-neon-pink font-semibold mb-2">
                  {edu.field}
                </p>

                {/* Institution */}
                <p className="text-sm text-gray-400 mb-4 font-medium">
                  {edu.institution}
                </p>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {edu.description}
                </p>

                {/* Accent Line */}
                <motion.div
                  className={`mt-6 h-1 bg-gradient-to-r ${edu.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Skills Development Section */}
        <motion.div
          className="mt-16 glass-effect p-8 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Continuous Learning</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Online Courses',
                count: '15+',
                description: 'Completed courses on web development, design, and modern frameworks',
              },
              {
                title: 'Certifications',
                count: '8',
                description: 'Professional certifications in various web technologies and tools',
              },
              {
                title: 'Projects',
                count: '50+',
                description: 'Practical projects building real-world applications',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-xl bg-dark-secondary hover:bg-dark-tertiary transition-colors"
              >
                <motion.p
                  className="text-3xl font-bold text-neon-pink mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 100, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item.count}
                </motion.p>
                <p className="font-semibold text-white mb-2">{item.title}</p>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute top-1/2 -right-40 w-80 h-80 bg-neon-pink opacity-5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-blue opacity-5 rounded-full blur-3xl" />
    </section>
  )
}

export default Education
