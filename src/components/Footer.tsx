import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { title: 'Home', href: '#' },
    { title: 'About', href: '#home' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: FaGithub, href: ' https://github.com/codecraft905-ui', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ali-ahmed-b71778334/', label: 'LinkedIn' },
    { icon: IoLogoWhatsapp, href: 'https://wa.me/923302824498', label: 'WhatsApp' },
  ]

  return (
    <footer className="relative mt-20 bg-dark-secondary bg-opacity-50 backdrop-blur-md border-t border-gray-700 border-opacity-20">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8"
        >
          {/* Brand */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gradient mb-2">Ali Ahmed</h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              Web Developer & Creative Thinker | Building amazing digital experiences
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-pink transition-colors text-xs sm:text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Connect</h4>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, idx) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 glass-effect rounded-full text-gray-300 hover:text-neon-pink transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 sm:w-5 h-4 sm:h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent opacity-30 mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-400 gap-4"
        >
          <p>
            &copy; {currentYear} Ali Ahmed. All rights reserved.
          </p>
          <p>
            Designed & Developed with <span className="text-neon-pink">❤</span> by Ali Ahmed
          </p>
        </motion.div>
      </div>

      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-dark-bg opacity-30 pointer-events-none" />
    </footer>
  )
}

export default Footer
