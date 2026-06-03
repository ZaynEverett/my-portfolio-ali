import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { MdVolumeUp, MdVolumeOff } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMuted, setIsMuted] = useState(true);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Services", id: "services" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  // 🔥 scroll glass effect + active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navItems.map((item) =>
        document.getElementById(item.id)
      );

      const scrollPos = window.scrollY + 120;

      sections.forEach((section, i) => {
        if (!section) return;

        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(navItems[i].id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold cursor-pointer relative"
          >
            <span className="text-gradient">Ali Ahmed</span>

            {/* glow dot */}
            <motion.div
              className="absolute -bottom-1 left-0 w-2 h-2 bg-neon-pink rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8 relative">

            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.1 }}
                className={`relative text-sm font-medium transition ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.name}

                {/* ACTIVE INDICATOR (pill glow) */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-pink to-neon-purple rounded-full"
                  />
                )}
              </motion.button>
            ))}

            {/* AUDIO TOGGLE */}
            <motion.button
              onClick={() => setIsMuted(!isMuted)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="ml-4 text-gray-300 hover:text-neon-blue"
            >
              {isMuted ? <MdVolumeOff size={20} /> : <MdVolumeUp size={20} />}
            </motion.button>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="text-white"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (CINEMATIC) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-black/70 backdrop-blur-xl border-t border-white/10"
        >
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileTap={{ scale: 0.95 }}
                className={`block w-full text-left py-2 ${
                  activeSection === item.id
                    ? "text-neon-pink"
                    : "text-gray-300"
                }`}
              >
                {item.name}
              </motion.button>
            ))}

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="flex items-center gap-2 text-gray-300 mt-4"
            >
              {isMuted ? <MdVolumeOff /> : <MdVolumeUp />}
              {isMuted ? "Unmute" : "Mute"}
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;