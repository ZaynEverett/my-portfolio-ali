import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
    id: 1,
    title: 'Web Development Student',
    company: 'Aptech Learning Pakistan',
    duration: '2025 - Present',
    description:
      'Currently studying Software Engineering and building responsive websites and web applications using modern web technologies. Working on personal and academic projects to strengthen frontend and backend development skills.',
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    color: 'from-neon-pink to-neon-purple',
  },
  {
    id: 2,
    title: 'Personal Projects Developer',
    company: 'Self-Learning & Freelance Practice',
    duration: '2025 - Present',
    description:
      'Developed multiple personal projects including portfolio websites, CRUD applications, and responsive business websites. Experienced with Git/GitHub version control and deployment platforms.',
    skills: ['Laravel', 'Git', 'GitHub', 'SQL Server', 'Responsive Design'],
    color: 'from-neon-blue to-neon-pink',
  },
  {
    id: 3,
    title: 'WordPress & SEO Enthusiast',
    company: 'Independent Learning',
    duration: '2024 - Present',
    description:
      'Working with WordPress themes, Elementor, plugins, website customization, and SEO optimization. Managing website content and improving website performance and user experience.',
    skills: ['WordPress', 'Elementor', 'SEO', 'Theme Customization'],
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
          {/* Central Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-pink via-neon-purple to-neon-blue opacity-30" />

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`mb-8 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} md:${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Left/Right Content */}
              <div className="w-full md:w-1/2 px-4 md:px-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-effect p-4 md:p-6 rounded-2xl hover:shadow-2xl transition-all"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br ${exp.color} border-4 border-dark-bg`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />

                  {/* Title and Company */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className={`text-xs md:text-sm bg-gradient-to-r ${exp.color} bg-clip-text text-transparent font-semibold mb-2`}>
                    {exp.company}
                  </p>
                  <p className="text-xs text-gray-400 mb-4">{exp.duration}</p>

                  {/* Description */}
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 md:px-3 md:py-1 bg-dark-secondary rounded-full text-neon-pink border border-neon-pink border-opacity-30"
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
