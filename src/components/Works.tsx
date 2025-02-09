import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js, Redux, and Stripe integration.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    technologies: ['Next.js', 'Redux', 'Stripe', 'Tailwind CSS'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates using Socket.io.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics with beautiful data visualizations.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
  },
];

const Works = () => {
  const { theme } = useTheme();

  return (
    <section id="works" className="py-20 dark:bg-black bg-white transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}>Featured</span>{' '}
          <span className="dark:text-white text-gray-900">Works</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 flex gap-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-400 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                }`}>
                  {project.title}
                </h3>
                <p className="dark:text-gray-300 text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-sm rounded-full ${
                        theme === 'dark'
                          ? 'bg-purple-500/20 text-purple-400'
                          : 'bg-purple-100 text-purple-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;