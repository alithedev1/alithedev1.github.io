import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 dark:bg-gray-900 bg-gray-100 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}>Get in</span>{' '}
          <span className="dark:text-white text-gray-900">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold dark:text-white text-gray-900 mb-6">
              Let's Build Something Amazing Together
            </h3>
            <p className="dark:text-gray-300 text-gray-600 mb-8">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-100'
                }`}>
                  <Mail className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} />
                </div>
                <div>
                  <h4 className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}>Email</h4>
                  <p className="dark:text-gray-300 text-gray-600">contact@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-100'
                }`}>
                  <Phone className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} />
                </div>
                <div>
                  <h4 className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}>Phone</h4>
                  <p className="dark:text-gray-300 text-gray-600">+1 (234) 567-8900</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-100'
                }`}>
                  <MapPin className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} />
                </div>
                <div>
                  <h4 className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}>Location</h4>
                  <p className="dark:text-gray-300 text-gray-600">New York, USA</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block dark:text-gray-300 text-gray-600 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200 ${
                  theme === 'dark'
                    ? 'bg-black border-gray-800 focus:border-purple-500 text-gray-300 focus:ring-purple-500/20'
                    : 'bg-white border-gray-200 focus:border-purple-500 text-gray-900 focus:ring-purple-500/20'
                }`}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block dark:text-gray-300 text-gray-600 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200 ${
                  theme === 'dark'
                    ? 'bg-black border-gray-800 focus:border-purple-500 text-gray-300 focus:ring-purple-500/20'
                    : 'bg-white border-gray-200 focus:border-purple-500 text-gray-900 focus:ring-purple-500/20'
                }`}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block dark:text-gray-300 text-gray-600 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200 ${
                  theme === 'dark'
                    ? 'bg-black border-gray-800 focus:border-purple-500 text-gray-300 focus:ring-purple-500/20'
                    : 'bg-white border-gray-200 focus:border-purple-500 text-gray-900 focus:ring-purple-500/20'
                }`}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-purple-500 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;