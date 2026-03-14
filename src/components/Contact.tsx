import { useState } from "react";
import { Mail, Send, MapPin, Copy, Check } from "lucide-react";
import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const EMAIL = "vorugantilokesh4@gmail.com";

const Contact = () => {
  const { ref, isVisible } = useScrollReveal();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    toast({ title: "Email copied! 📋", description: EMAIL });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({ title: "Message Sent! 🎉", description: "Thank you for reaching out. I'll get back to you soon!" });
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">Let's Connect</h3>

            {/* Email with Copy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex items-center gap-4 p-4 glass-card hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                <Mail size={20} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="text-foreground text-sm font-medium truncate">{EMAIL}</div>
              </div>
              <motion.button
                onClick={copyEmail}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                aria-label="Copy email"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </motion.button>
            </motion.div>

            {/* GitHub */}
            <motion.a
              href="https://github.com/Lokesh-up"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.4 }}
              whileHover={{ x: 4 }}
              className="flex items-center gap-4 p-4 glass-card hover:border-primary/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                <GitHubIcon size={20} className="text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">GitHub</div>
                <div className="text-foreground text-sm font-medium">github.com/Lokesh-up</div>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/voruganti-lokesh-330209304"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.4 }}
              whileHover={{ x: 4 }}
              className="flex items-center gap-4 p-4 glass-card hover:border-primary/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                <LinkedInIcon size={20} className="text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">LinkedIn</div>
                <div className="text-foreground text-sm font-medium">voruganti-lokesh</div>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="flex items-center gap-4 p-4 glass-card group"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Location</div>
                <div className="text-foreground text-sm font-medium">Hyderabad, India</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 text-foreground">Send a Message</h3>
              <div className="space-y-4">
                {[
                  { id: "name", type: "text", label: "Name", placeholder: "Your full name" },
                  { id: "email", type: "email", label: "Email", placeholder: "your.email@example.com" },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-foreground mb-2">{field.label}</label>
                    <input
                      type={field.type} id={field.id} name={field.id}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none text-sm"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleChange} required rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none resize-none text-sm"
                    placeholder="Tell me about your project or say hello..."
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full hero-button disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <><div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />Sending...</>
                    ) : (
                      <><Send size={18} />Send Message</>
                    )}
                  </span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
