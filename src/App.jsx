import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// Placeholder imports for future sections
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  const mainRef = useRef(null);

  // Force the Skills section to be painted once on load so it appears instantly when user scrolls to it (no delay vs navbar anchor).
  useEffect(() => {
    const el = mainRef.current;
    const skills = document.getElementById('skills');
    if (!el || !skills) return;
    const savedBehavior = el.style.scrollBehavior;
    el.style.scrollBehavior = 'auto';
    const targetScroll = Math.max(0, skills.offsetTop - 1);
    let raf2;
    const raf1 = requestAnimationFrame(() => {
      el.scrollTop = targetScroll;
      raf2 = requestAnimationFrame(() => {
        el.scrollTop = 0;
        el.style.scrollBehavior = savedBehavior;
      });
    });
    return () => {
      cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main
        ref={mainRef}
        className="pt-14 sm:pt-16 h-screen overflow-x-hidden overflow-y-auto snap-y snap-mandatory [&::-webkit-scrollbar]:hidden scrollbar-width-none scroll-smooth bg-gradient-to-br from-purple-100 via-blue-100 to-purple-200"
      >
        <Hero />
        <About />
        <Projects />
        <Skills />
        {/* <Footer /> */}
      </main>
    </>
  );
}

export default App;