import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Code2, Monitor, Server, Database, Wrench, Rocket, Shield, Globe } from "lucide-react";
import GitHubIcon from "@/components/icons/GitHubIcon";
import VercelIcon from "@/components/icons/VercelIcon";

const devicon = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;

type Skill = { name: string; icon: string };

const categories: {
  title: string;
  icon: typeof Code2;
  color: string;
  skills: Skill[];
}[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "from-primary to-primary-glow",
    skills: [
      { name: "Python", icon: devicon("python") },
      { name: "Java", icon: devicon("java") },
      { name: "C", icon: devicon("c") },
      { name: "JavaScript", icon: devicon("javascript") },
      { name: "SQL", icon: devicon("mysql", "original-wordmark") },
    ],
  },
  {
    title: "Frontend Development",
    icon: Monitor,
    color: "from-secondary to-secondary-glow",
    skills: [
      { name: "React", icon: devicon("react") },
      { name: "HTML5", icon: devicon("html5") },
      { name: "CSS3", icon: devicon("css3") },
      { name: "Tailwind CSS", icon: devicon("tailwindcss") },
      { name: "Vite", icon: devicon("vitejs") },
      { name: "Responsive Design", icon: "" },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "from-accent to-accent-glow",
    skills: [
      { name: "Node.js", icon: devicon("nodejs") },
      { name: "Express.js", icon: devicon("express", "original") },
      { name: "REST APIs", icon: "" },
      { name: "API Integration", icon: "" },
      { name: "JWT Authentication", icon: "" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-success to-success",
    skills: [
      { name: "MongoDB", icon: devicon("mongodb") },
      { name: "Mongoose", icon: devicon("mongoose", "original") },
      { name: "MySQL", icon: devicon("mysql") },
    ],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    color: "from-primary to-secondary",
    skills: [
      { name: "Git", icon: devicon("git") },
      { name: "GitHub", icon: "" },
      { name: "VS Code", icon: devicon("vscode") },
      { name: "Postman", icon: devicon("postman") },
      { name: "npm", icon: devicon("npm", "original-wordmark") },
    ],
  },
  {
    title: "Deployment",
    icon: Rocket,
    color: "from-secondary to-accent",
    skills: [
      { name: "Vercel", icon: "" },
      { name: "Netlify", icon: devicon("netlify", "original") },
    ],
  },
];

// Fallback icons for skills without devicon logos
const fallbackIcons: Record<string, typeof Globe> = {
  "Responsive Design": Monitor,
  "REST APIs": Globe,
  "API Integration": Globe,
  "JWT Authentication": Shield,
};

const Skills = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to bring ideas to life — from frontend interfaces to backend systems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + ci * 0.1, duration: 0.5 }}
              className="glass-card p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shrink-0`}
                >
                  <category.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, si) => {
                  const FallbackIcon = fallbackIcons[skill.name];
                  return (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + ci * 0.1 + si * 0.04, duration: 0.3 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="skill-badge inline-flex items-center gap-2 cursor-default hover:shadow-[0_0_14px_hsl(var(--primary)/0.2)] hover:border-primary/30 transition-shadow duration-300"
                    >
                      {skill.icon ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-5 h-5 object-contain"
                          loading="lazy"
                        />
                      ) : skill.name === "GitHub" ? (
                        <GitHubIcon size={16} className="text-primary" />
                      ) : skill.name === "Vercel" ? (
                        <VercelIcon size={16} className="text-primary" />
                      ) : FallbackIcon ? (
                        <FallbackIcon size={16} className="text-primary" />
                      ) : null}
                      {skill.name}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
