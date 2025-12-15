import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init('tVYOm0LmWQFXjHF45'); // Replace with your public key
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Validate form
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setError('Please fill in all fields');
            setLoading(false);
            return;
        }

        try {
            // Send email using EmailJS
            await emailjs.send(
                'service_17eysot', // Replace with your service ID
                'template_2wmf1og', // Replace with your template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    time: new Date().toLocaleString(),
                    to_email: 'syedayyan1715@gmail.com', // Replace with your email
                }
            );

            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => {
                setSubmitted(false);
            }, 3000);
        } catch (err) {
            console.error('Email error:', err);
            setError('Failed to send email. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: Linkedin,
            link: 'https://linkedin.com',
            color: 'hover:text-blue-500',
        },
        {
            name: 'GitHub',
            icon: Github,
            link: 'https://github.com',
            color: 'hover:text-gray-400',
        },
        {
            name: 'Twitter',
            icon: Twitter,
            link: 'https://twitter.com',
            color: 'hover:text-blue-400',
        },
        {
            name: 'Email',
            icon: Mail,
            link: 'mailto:hello@example.com',
            color: 'hover:text-accent',
        },
    ];

    return (
        <section
            id="contact"
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
                        Get In <span className="text-accent">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-purple rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                                    Full Name
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="w-full px-4 py-3 bg-secondary/50 border border-accent/30 rounded-lg focus:border-accent focus:outline-none transition-all text-white placeholder-gray-500"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                                    Email Address
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                    className="w-full px-4 py-3 bg-secondary/50 border border-accent/30 rounded-lg focus:border-accent focus:outline-none transition-all text-white placeholder-gray-500"
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                                    Message
                                </label>
                                <motion.textarea
                                    whileFocus={{ scale: 1.02 }}
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your message here..."
                                    rows="5"
                                    required
                                    className="w-full px-4 py-3 bg-secondary/50 border border-accent/30 rounded-lg focus:border-accent focus:outline-none transition-all text-white placeholder-gray-500 resize-none"
                                ></motion.textarea>
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                whileHover={!loading ? { scale: 1.05 } : {}}
                                whileTap={!loading ? { scale: 0.95 } : {}}
                                type="submit"
                                disabled={loading}
                                className="w-full px-6 py-3 bg-gradient-to-r from-accent to-accent-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <Send size={20} />
                                {loading ? 'Sending...' : 'Send Message'}
                            </motion.button>

                            {/* Error Message */}
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400"
                                >
                                    ✗ {error}
                                </motion.div>
                            )}

                            {/* Success Message */}
                            {submitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400"
                                >
                                    ✓ Message sent successfully! I'll get back to you soon.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>

                    {/* Contact Info & Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-8"
                    >
                        {/* Contact Information */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="text-accent mt-1">📍</div>
                                    <div>
                                        <p className="font-semibold text-white">Location</p>
                                        <p className="text-gray-400">Karachi, pakistan</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="text-accent mt-1">📧</div>
                                    <div>
                                        <p className="font-semibold text-white">Email</p>
                                        <p className="text-gray-400">devayyan761@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="text-accent mt-1">⏰</div>
                                    <div>
                                        <p className="font-semibold text-white">Response Time</p>
                                        <p className="text-gray-400">Within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        {/* <div>
                            <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
                            <div className="flex gap-6">
                                {socialLinks.map((social, i) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={i}
                                            href={social.link}
                                            whileHover={{ scale: 1.2, y: -5 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={`p-3 bg-secondary/50 border border-accent/30 rounded-lg text-gray-400 hover:border-accent transition-all duration-300 ${social.color}`}
                                            aria-label={social.name}
                                        >
                                            <Icon size={24} />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div> */}

                        {/* Quick Stats */}
                        <div className="bg-gradient-to-r from-accent/10 to-accent-purple/10 border border-accent/30 rounded-lg p-6">
                            <p className="text-sm text-gray-400 mb-3">Available for:</p>
                            <div className="flex flex-wrap gap-2">
                                {['Freelance Projects', 'Full-time Roles', 'Consulting'].map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
