import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager, TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      quote: 'Alex delivered exceptional work on our e-commerce platform. The code quality, attention to detail, and communication throughout the project were outstanding.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CEO, StartupXyz',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      quote: 'Working with Alex was a game-changer for our project. They brought innovative solutions and completed everything ahead of schedule with zero bugs.',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Design Lead, CreativeStudio',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      quote: 'Alex is a fantastic developer who understands design principles. Collaborating on the dashboard was smooth, and the final product exceeded expectations.',
    },
    {
      id: 4,
      name: 'David Kumar',
      role: 'CTO, InnovateTech',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      quote: 'Impressed by Alex\'s technical expertise and problem-solving abilities. They integra­ted complex features seamlessly while maintaining clean architecture.',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
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
            What People <span className="text-accent">Say</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-purple rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Testimonials Carousel */}
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-lg p-12 md:p-16"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Quote */}
                <div className="flex-1">
                  <Quote className="text-accent mb-6" size={40} />
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed italic">
                    "{testimonials[currentIndex].quote}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                    />
                    <div>
                      <p className="font-semibold text-white">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-accent text-sm">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-2xl"
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="p-3 bg-secondary border border-accent/30 rounded-full hover:border-accent hover:bg-secondary/80 transition-all"
            >
              <ChevronLeft className="text-accent" size={24} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  whileHover={{ scale: 1.2 }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === currentIndex
                      ? 'bg-accent w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="p-3 bg-secondary border border-accent/30 rounded-full hover:border-accent hover:bg-secondary/80 transition-all"
            >
              <ChevronRight className="text-accent" size={24} />
            </motion.button>
          </div>

          {/* Counter */}
          <div className="text-center mt-8 text-gray-400">
            <p>
              <span className="text-accent font-semibold">{currentIndex + 1}</span> / {testimonials.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
