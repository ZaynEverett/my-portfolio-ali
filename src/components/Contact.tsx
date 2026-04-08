import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Validate form
    if (formData.name && formData.email && formData.subject && formData.message) {
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'aliahmedhome09876@gmail.com',
      link: 'mailto:aliahmedhome09876@gmail.com',
      color: 'neon-glow-pink',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '03302824498',
      link: 'tel:03302824498',
      color: 'neon-glow-blue',
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Pakistan',
      link: '#',
      color: 'neon-glow-purple',
    },
  ]

  const socialLinks = [
    {
      icon: FaGithub,
      link: 'https://github.com',
      label: 'GitHub',
      color: 'text-neon-blue',
    },
    {
      icon: FaLinkedin,
      link: 'https://linkedin.com',
      label: 'LinkedIn',
      color: 'text-neon-pink',
    },
    {
      icon: FaTwitter,
      link: 'https://twitter.com',
      label: 'Twitter',
      color: 'text-neon-purple',
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
    <section id="contact" className="py-20 px-4 relative">
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
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate and create something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, idx) => {
              const IconComponent = info.icon
              return (
                <motion.a
                  key={idx}
                  variants={itemVariants}
                  href={info.link}
                  whileHover={{ x: 10 }}
                  className={`glass-effect p-6 rounded-2xl flex gap-4 hover:shadow-2xl transition-all cursor-pointer group ${info.color}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-dark-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-neon-pink" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 font-medium">{info.title}</p>
                    <p className="text-lg font-semibold text-white group-hover:text-neon-pink transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              )
            })}

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="mt-8"
            >
              <p className="text-sm text-gray-400 font-medium mb-4">Connect With Me</p>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 glass-effect rounded-full ${social.color} hover:shadow-lg transition-all neon-glow-blue`}
                      aria-label={social.label}
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl space-y-6"
          >
            {/* Success Message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 bg-neon-pink bg-opacity-10 border border-neon-pink rounded-lg text-neon-pink font-semibold text-center"
              >
                Thank you! I'll get back to you soon.
              </motion.div>
            )}

            {/* Name Field */}
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-dark-secondary border border-gray-600 rounded-lg focus:outline-none focus:border-neon-pink text-white placeholder-gray-500 transition-colors"
                required
              />
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-dark-secondary border border-gray-600 rounded-lg focus:outline-none focus:border-neon-pink text-white placeholder-gray-500 transition-colors"
                required
              />
            </motion.div>

            {/* Subject Field */}
            <motion.div variants={itemVariants}>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project inquiry"
                className="w-full px-4 py-3 bg-dark-secondary border border-gray-600 rounded-lg focus:outline-none focus:border-neon-pink text-white placeholder-gray-500 transition-colors"
                required
              />
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={4}
                className="w-full px-4 py-3 bg-dark-secondary border border-gray-600 rounded-lg focus:outline-none focus:border-neon-pink text-white placeholder-gray-500 transition-colors resize-none"
                required
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold rounded-lg neon-glow-pink hover-glow transition-all flex items-center justify-center gap-2"
            >
              <FiSend className="w-5 h-5" />
              Send Message
            </motion.button>

            {/* Privacy Note */}
            <p className="text-xs text-gray-400 text-center">
              I'll respond to your message as soon as possible
            </p>
          </motion.form>
        </div>
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-neon-pink opacity-5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-purple opacity-5 rounded-full blur-3xl" />
    </section>
  )
}

export default Contact
