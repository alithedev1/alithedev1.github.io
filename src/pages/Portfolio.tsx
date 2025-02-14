import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    name: 'B2B Marketplace Platform',
    description:
      'A comprehensive B2B marketplace platform connecting suppliers and businesses. Features include advanced search, secure payment processing, and supplier management tools. Built with React, Node.js, and PostgreSQL.',
    imageUrl: 'https://dummyimage.com/300x300',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Express'],
  },
  {
    id: 2,
    name: 'AI-Powered Layer Website',
    description:
      'An innovative layer website leveraging AI to provide personalized user experiences. Includes dynamic content generation, intelligent recommendations, and real-time analytics. Developed using React, Python, and TensorFlow.',
    imageUrl: 'https://dummyimage.com/300x300',
    tags: ['React', 'Python', 'TensorFlow', 'AI'],
  },
  {
    id: 3,
    name: 'Decentralized Social Media App',
    description:
      'A cutting-edge decentralized social media application built on blockchain technology. Ensures user privacy, data security, and content ownership. Implemented with React Native, Ethereum, and IPFS.',
    imageUrl: 'https://dummyimage.com/300x300',
    tags: ['React Native', 'Ethereum', 'IPFS', 'Blockchain'],
  },
];

const Portfolio = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const goToPreviousProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projects.length - 1));
  };

  const goToNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex < projects.length - 1 ? prevIndex + 1 : 0));
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="container mx-auto h-screen flex flex-col justify-between items-center py-12">
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full lg:w-3/4">
        {/* Project Image */}
        <div className="col-span-1 flex justify-center lg:justify-end">
          <img
            src={currentProject.imageUrl}
            alt={currentProject.name}
            className="rounded-lg shadow-md"
            style={{ maxWidth: '300px', maxHeight: '300px' }}
          />
        </div>

        {/* Project Details */}
        <div className="col-span-1 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-green-400 mb-4 font-heading">{currentProject.name}</h1>
          <p className="text-lg text-white font-body">{currentProject.description}</p>
          <div className="mt-4">
            {currentProject.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-gray-700 text-green-400 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 font-body"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </main>

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full mt-6 px-4 lg:px-0">
        <button
          className="w-24 h-24 rounded-full border border-green-400 hover:bg-green-400 hover:text-black transition duration-200 flex items-center justify-center font-body"
          onClick={goToPreviousProject}
          aria-label="Previous Project"
        >
          &#8592;
        </button>
        <button
          className="w-24 h-24 rounded-full border border-green-400 hover:bg-green-400 hover:text-black transition duration-200 flex items-center justify-center font-body"
          onClick={goToNextProject}
          aria-label="Next Project"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
