import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative dark:bg-black bg-gray-50">
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-purple-900/20 via-black to-yellow-900/20'
            : 'bg-gradient-to-br from-purple-100 via-gray-50 to-yellow-100'
        }`} />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold dark:text-white text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}>
                Ali Ashraf
              </span>
            </h1>
            <p className="text-xl md:text-2xl dark:text-gray-300 text-gray-600 mb-8">
              Full Stack Developer specializing in{' '}
              <span className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}>
                JavaScript
              </span>{' '}
              and its modern frameworks
            </p>
            <div className="flex gap-6 justify-center md:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-gray-300 text-gray-600 hover:text-yellow-500 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-gray-300 text-gray-600 hover:text-yellow-500 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="dark:text-gray-300 text-gray-600 hover:text-yellow-500 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="flex-1 max-w-sm">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-lg blur opacity-75"></div>
              <img
                src="ali-profile.png"
                alt="Ali Ashraf"
                className="relative w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="dark:text-gray-300 text-gray-600 hover:text-yellow-500 transition-colors">
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;