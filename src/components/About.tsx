import React from 'react';
import { Code2, Database, Globe, Laptop, Server, Terminal, Layout, Shield, Cpu, Cloud, GitBranch, Smartphone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const skills = [
  {
    category: 'Frontend Development',
    icon: <Layout className="w-6 h-6" />,
    technologies: [
      {
        name: 'React & Next.js',
        description: 'Building scalable SPAs and server-side rendered applications with modern React patterns and Next.js features',
        icon: <Globe className="w-5 h-5" />
      },
      {
        name: 'TypeScript',
        description: 'Writing type-safe code to reduce bugs and improve development experience',
        icon: <Code2 className="w-5 h-5" />
      },
      {
        name: 'UI/UX Design',
        description: 'Creating responsive layouts with Tailwind CSS and modern design principles',
        icon: <Layout className="w-5 h-5" />
      }
    ]
  },
  {
    category: 'Backend Development',
    icon: <Server className="w-6 h-6" />,
    technologies: [
      {
        name: 'Node.js & Express',
        description: 'Developing RESTful APIs and microservices with Express.js and Node.js',
        icon: <Server className="w-5 h-5" />
      },
      {
        name: 'Database Management',
        description: 'Working with SQL and NoSQL databases including PostgreSQL, MongoDB, and Redis',
        icon: <Database className="w-5 h-5" />
      },
      {
        name: 'API Development',
        description: 'Designing and implementing RESTful and GraphQL APIs with best practices',
        icon: <Cloud className="w-5 h-5" />
      }
    ]
  },
  {
    category: 'DevOps & Tools',
    icon: <Terminal className="w-6 h-6" />,
    technologies: [
      {
        name: 'CI/CD',
        description: 'Setting up automated deployment pipelines with GitHub Actions and Jenkins',
        icon: <GitBranch className="w-5 h-5" />
      },
      {
        name: 'Cloud Services',
        description: 'Deploying and managing applications on AWS, Vercel, and Digital Ocean',
        icon: <Cloud className="w-5 h-5" />
      },
      {
        name: 'Docker & K8s',
        description: 'Containerizing applications and managing container orchestration',
        icon: <Cpu className="w-5 h-5" />
      }
    ]
  },
  {
    category: 'Security & Performance',
    icon: <Shield className="w-6 h-6" />,
    technologies: [
      {
        name: 'Web Security',
        description: 'Implementing authentication, authorization, and security best practices',
        icon: <Shield className="w-5 h-5" />
      },
      {
        name: 'Performance Optimization',
        description: 'Optimizing web applications for speed, SEO, and user experience',
        icon: <Laptop className="w-5 h-5" />
      },
      {
        name: 'Mobile Development',
        description: 'Building cross-platform mobile applications with React Native',
        icon: <Smartphone className="w-5 h-5" />
      }
    ]
  }
];

const About = () => {
  const { theme } = useTheme();

  return (
    <section id="about" className="py-20 dark:bg-gray-900 bg-gray-100 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}>About</span>{' '}
          <span className="dark:text-white text-gray-900">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <p className="dark:text-gray-300 text-gray-600 text-lg leading-relaxed mb-6">
              I'm a passionate Full Stack Developer with a strong focus on JavaScript and its ecosystem. 
              With years of experience in web development, I specialize in creating responsive, 
              user-friendly applications that solve real-world problems.
            </p>
            <p className="dark:text-gray-300 text-gray-600 text-lg leading-relaxed">
              My journey in tech has led me to work with various modern frameworks and tools, 
              always staying up-to-date with the latest industry trends and best practices. 
              I believe in writing clean, maintainable code and creating intuitive user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className={`p-6 rounded-lg border transition-all duration-200 hover:transform hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-black border-purple-500/20 hover:border-purple-500/40'
                    : 'bg-white border-purple-200 hover:border-purple-300'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}>
                    {skill.icon}
                  </span>
                  <h3 className={`text-xl font-semibold ${
                    theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'
                  }`}>
                    {skill.category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {skill.technologies.map((tech) => (
                    <div key={tech.name} className="group">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`${
                          theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                        }`}>
                          {tech.icon}
                        </span>
                        <h4 className="font-medium dark:text-gray-200 text-gray-700">
                          {tech.name}
                        </h4>
                      </div>
                      <p className="text-sm dark:text-gray-400 text-gray-600 pl-7">
                        {tech.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
