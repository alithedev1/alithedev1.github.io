import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`py-12 transition-colors duration-200 ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className={`font-bold text-2xl ${
              theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
            }`}>
              Ali<span className={theme === 'dark' ? 'text-purple-500' : 'text-purple-600'}>
                .dev
              </span>
            </a>
            <p className="dark:text-gray-400 text-gray-500 mt-2">
              Building amazing web experiences
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-gray-400 text-gray-500 hover:text-yellow-500 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-gray-400 text-gray-500 hover:text-yellow-500 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="dark:text-gray-400 text-gray-500 hover:text-yellow-500 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t dark:border-gray-800 border-gray-200 mt-8 pt-8 text-center">
          <p className="dark:text-gray-400 text-gray-500">
            © {new Date().getFullYear()} Ali Ashraf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
