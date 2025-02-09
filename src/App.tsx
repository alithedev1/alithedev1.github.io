import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-200 dark:bg-black bg-gray-50">
        <Navbar />
        <Hero />
        <About />
        <Works />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;