import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  const projects = [
    {
      id: 1,
      title: 'Weather Wise',
      description: 'A responsive React app that shows real-time weather, 5-day forecasts, and current location detection with sleek Google-style UI.',
      image: 'https://tse1.explicit.bing.net/th/id/OIP.Xn9TASx5SJRaHNp5FrdvrgHaE6?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
      technologies: ['React', 'Node.js','Recharts', 'Vite', 'Tailwind CSS'],
      liveLink: 'https://ayyan1700.github.io/weatherWise/',
      githubLink: 'https://github.com/ayyan1700/weatherWise',
    },
    {
      id: 2,
      title: 'Dice Game',
      description: 'A fun and interactive dice game built with JavaScript, featuring smooth animations and dynamic gameplay logic.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      technologies: ['html', 'css', 'animation', 'javascript'],
      liveLink: 'https://ayyan1700.github.io/dicegame/',
      githubLink: 'https://github.com/ayyan1700/dicegame',
    },

    {
      id: 3,
      title: 'Animated-Porfolio',
      description: 'A visually engaging animated portfolio built with smooth motion effects, responsive layouts, and interactive components to showcase projects, skills, and personal branding.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      technologies: ['React', 'vite', 'framer-motion', 'Aos' ,'Talwindcss'],
      liveLink: 'https://ayyan1700.github.io/ecommerities/',
      githubLink: 'https://github.com/ayyan1700/ecommerities',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, animated portfolio website showcasing projects with smooth animations and scroll effects.',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBDgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAACAwABBAYHBQj/xAA+EAABAwMCBAMEBwYFBQAAAAABAAIDBAURBiESMUFRBxNhFCIyQiNScYGRobEIM1NiwfE1c4LR4RUWVJLw/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAQDAgH/xAAdEQEAAwACAwEAAAAAAAAAAAAAAQIDERIhMUEE/9oADAMBAAIRAxEAPwDiuFYCmEQCCBEFAEQCC2hEAoAjaEEARhqtrUxrUABqYGow1G1qAAxGGJjWpgagWGIgxNDUYYgUGIhGnBiINQJ4EqYub8KzC1LlZsg8plxrKCf2mmldHLHuxw5/2X0PQxitbFcm4xV08MgI6e4M/nlfPdWwEEBvRdj8P9QQx22Cgr5AGcIMMh+XPMFBuLafbkqfT5HLCzwzYEbtPIjkVTm7c0GtXGDhljfg8XFw/auS64LH6sujo8Y87fHfAyup6vvNNYovaZy10+D7NTnnI/oT2aO64rLI+aV8sri+SRxe5x6knJKDHcMnZXS0c9dVw0lHA+eoncGRxsG7j/br0GVk0VDUXGthoqOF01RO7gjjbuXHn+GAT2ABK73oXRVHpKjNROGS3ORuJp8fAD8jOw/X7ggw9D6HpNJ0ftNVwTXORuJZsZDM/Iz79vVaf4ja4dT+RHRwtqLfNxMkmZL7ruYcxrmnZ45/plZviVrjy6hlrZTySW6piIlqIZOFzmHY+U4bFw65+zbOVo9ho7hZ7hHPRTQ1NifiWSqkb9C1jfmOc8ErenUHGMhBs9gvjdJ2+OivVTUVVqlkDYcs+mtvEM8MuD7p3+H02xyXga80U62RuvNpkNfZ6kecXB/GWA/OHdW+vMdVi09LT2oVFzpag3KjqHGFtNK0tdI52XH2nPLHTvzHNbFpjUVXa3z3CSoNTpeUu82GQZNM5uG4iGN28gMDGNjhByOogLMPjPHG7kR09EhdW1jommlpBqDSAZVW2ZvG+niGQB14R0x1bzHRcyqIBw+bBl0Z/FqDGXev2av8Pvf+dH+hXBsLvP7NX+H3v/Oj/QoOIYRAKwEQCCAIgFYCIBBbWo2hRoTAEEa1Na1U1qa1qCNamBqgamNCCNamNaraEwBBQajDVYCIBBQCLhRAIgEAYSpQsjCVKEHlVI7L2tNXBj4RTOIbLGMAHq3p/svKqWZBXlzNLXcTSQRyIOEHVKXUFfQNxS1kkbR8mQ4fgUu4a8vDYHk3DgaB8TGNafxAyuai83JjeE1HHjkXtBI+9Y7pqmulBqJXPHY7D8EHrVFwmulY+qqJHSOcdnPOXYWVbaCquVbDRUMLpaiZ2GMaPz+wd+iXYrVU3OshoqCB0tRKcNa38yew9V9CaF0ZSaWoy7aa4yjE1QRyH1G9m/rzPRArQ+jKPSlEaiUNmuUjPpqjGeFvPgZ2Gw+0jfkFp+vtdU9ZVVNgidUQ0zswVFZAfeidnGA35h0cOZBOM8j0+nu9vq6+pt1PWRSVdKAZ4mu96MHllarrXRrKtst1ssMMd6ZH9BK/4Wn62OXEBs1xB4efQYDitVDUadqJLJf6QzULzxhsexb2khJ5HuDseRwd1lzOo9PWr2dvl3W3XNpknnlLmRODTgRsHyzDueWMbhH5LbTbZaXVwqnxVDswUbCDUQuzvM1x5ddjs/8ANehSTXCkucIpI4nacb9JTuLQaeOFvOYvcMicHfJGeLbGAAAw6+Kax08UdDDLVRVzGe1Oq4vNmmkPwU0rQcswCPUnqMYS6ulc24zXKmroGU9NG0VUTXB/sMYAzThgGHDPu5HPfO+6K3NbYvNvVJcPb6Ope6niaC6N9S6T/wAkn4cA7EYJ6LFpKeG12/8A67bDLNCZX0zIp25jpM/vDJj963fAPLlnBACD09O32stFRH/2zbj7EXeZcLS85l952BIHdMDAA24eo3ys7VujqO9wS6g0bJFK8vIqaaMjDn9dhsHenI9F4Daeeaio6mxU7qUSPdK+kjlxJNIDgSZJyYd9u2DseZyLNdhY66prdOltRceFsdXRj3aao6vcwdT0A6HJHZBoNTTjLnMY5hbs9h5sI5rtn7NYxQXsH+NH+hXm33TlBrW2M1HpxhpbiW5mgk2LumHDvnYO69V7X7PkMlPHf4ZYTDMyeMSRuGC08JQcOARAKBEEFgIgFAEbQgIBMAVAJjQgtoTWhC0JrQgtoTGhU0JjQgtoTGhUAjaEFgIgFAESCwFeFYVoKS3jKdhUQgwJY8hYE0GV7TmApL4gUHhOpiT/AMLOtlslqqmGmp28U0zwxg7krL8kA5wnQS1FFPFV0LwypgeJIyRkZB6+iDvehdGUelaE8OJq+YD2ipI5/wArezQtoI2WraF1rQ6soncIFPcYQPaKRx3afrN7tPdbTlBxzWQqdGeItPqCmDnU1Y4vkH1hgCVn3tAcPVoXW4JoqmniqIJA+GVgexw5EHfK8PX+nG6m05PRsPDVR4mpn9pG7gfYeX3rXfB2/Gts0lnqQW1VudgMdz8sk7f6SCEGdrbQls1C6OrkieJ4efkv4DI36hODt64yOYXJZHXh11fZ7nTiehqQIn26JvAyLhHuiPc8HD0fkg4JdndfRjtytU1jpqO+26pjpZDTVUsZj82NoDiOZbnnjuOqDjdwc2xwiK1yR3ehrCWVNVLH5gqnjZsGG7swN85yTgjYYLK6irI7qa6iqqaC300bRNG54c23R4y6B8YOH5zjPzHOcFeNBNedE3d8EzOEnIkhOQydnLIPQ9iNx+SzaBtNaqR16oKkVsD3Gnippm48ov3d7UR8QGcA/Nty6Bc8Udfdqi+UlRUQRwNE89O5odUxMHwiLG3luz9w57c0xFtwZU3CzUvs9zhY0ujY/jZTROJJfFt8ZJxw9N8Ds9jKltsp67TVNUQU8krhUtgcJJjK04aGkj3oBloA754uiqtgfWvgo7SaZtbBl9XQ07jE0znJMjX59/h2y35emQgdbquqZd6K6RXB9DdeHeOQcRqoGj5m8mk8sHAPoV2Dwzv1v1FDXVtJSPpKpr2x1VO8bscM436j9OS4jK2gu9eB580la3aVzGhouMjG/Cx3yHJwehxkb7LqfgbXS1kV5dUxwCdssYe6FmOhw09yOW+6DgoCIBUAiAQWAjAVBG0IDamBAExqBjUwIGpjeSBjUbUDUwIDHJG1AEwICCtQItkFhWhCJBY5KiplRBSohWhJQU4IDsicUslAUMtTRVsNwts7qatgOY5G9fQ9wey7d4fa8ptVQOpahjaW7wN+lpidnj67O49On4Z4aXYQh0sVTFV0kzoKyB3HFMz4mn/7p1QfU47rj2tIZND+IFHqSlY72GscfPY3r/Eb97feHq0LZfDnxAj1GwW268FPeYm7tzhtQPrM9e46L2dc2M6k05VW9nC2ox5kD3D4ZW7t/PYoPYbNHUxMkhkD4ntDmyN5OB3GPuQvaCMY25YWheEF+dW2iSy1fuVlucWhjufBkjH+k5H4Lfn8kGraz0nRaloTHO0NnG8cwOHA/wC/5HquDV1JdtHXZ8M7We8Cxwe3MVSz6pH9OYX04/f1Wvar07RahoH09WwcWPdf1B6b/wBUHGIpHXCsfe7fUx0lNTxsMrc4ktzG842MGz2O5A4+0AhAGU5kqLpZ6SeKviAlZQyEPbTsd8VQ3G7tuH3PlJzkjAWPUaavmntRsp6Vri/fgmcMMLOvmdAMcxy6josiqkhnwzRzSTHIHVcEWWyTuB2cw8WTCN8AcuowQUCmAVFE640sccV2ncWRSOwx1TEM8ckLPlkOw3O++N8hdX8FJamSguArW8Lw9hYJMCUsIODIBtn88LlddTwXi4Zkr+G4wxBtayJmWyFnvcMB/ie7gt2BOSORC6h4H3I3QXqeSlZBL5kbXAElxAaeHizzdjqg4OEQVBEEBNRhCETUBhMCAI2oGtTAlBMbyQMCMIAjCAwmNSwjagYFYQhRAxWCgyrygLKiHKhKC8oSplCSgpxSyV41xuTvM8uMujcxxzkgZ3TqS6RyNDJ3BrvrdCg9BxQFyrjDhkHPqhKCOLg9ksMjoqiJwfFKw4cw9wV2Tw68RY705lovjmw3VoxHIdmVQHbs7069Oq4wSlytbI3BOCCC13Yjkg6lriGXRWtaTVVFE40dS4iqjZ1OPfb9pG49WjuuqRyxzxMmhka+KRocx43DmncEfauM2PVUGpLLJpTU8wjllaBS1ruQePhJ9QV0Hw7p7lQaYit94jEdTSSOiaAct4M+6WnqO3og2JyS/mnOSn7oPFv9nprxQy0tQ33ZGcHEM8u3qFxS42CTRNxkuFW58nkPxRxMJBc4g4L3dGAf+3Locd/eF5V7tVLd6J9NWRtexwIyRnGUHErZTyXOhqtQ2u2Se30ZaHMDcQNc7JMzBzc5vVnTiB35LqPgbVyVduuU81NwOdIzNQG4NScHLiMD7M4WutfeNKXtsHlRusRYMtaQyOmjaDxPyd88vtO3MhbX4S3elvdVfayigMLPNjYMu2c0A4PD8vPkg+f0QVBEAgIIghRBAYTAlhGEDAmBLBRgoGBG1LBRhAwIggBRZQGETUsFECgNWDsgBUygPKrKDKmUBEoSTjZUSqyg8xsQnnqJHDJbJw7jlgBBU0EUhzjhd3CyKhr6eZ08I4mOH0jOv2hKkrYvL4g132YQYHHNb5MO3YevQ4/uvTgqGTxh7DnK84StlLnzHG2wHyqomyUuJ2bN+Zncf0QeoSlkoWTNlZxtOyhKAZOF44XZx3BxhdQ8NvEIRPjsuoqjhBwylq5DsTy4Xnp6HkuWuKF2HsLHjIPMFB9Wu7Hb7UtwwuP+HfiN/wBOENn1JNmkHuU1a8/uuzXnt2PTquwuwRkEEdECXrHkCyHJDwg8u50FPcKV9PVxh8bh1HI77j8f1QeGGn49PvuscYcWzSMfxl2QRggAdlnyBenpwfv/ALv6oPlFEFSsICRBCOSJAQTAlgowUBhGClhEEDQUYKSCjBQNBRApQKIFA0FTKAFTKBmVMoMqZQHlTKDKmUBFyriQkqsoLJWLLTxvySE8lASg8yrhAmjjGMHdOx7p6gjfKZVQ+cGlp4Xs3aUn2gNGJwWOHpsUGIXOppA5hOM4IWayRsjA5p+5YVTI1/EGs+LBBPcf3TaRpa12eqB7kKhKElAWQQQ7cEbrfPDnxAfYjFaL1K6S1coJ3bmm/lP8n6Ln5KnFzHQ9EH1UHskjbJE9r43jia5pyHDuEl64f4f67l03K2guT3zWd7vdPN1MT1H8vp05rtkc8VTAyemkbLFI0OY9hyHA9QgU/wBAvT08QHTjO/unH4rVNWaio9N2x1XVu4nuy2CFp96V3Yf1PReb4GXWrvU2oa6vfxTPmjGByY3hOGjsAg4ciCEIggJEhVhAQRhLCJAzKIFLCIIGAogUsFXlA0FXlACrygYCplBlTKBgKmUsFXlAeVMoMqZQESqyhyqygslBlQlCSgsnCU7BGCMjsiJQEoFujYeTcKsY5IiULkAkoCVZQFBChyoSqKC+Lmto0TqW/WrzKO0yQuovjkjqml0cJPMtwQRntnC1N7uBpdjkFuVBSMpKGGmeQxvD51Q76xPIZ7DCy206R4bY5958nXYsvleay6GeumA4QQTHGwdmNzsPxXSPBOjp6OK7CmpzCHPjJBcXZ2PdaHbqqlq2ONM8PDHcJx0K6X4V54Ljk595n6FS56XnTi0qdc6RnzWHzwEQQq1egFlWEKgQGESAKwUBoggyrBQGCiBSwVeUDQVeUvKvKA8qwUvKmUDMqZQAqZQMyqygyplAWVMoMqsoCyhJUJQEoLJQEqEoSUEVEqsoSUFOQFWShQQoVZVIFzZMbgOy3ueKCvogXP4Y5YY3NfnGDjZaMRz3Xv6auTfKFuqnBrmnNM9/Lfmw/qFh+iszWLR8UfntET1n62K30UVDH5cbC078biR7x+77107wpLSy4433Z+hXLq+sFJRSySlsb42Ehrm8TX46A8wfTOD6Lbv2dZpKikvb5Hud9NHgF2QNjyWGNJtbvLXe8RTo40rCiiuRLCtRRBYVqlEBKwoogIK1FEEVqKIICryoogmVMqKIJlTKiiClFFEFFCoogEocqKIKKFyiiACooogooVFEFHkluAdsVFEn09j2zaW/V0MYp3uZPDy4J28X/K7J+zw9r4L6WRMizNHszOPhPclRRcREQ7vM8P/Z',
      technologies: ['html', 'css', 'javascript'],
      liveLink: 'https://ayyan1700.github.io/porfolio/',
      githubLink: 'https://github.com/ayyan1700/porfolio',
    },
      // {
    //   id: 5,
    //   title: 'AI Chat Application',
    //   description: 'An intelligent chatbot application powered by AI, featuring natural language processing and learning capabilities.',
    //   image: 'https://images.unsplash.com/photo-1527522883525-f40a04b3fc38?w=500&h=300&fit=crop',
    //   technologies: ['Python', 'Flask', 'React', 'TensorFlow', 'PostgreSQL'],
    //   liveLink: 'https://example.com',
    //   githubLink: 'https://github.com/example',
    // },
        // {
    //   id: 6,
    //   title: 'Social Media Dashboard',
    //   description: 'A comprehensive dashboard for managing multiple social media accounts with analytics and scheduling.',
    //   image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    //   technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'OAuth'],
    //   liveLink: 'https://example.com',
    //   githubLink: 'https://github.com/example',
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="projects"
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
            Featured <span className="text-accent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-purple rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold bg-accent/20 text-accent rounded-full border border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.liveLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-all"
                  >
                    <ExternalLink size={16} /> Live
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 border border-accent/50 text-accent rounded-lg hover:bg-accent/10 transition-all"
                  >
                    <Github size={16} /> Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
