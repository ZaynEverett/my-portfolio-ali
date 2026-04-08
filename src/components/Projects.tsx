import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { useState } from 'react'
import primeHourImage from '../assets/prime-hour.png'

const Projects = () => {
  const [filter, setFilter] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'Hotel Landing Page',
      description: 'A modern and responsive landing page for a luxury hotel, showcasing rooms and amenities.',
      image: '/Agency/royalpark.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      type: 'Web',
      liveLink: 'https://hotel-landing-page-project.vercel.app/',
      githubLink: 'https://github.com/codecraft905-ui/Hotel-Landing-Page-project.git',
    },
    {
      id: 2,
      title: 'Moments Fotolab',
      description: 'A photo lab project for capturing and editing memorable moments.',
      image: '/Agency/fotolab.png',
      tech: ['React', 'Node.js', 'Express'],
      type: 'Web',
      liveLink: 'https://moments-project-fotolab.vercel.app/',
      githubLink: 'https://github.com/codecraft905-ui/Moments-project-fotolab.git',
    },
    {
      id: 3,
      title: 'SummitX Mountaineering',
      description: 'An adventure website for mountaineering expeditions and gear.',
      image: '/Agency/mountaineering.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      type: 'Web',
      liveLink: 'https://summit-x-mountaineering.vercel.app/',
      githubLink: 'https://github.com/codecraft905-ui/SummitX-Mountaineering.git',
    },
    {
      id: 4,
      title: 'Shoe Website',
      description: 'An e-commerce website for shoes with modern design and features.',
      image: '/Agency/shoe website.PNG',
      tech: ['React', 'Tailwind CSS', 'Vite'],
      type: 'Web',
      liveLink: 'https://shoe-website-two.vercel.app/',
      githubLink: '#',
    },
    {
      id: 5,
      title: 'MUSIC WORLD',
      description: 'A music streaming platform with playlists and user interactions.',
      image: '/Agency/musicworld.png',
      tech: ['React', 'Express.js', 'MongoDB'],
      type: 'Web',
      liveLink: 'https://music-world-pi.vercel.app/',
      githubLink: 'https://github.com/codecraft905-ui/MUSIC-WORLD.git',
    },
    {
      id: 6,
      title: 'Tile Shop',
      description: 'An online shop for tiles and home decor materials.',
      image: '/Agency/mytiles.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      type: 'Web',
      liveLink: 'https://tile-shop.vercel.app/',
      githubLink: 'https://github.com/codecraft905-ui/Tile-Shop.git',
    },
    {
      id: 7,
      title: 'Cryptix Landing Page',
      description: 'A landing page for Cryptix, a cryptocurrency platform.',
      image: '/Agency/cryptix.png',
      tech: ['React', 'Tailwind CSS'],
      type: 'Web',
      liveLink: 'https://cryptix-landingpage.vercel.app/',
      githubLink: '#',
    },
    {
      id: 8,
      title: 'Prime-Hour',
      description: 'A premium landing page for Prime-Hour with sleek design and interactive UI.',
      image: primeHourImage,
      tech: ['HTML', 'CSS', 'JavaScript'],
      type: 'Web',
      liveLink: 'https://prime-hour.vercel.app/',
      githubLink: 'https://github.com/aliahmedhome09876-creator/Prime-Hour.git',
    },
  ]

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.type === filter)

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
    <section id="projects" className="py-20 px-4 relative">
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
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my best work and innovative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {['All', 'Web', 'Database', 'Video Editing'].map((type) => (
            <motion.button
              key={type}
              onClick={() => setFilter(type)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === type
                  ? 'bg-neon-blue text-dark-bg'
                  : 'border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-bg'
              }`}
            >
              {type}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group glass-effect rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-dark-secondary">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-pink transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-dark-secondary rounded-full text-neon-blue border border-neon-blue border-opacity-30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-neon-pink text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 border-2 border-neon-blue text-neon-blue rounded-lg font-semibold text-sm hover:bg-neon-blue hover:text-dark-bg transition-all"
                  >
                    <FiGithub className="w-4 h-4" />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-neon-blue text-neon-blue font-bold rounded-lg hover:bg-neon-blue hover:text-dark-bg transition-all"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-neon-pink opacity-5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-neon-purple opacity-5 rounded-full blur-3xl" />
    </section>
  )
}

export default Projects
