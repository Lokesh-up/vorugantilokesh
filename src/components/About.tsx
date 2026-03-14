import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8" />
          </motion.div>

          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              I'm Lokesh, a Full Stack Developer passionate about building scalable and user-focused 
              web applications. I enjoy transforming ideas into real-world products using modern 
              technologies like React, Node.js, and MongoDB.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My work focuses on developing complete end-to-end solutions — from designing responsive 
              and intuitive user interfaces to building efficient backend systems and APIs. I enjoy 
              solving complex problems and turning them into simple, usable applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I've built several projects including a music streaming platform, a YouTube audio 
              downloader, and tools that help developers and students track their progress. I also 
              enjoy participating in hackathons where I rapidly prototype creative solutions to 
              real-world challenges.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently, I'm continuously improving my skills in full-stack development while exploring 
              new technologies and building impactful applications that people can actually use.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border"
          >
            {[
              { value: "2027", label: "Expected Graduation" },
              { value: "10+", label: "Projects Built" },
              { value: "Open", label: "To Opportunities" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
