import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-10 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of my recent work and side projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group flex flex-col h-fit relative"
            >
              <div className="relative h-56 overflow-hidden bg-muted flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              <div className="p-6 flex flex-col flex-1 transition-all duration-500 group-hover:pb-8">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <div className="relative mb-4 overflow-hidden">
                  <p className="text-muted-foreground text-sm leading-relaxed transition-all duration-500 line-clamp-3 group-hover:line-clamp-none">
                    {project.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-card to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="inline-flex items-center px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Project</span>
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
