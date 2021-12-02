import "bootstrap/dist/css/bootstrap.css";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";

function App() {
  // ImportScript("./script.js");
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
