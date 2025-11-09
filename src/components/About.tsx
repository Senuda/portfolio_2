import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { aboutMe } from "../data";
import { Code2, Rocket, TrendingUp, Target } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const icons = [Code2, Rocket, TrendingUp, Target];

  return (
    <section id="about" className="py-10 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {aboutMe.intro}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-20"
        >
          {aboutMe.sections.map((section, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="flex items-center gap-3 sm:flex-col sm:gap-0 w-full sm:w-auto">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground sm:hidden">
                      {section.title}
                    </h3>
                  </div>
                  <div className="flex-1 w-full">
                    <h3 className="hidden sm:block text-xl font-bold text-foreground mb-3">
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
