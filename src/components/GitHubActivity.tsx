import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Github, GitBranch, Star, BookOpen } from "lucide-react";

const GitHubActivity = () => {
  const { ref, isVisible } = useScrollReveal();

  const stats = [
    { icon: BookOpen, label: "Repositories", value: "15+" },
    { icon: Star, label: "Stars Earned", value: "10+" },
    { icon: GitBranch, label: "Contributions", value: "200+" },
  ];

  return (
    <section id="github" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A snapshot of my open-source contributions and coding activity.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="glass-card p-6 text-center hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon size={22} className="text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Contribution Graph Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glass-card p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Github size={24} className="text-foreground" />
              <h3 className="text-lg font-bold text-foreground">Contribution Graph</h3>
            </div>
            
            {/* Simulated contribution grid */}
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-1 min-w-[600px]">
                {Array.from({ length: 52 }).map((_, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1">
                    {Array.from({ length: 7 }).map((_, dayIndex) => {
                      const intensity = Math.random();
                      let bgClass = "bg-muted";
                      if (intensity > 0.8) bgClass = "bg-primary";
                      else if (intensity > 0.6) bgClass = "bg-primary/60";
                      else if (intensity > 0.4) bgClass = "bg-primary/30";
                      else if (intensity > 0.25) bgClass = "bg-primary/15";
                      return (
                        <div
                          key={dayIndex}
                          className={`w-3 h-3 rounded-sm ${bgClass} transition-colors`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="text-xs text-muted-foreground">Less</span>
              <div className="flex gap-1">
                {["bg-muted", "bg-primary/15", "bg-primary/30", "bg-primary/60", "bg-primary"].map((c) => (
                  <div key={c} className={`w-3 h-3 rounded-sm ${c}`} />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">More</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center mt-8"
          >
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-semibold hover:opacity-90 transition-all duration-300"
            >
              <Github size={18} /> View GitHub Profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
