import React from 'react';
import { Code2, Database, Globe2, Mail, Github, Linkedin, Terminal, Boxes } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Terminal className="w-8 h-8 text-emerald-400" />
            <div className="flex gap-4">
              <a href="#about" className="nav-item">About</a>
              <a href="#skills" className="nav-item">Skills</a>
              <a href="#projects" className="nav-item">Projects</a>
              <a href="#contact" className="nav-item">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Ali Ashraf</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mb-8">
              Crafting digital experiences with code, one line at a time.
              Specialized in building modern web applications with cutting-edge technologies.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-lg font-medium transition-colors">
                Get in touch
              </a>
              <a href="#projects" className="border border-slate-700 hover:border-slate-600 px-6 py-3 rounded-lg font-medium transition-colors">
                View projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-gradient p-6 rounded-xl">
              <Globe2 className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
              <p className="text-slate-400">React, TypeScript, Tailwind CSS, Next.js</p>
            </div>
            <div className="card-gradient p-6 rounded-xl">
              <Database className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Backend Development</h3>
              <p className="text-slate-400">Node.js, PostgreSQL, Express, REST APIs</p>
            </div>
            <div className="card-gradient p-6 rounded-xl">
              <Code2 className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">DevOps & Tools</h3>
              <p className="text-slate-400">Git, Jira, Miro, CI/CD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-gradient rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
                alt="Project 1" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
                <p className="text-slate-400 mb-4">A full-stack e-commerce solution with real-time inventory management.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm">PostgreSQL</span>
                </div>
              </div>
            </div>
            <div className="card-gradient rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80" 
                alt="Project 2" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Task Management App</h3>
                <p className="text-slate-400 mb-4">Collaborative task management with real-time updates and analytics.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm">Express</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <div className="max-w-xl mx-auto card-gradient rounded-xl p-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-emerald-400" />
                <a href="mailto:contact@example.com" className="text-slate-400 hover:text-white transition-colors">
                  contact@example.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Github className="w-6 h-6 text-emerald-400" />
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  github.com/username
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Linkedin className="w-6 h-6 text-emerald-400" />
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  linkedin.com/in/username
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>© 2024 Full Stack Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;