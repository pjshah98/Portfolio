import Navbar from './components/Navbar';
import Hero from './components/Hero';
// Placeholder imports for future sections
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-14 sm:pt-16 h-screen overflow-x-hidden overflow-y-auto snap-y snap-mandatory [&::-webkit-scrollbar]:hidden scrollbar-width-none scroll-smooth bg-gradient-to-br from-purple-100 via-blue-100 to-purple-200">
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