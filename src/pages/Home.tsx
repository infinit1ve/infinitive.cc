import About from "./home/about";
import Contact from "./home/contact";
import Hero from "./home/hero";
import Projects from "./home/projects";

function HomePage() {
  return <div className="bg-bg">
    <Hero />
    <About />
    <Projects />
    <Contact />
  </div>;
}

export default HomePage;