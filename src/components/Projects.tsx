import { ExternalLink } from "lucide-react";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import projectQr from "@/assets/project-qr-generator.jpg";
import projectYt from "@/assets/project-yt-downloader.jpg";
import projectMusic from "@/assets/project-music-app.jpg";
import projectCf from "@/assets/project-cf-tracker.jpg";

const projects = [
  {
    title: "QR Code Generator",
    description:
      "A React application that generates QR codes instantly for any text or URL with download and share options.",
    technologies: ["React"],
    demoUrl: "#",
    githubUrl: "#",
    image: projectQr,
    accent: "from-primary to-secondary",
  },
  {
    title: "YouTube Audio Downloader",
    description:
      "A web application that allows users to paste a YouTube link and download the audio in high quality.",
    technologies: ["React"],
    demoUrl: "#",
    githubUrl: "#",
    image: projectYt,
    accent: "from-secondary to-accent",
  },
  {
    title: "Music Streaming App",
    description:
      "A full-stack music streaming platform where users can browse, search, and listen to songs stored in a database.",
    technologies: ["React", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
    image: projectMusic,
    accent: "from-accent to-primary",
  },
  {
    title: "Codeforces Student Tracker",
    description:
      "A dashboard that tracks student progress on Codeforces including ratings, contests, and problem-solving statistics.",
    technologies: ["React", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
    image: projectCf,
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
