import Header from "./portfolio-sections/Header/header";
import Hero from "./portfolio-sections/Hero/hero";
import Skills from "./portfolio-sections/Skills/skills";
import Projects from "./portfolio-sections/Projects/projects";
import Certificates from "./portfolio-sections/Certificates/certificates";
import Socialmedia from "./portfolio-sections/Socialmedia/socialmedia";
import Footer from "./portfolio-sections/Footer/footer";

function App() {
  return (
    <section class="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Certificates />
      <Socialmedia />
      <Footer />
    </section>
  );
}

export default App;
