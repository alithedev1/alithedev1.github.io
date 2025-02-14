import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full backdrop-blur-sm z-50 px-4 py-3 ${
      theme === 'dark' ? 'bg-black/90' : 'bg-white/90'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className={`font-bold text-2xl ${
          theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
        }`}>
          Ali<span className={theme === 'dark' ? 'text-purple-500' : 'text-purple-600'}>
            .dev
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`hover:text-yellow-500 transition-colors ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${
              theme === 'dark' 
                ? 'text-gray-300 hover:bg-gray-800' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${
              theme === 'dark' 
                ? 'text-gray-300 hover:bg-gray-800' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className={`absolute top-full left-0 right-0 md:hidden ${
            theme === 'dark' ? 'bg-black/90' : 'bg-white/90'
          } backdrop-blur-sm`}>
            <div className="flex flex-col items-center space-y-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`hover:text-yellow-500 transition-colors ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
