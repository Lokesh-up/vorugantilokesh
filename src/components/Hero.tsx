import { useState, useEffect } from "react";
import { ArrowDown, Download, ArrowRight } from "lucide-react";
import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import { motion, AnimatePresence } from "framer-motion";
import profileAvatar from "@/assets/profile-avatar.jpg";

const titles = ["Full Stack Developer", "Python Programmer", "AI Agent Developer"];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const buttonBase =
    "flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto";

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-20 -right-40 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-blob-delay" />
        <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-blob-delay-2" />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile with floating animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative inline-block"
            >
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-primary via-secondary to-accent blur-2xl opacity-35 animate-pulse" />
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-50" />
              <img
                src={profileAvatar}
                alt="Voruganti Lokesh — Full Stack Developer"
                className="relative w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-card"
              />
            </motion.div>
          </motion.div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-success/10 text-success border border-success/20">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-7xl font-bold mb-4 text-foreground"
          >
            Hi, I'm Lokesh 👋
          </motion.h1>

          {/* Typing animation title */}
          <div className="h-10 md:h-12 mb-6 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={titleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-xl md:text-3xl font-semibold gradient-text"
              >
                {titles[titleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed"
          >
            I build scalable full-stack applications and developer tools using React, Node.js, and modern web technologies.
          </motion.p>

          {/* Tech badges with staggered entrance */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 15, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.75 + i * 0.12, duration: 0.4, type: "spring", stiffness: 120 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Buttons with staggered entrance */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16">
            {[
              {
                el: "button" as const,
                props: { onClick: () => scrollToSection('projects') },
                className: `${buttonBase} hero-button`,
                children: <>View Projects <ArrowRight size={18} /></>,
                delay: 0.95,
              },
              {
                el: "a" as const,
                props: { href: "/resume.pdf", download: true },
                className: `${buttonBase} border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)]`,
                children: <><Download size={18} /> Download Resume</>,
                delay: 1.05,
              },
              {
                el: "a" as const,
                props: { href: "https://github.com/Lokesh-up", target: "_blank", rel: "noopener noreferrer" },
                className: `${buttonBase} border border-border text-foreground hover:border-primary/30 hover:bg-primary/5 hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)]`,
                children: <><GitHubIcon size={18} /> GitHub</>,
                delay: 1.15,
              },
              {
                el: "a" as const,
                props: { href: "https://www.linkedin.com/in/voruganti-lokesh-330209304", target: "_blank", rel: "noopener noreferrer" },
                className: `${buttonBase} border border-border text-foreground hover:border-secondary/30 hover:bg-secondary/5 hover:shadow-[0_0_20px_hsl(var(--secondary)/0.1)]`,
                children: <><LinkedInIcon size={18} /> LinkedIn</>,
                delay: 1.25,
              },
            ].map((btn, i) => {
              const Tag = motion[btn.el];
              return (
                <Tag
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: btn.delay, duration: 0.4 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={btn.className}
                  {...btn.props}
                >
                  {btn.children}
                </Tag>
              );
            })}
          </div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.15 }}
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Scroll down"
            >
              <ArrowDown size={24} className="animate-bounce" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
