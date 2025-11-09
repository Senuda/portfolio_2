import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { personalInfo } from "../data";
import { useForm } from "@formspree/react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAlert, setShowAlert] = useState(false);
  const [state, handleSubmit] = useForm("xkgpdobl");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
    if (state.succeeded) {
      console.log(state.result);

      setShowAlert(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
      setTimeout(() => setShowAlert(false), 3000);
    } else {
      console.log(state.errors);
    }
  };
  return (
    <section id="contact" className="relative py-20 px-6" ref={ref}>
      {showAlert && (
        <div className="fixed  bottom-6 left-6 px-4 py-2 bg-gray-800 text-primary rounded-md shadow-lg flex items-center gap-2 animate-fade-in z-50 border-[1px] border-primary">
          <span className="font-medium">Message sent successfully</span>
        </div>
      )}

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's work together on your next project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-foreground font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-input border border-primary/20 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-foreground font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-input border border-primary/20 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-foreground font-medium mb-2"
                >
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 bg-input border border-primary/20 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-foreground font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-primary/20 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>

              <div className="bg-card border border-primary/20 rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-lg font-semibold text-foreground">
                      {personalInfo.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                Follow Me
              </h3>
              <div className="flex gap-4">
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>

                <a
                  href={personalInfo.social.email}
                  className="p-4 border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
