import { motion } from 'framer-motion'
import { FiCode, FiMonitor, FiDatabase, FiFilter, FiVideo } from 'react-icons/fi'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Building responsive, scalable web applications with modern technologies and best practices',
      icon: FiCode,
      color: 'from-neon-pink to-neon-purple',
      gradient: 'neon-glow-pink',
    },
    {
      id: 2,
      title: 'Frontend Design',
      description: 'Creating beautiful user interfaces with smooth animations and exceptional user experiences',
      icon: FiMonitor,
      color: 'from-neon-blue to-neon-pink',
      gradient: 'neon-glow-blue',
    },
    {
      id: 3,
      title: 'Backend Development',
      description: 'Developing robust server-side solutions with PHP, Laravel, and modern .NET frameworks',
      icon: FiCode,
      color: 'from-neon-purple to-neon-blue',
      gradient: 'neon-glow-purple',
    },
    {
      id: 4,
      title: 'Database Design',
      description: 'Designing efficient database architectures with MySQL, SQL Server, and MongoDB',
      icon: FiDatabase,
      color: 'from-neon-green to-neon-blue',
      gradient: 'neon-glow-blue',
    },
    {
      id: 5,
      title: 'UI/UX Design',
      description: 'Crafting intuitive interfaces with glassmorphism effects and modern design principles',
      icon: FiMonitor,
      color: 'from-neon-pink to-neon-blue',
      gradient: 'neon-glow-pink',
    },
    {
      id: 6,
      title: 'Video Editing',
      description: 'Professional video editing with creative transitions, effects, and storytelling',
      icon: FiVideo,
      color: 'from-neon-purple to-neon-pink',
      gradient: 'neon-glow-purple',
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
    <section id="services" className="py-20 px-4 relative">
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
            Services I Offer
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to bring your vision to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`group glass-effect p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-opacity-20 ${service.gradient}`}
              >
                {/* Icon Container */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 flex items-center justify-center group-hover:shadow-lg transition-all`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bottom Accent */}
                <motion.div
                  className={`h-1 bg-gradient-to-r ${service.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center glass-effect p-8 rounded-2xl">
            <motion.p
              className="text-4xl font-bold text-neon-pink mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              viewport={{ once: true }}
            >
              50+
            </motion.p>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="text-center glass-effect p-8 rounded-2xl">
            <motion.p
              className="text-4xl font-bold text-neon-blue mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
              viewport={{ once: true }}
            >
              100%
            </motion.p>
            <p className="text-gray-400">Client Satisfaction</p>
          </div>
          <div className="text-center glass-effect p-8 rounded-2xl">
            <motion.p
              className="text-4xl font-bold text-neon-purple mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
              viewport={{ once: true }}
            >
              5+
            </motion.p>
            <p className="text-gray-400">Years Experience</p>
          </div>
        </motion.div>
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute -top-40 right-10 w-80 h-80 bg-neon-blue opacity-5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 left-10 w-80 h-80 bg-neon-pink opacity-5 rounded-full blur-3xl" />
    </section>
  )
}

export default Services
