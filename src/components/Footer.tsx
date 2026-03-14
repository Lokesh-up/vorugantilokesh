import { ChevronUp, Heart, Mail } from "lucide-react";
import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: GitHubIcon, href: "https://github.com/Lokesh-up", label: "GitHub" },
    { icon: LinkedInIcon, href: "https://www.linkedin.com/in/voruganti-lokesh-330209304", label: "LinkedIn" },
    { icon: Mail, href: "mailto:vorugantilokesh4@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-card/50 border-t border-border/50">
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground hover:scale-110 transition-all duration-300 shadow-lg"
        aria-label="Back to top"
      >
        <ChevronUp size={24} />
      </button>

      <div className="container-custom py-12 px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold gradient-text mb-3">Voruganti Lokesh</h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Full Stack Developer building web applications with React, Node.js & MongoDB.
        </p>

        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:scale-110 transition-all duration-300"
              aria-label={s.label}
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          {["About", "Projects", "Skills", "Contact"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
              {link}
            </a>
          ))}
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 mb-2">
          © {currentYear} Voruganti Lokesh. Built with <Heart size={14} className="text-destructive" /> using React & Tailwind CSS
        </p>
        <p className="text-xs text-muted-foreground/60">
          Built with React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
