import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scrolling behavior
    const handleSmoothScroll = (e) => {
      if (e.target.hash) {
        e.preventDefault();
        const element = document.querySelector(e.target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleSmoothScroll));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleSmoothScroll));
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
