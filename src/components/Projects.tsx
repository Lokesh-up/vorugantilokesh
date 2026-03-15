import { ExternalLink } from "lucide-react";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import projectFood from "@/assets/projects/kids-eat-well.png";
import projectCrypto from "@/assets/projects/crypto-suite.png";
import projectQr from "@/assets/projects/project-qr-generator.jpg";
import projectYt from "@/assets/projects/project-yt-downloader.jpg";

const projects = [
  {
    title: "Kid Eats Well Plans",
    description:
      "A nutrition-focused web application that helps parents discover healthy meal plans and recipes for kids based on age groups and dietary needs.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://kid-eats-well-plans.vercel.app",
    githubUrl: "https://github.com/Lokesh-up/kid-eats-well-plans",
    image: projectFood,
    accent: "from-primary to-secondary",
  },
  {
    title: "Crypto Suite",
    description:
      "A web-based cryptography toolkit that demonstrates multiple encryption and hashing algorithms with an interactive interface for secure text encoding and decoding.",
    technologies: ["JavaScript", "HTML", "CSS"],
    demoUrl: "https://crypto-suite-sigma.vercel.app",
    githubUrl: "https://github.com/Lokesh-up/crypto-suite",
    image: projectCrypto,
    accent: "from-secondary to-accent",
  },
  {
    title: "YouTube Audio Downloader",
    description:
      "A web application that allows users to paste a YouTube video link and download the audio track with progress tracking and format selection.",
    technologies: ["React", "Node.js", "Express"],
    demoUrl: "#",
    githubUrl: "https://github.com/Lokesh-up/youtube-audio-downloader",
    image: projectYt,
    accent: "from-accent to-primary",
  },
  {
    title: "QR Code Generator",
    description:
      "A React-based tool that generates QR codes instantly for any text or URL and allows users to download the generated QR code image.",
    technologies: ["React", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Lokesh-up/qrcode-generator",
    image: projectQr,
    accent: "from-primary to-accent",
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills in full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
              className="glass-card group overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-[0_12px_40px_hsl(var(--primary)/0.12)] transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-20 z-10`} />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent z-10" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-lg border border-primary/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300"
                  >
                    <GitHubIcon size={14} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
