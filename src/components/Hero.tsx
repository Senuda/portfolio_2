import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Mouse } from "lucide-react";
import { personalInfo } from "../data";
import BackgroundAnimation from "./BackgroundAnimation";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-24"
    >
      <BackgroundAnimation />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-xl mb-4"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-[hsl(var(--hero-gradient-to))] bg-clip-text text-transparent"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl text-muted-foreground mb-8"
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            {personalInfo.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href={personalInfo.social.email}
              className="p-3 border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-gradient-to-r from-[#4B9EFF] to-[#00E5FF] text-background rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-[0_0_30px_rgba(75,158,255,0.5)]"
            >
              Hire Me
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"
            >
              View My Work
            </button>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            onClick={() => scrollToSection("about")}
            className="mt-12 flex items-center justify-center mx-auto animate-scroll-down cursor-pointer"
          >
            <Mouse className="w-8 h-8 text-primary" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
