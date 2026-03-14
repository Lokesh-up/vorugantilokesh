import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Skills", href: "skills" },
  { name: "Contact", href: "contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    window.addEventListener("scroll", handleScroll);
    navLinks.forEach((link) => {
      const el = document.getElementById(link.href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-bold gradient-text hover:scale-105 transition-transform"
          >
            VL
          </button>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1 bg-muted/50 rounded-xl p-1 border border-border/50 relative">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={`relative px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-card"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-lg bg-primary/10 border border-primary/20 shadow-[0_0_12px_hsl(var(--primary)/0.15)]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </button>
                );
              })}
            </div>
            <ThemeToggle />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-card/50 border border-border/50 flex items-center justify-center text-foreground"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-1 pb-4">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className={`text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "text-primary bg-primary/10 border-l-2 border-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.name}
                    </button>
                  );
                })}
                <div className="flex items-center justify-center mt-2">
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
