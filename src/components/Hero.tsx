import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import bgImage from "../../Image/BGImage.png";

const roles = [
  "Creative Developer",
  "UI Experience Designer",
  "Frontend Engineer",
  "Digital Creator",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // 🔥 Smooth rotating text
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // 🔥 Mouse reactive glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: any) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* 🔥 Mouse Glow */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-96 h-96 bg-purple-500 opacity-20 blur-[120px] rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* 🌌 Background Overlay */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/55" />

      {/* ✨ Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center"
      >
        {/* LEFT SIDE */}
        <div>
          <p className="text-xs sm:text-sm md:text-base text-neon-blue mb-4 font-semibold">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Ali Ahmed
          </h1>

          {/* 🔥 Morphing Role */}
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl text-neon-pink font-bold mb-6"
          >
            {roles[index]}
          </motion.div>

          <p className="text-sm sm:text-base text-gray-400 max-w-lg mb-10 leading-relaxed">
            I build immersive, high-performance web experiences that blend
            design, motion, and interaction into something unforgettable.
          </p>

          {/* 🔥 Buttons */}
          <div className="flex gap-3 sm:gap-4 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl font-bold text-white shadow-lg"
            >
              Explore Work
            </motion.button>

            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=aliahmedhome09876@gmail.com"
              target="_blank"
              className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base border border-white/20 rounded-xl backdrop-blur-md"
              whileHover={{ scale: 1.1 }}
            >
              Contact
            </motion.a>
          </div>
    {/* 🔥 Socials */}
<div className="flex gap-4 sm:gap-5 mt-10">
  <motion.a
    href="https://github.com/codecraft905-ui"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.3, rotate: 10 }}
  >
    <FaGithub size={20} />
  </motion.a>

  <motion.a
    href="https://www.linkedin.com/in/ali-ahmed-b71778334/"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.3, rotate: -10 }}
  >
    <FaLinkedin size={20} />
  </motion.a>
</div>
        </div>

        {/* RIGHT SIDE VISUAL */}
        <div className="relative h-[320px] md:h-[420px] flex items-center justify-center">
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-xl">
            <img
              src={bgImage}
              alt="Ali Ahmed portrait"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/10" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="hidden md:block absolute w-80 h-80 border border-purple-500/20 rounded-full"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="hidden md:block absolute w-96 h-96 border border-pink-500/10 rounded-full"
          />
        </div>
      </motion.div>

      {/* 🔻 Scroll Indicator */}
      <motion.div
        className="absolute bottom-10"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FiArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;