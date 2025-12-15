import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const stats = [
    { label: 'Projects Completed', value: '25+' },
    { label: 'Years Experience', value: 'beginner' },
    { label: 'Happy Clients', value: '2+' },
    { label: 'Technologies', value: '20+' },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-purple rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with a strong foundation in modern web technologies. I've worked on diverse projects ranging from startups to established companies, delivering high-quality, scalable solutions.
            </p>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              My journey in tech began with a curiosity about how things work, which evolved into a professional expertise in building end-to-end applications. I specialize in the MERN stack (MongoDB, Express, React, Node.js) and have a deep understanding of both frontend and backend development.
            </p>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Beyond coding, I'm committed to continuous learning, staying updated with industry trends, and creating user-centric solutions that make a real impact. I believe in writing clean, maintainable code and collaborating effectively with teams.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {['Problem Solver', 'Team Player', 'Quick Learner', 'Detail-Oriented'].map((trait, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-secondary border border-accent/30 text-accent rounded-full text-sm font-semibold hover:border-accent transition-all cursor-default"
                >
                  {trait}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-all duration-300"
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-4xl font-bold bg-gradient-to-r from-accent to-accent-purple bg-clip-text text-transparent mb-2"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
