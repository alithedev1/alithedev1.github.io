import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const lines = [];
    const numLines = Math.floor(width / 50);

    class Line {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.length = Math.random() * 50 + 50;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.5 + 0.5;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      draw() {
        ctx.strokeStyle = `rgba(0, 255, 0, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + Math.cos(this.angle) * this.length, this.y + Math.sin(this.angle) * this.length);
        ctx.stroke();
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
        }
      }
    }

    for (let i = 0; i < numLines; i++) {
      lines.push(new Line());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      lines.forEach(line => {
        line.draw();
        line.update();
      });
      requestAnimationFrame(animate);
    }

    animate();

    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <Router>
      <div className="container mx-auto h-screen flex flex-col relative overflow-hidden">
        <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, filter: 'url(#distort)' }} />
        {/* Navigation */}
        <nav className="flex justify-between pt-10">
          <div className="flex flex-col">
            <Link
              to="/"
              className="text-custom-white p-2 border-2 border-custom-dark transition-all duration-200 hover:border-custom-green font-body"
            >
              //01. {'<Home/>'}
            </Link>
            <Link
              to="/portfolio"
              className="mt-2 text-custom-white p-2 border-2 border-custom-dark transition-all duration-200 hover:border-custom-green font-body"
            >
              //02. {'<Portfolio/>'}
            </Link>
          </div>
          <div className="flex flex-col items-end">
            <Link
              to="/about"
              className="text-custom-white p-2 border-2 border-custom-dark transition-all duration-200 hover:border-custom-green font-body"
            >
              //03. {'<About/>'}
            </Link>
            <Link
              to="/contact"
              className="mt-2 text-custom-white p-2 border-2 border-custom-dark transition-all duration-200 hover:border-custom-green font-body"
            >
              //04. {'<Contact/>'}
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={
            <main className="flex-grow flex items-center justify-center relative">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
                <div className="col-span-2 text-left">
                  <p className="text-xl md:text-2xl lg:text-3xl text-custom-green font-body">{'<p>'}This is{'</p>'}</p>
                  <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold my-4 text-custom-white font-heading" style={{ fontWeight: 500 }}>
                    Ali Ashraf
                  </h1>
                  <p className="text-xl md:text-2xl lg:text-3xl text-custom-green font-body">{'<p>'}Entrepreneur and developer{'</p>'}</p>
                </div>

                {/* Download CV */}
                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 rounded-full border border-custom-white relative flex items-center justify-center overflow-hidden group hover:border-custom-green">
                    <div className="absolute bg-custom-green inset-0 transform scale-0 group-hover:scale-100 transition-all duration-300"></div>
                    <span className="text-sm text-custom-white group-hover:text-custom-dark transition-all duration-300 relative font-body">{'<Download CV/>'}</span>
                  </div>
                </div>
              </div>
            </main>
          } />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Footer */}
        <footer className="pb-10">
          <div className="flex justify-start items-center">
            <div className="text-custom-green font-body">© 2024 Ali Ashraf</div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
