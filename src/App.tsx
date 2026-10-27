import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Education from './components/Education';
import Career from './components/Career';
import Contact from './components/Contact';
import { useReveal } from './useReveal';

function App() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="grain min-h-screen bg-ink-50">
      <Nav />
      <main>
        <Hero />
        <About />
        <Research />
        <Education />
        <Career />
        <Contact />
      </main>
    </div>
  );
}

export default App;
