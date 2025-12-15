import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-accent/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div>
            <p className="text-gray-400 text-sm">
              © 2025 Alex Portfolio. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Sitemap'].map((item, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ color: '#06b6d4' }}
                className="text-gray-400 text-sm hover:text-accent transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.div
            whileHover={{ y: -5 }}
            className="flex items-center gap-2"
          >
            <span className="text-accent">↑</span>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#hero').scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-400 text-sm hover:text-accent transition-colors cursor-pointer"
            >
              Back to Top
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
