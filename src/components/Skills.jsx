import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNode, FaPython, FaGitAlt, FaDocker, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiTailwindcss, SiJavascript } from 'react-icons/si';

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true, rootMargin: '0px 0px -120px 0px' });

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', icon: '⚛️', level: 95 },
        { name: 'JavaScript', icon: '✨', level: 90 },
        { name: 'Tailwind CSS', icon: '🎨', level: 92 },
        { name: 'HTML/CSS', icon: '🏗️', level: 95 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: '🚀', level: 90 },
        { name: 'Express.js', icon: '⚙️', level: 88 },
        { name: 'Python', icon: '🐍', level: 80 },
        { name: 'REST APIs', icon: '🔌', level: 92 },
      ],
    },
    {
      category: 'Database',
      skills: [
        { name: 'MongoDB', icon: '🍃', level: 88 },
        { name: 'PostgreSQL', icon: '🗄️', level: 85 },
        { name: 'Firebase', icon: '🔥', level: 82 },
        { name: 'SQL', icon: '📊', level: 87 },
      ],
    },
    {
      category: 'Tools & DevOps',
      skills: [
        { name: 'Git/GitHub', icon: '🌐', level: 90 },
        { name: 'Docker', icon: '🐳', level: 80 },
        { name: 'Linux', icon: '🐧', level: 85 },
        { name: 'AWS', icon: '☁️', level: 78 },
      ],
    },
  ];

  return (
    <section
      id="skills"
        ref={ref}
        className="min-h-[60vh] md:min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-accent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-purple rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-lg p-8 hover:border-accent/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-accent mb-8">{category.category}</h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ x: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-semibold text-white">{skill.name}</span>
                      </div>
                      <span className="text-accent text-sm font-bold">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: skillIndex * 0.1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-accent to-accent-purple rounded-full shadow-lg shadow-accent/50"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-accent/10 to-accent-purple/10 border border-accent/30 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Also Proficient With:</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Framer Motion',
              'Redux',
              'GraphQL',
              'Testing (Jest, React Testing Library)',
              'Webpack',
              'Vite',
              'NGINX',
              'WebSockets',
              'Microservices',
              'CI/CD Pipelines',
            ].map((skill, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-secondary border border-accent/30 rounded-full text-sm text-gray-300 hover:text-accent hover:border-accent transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
