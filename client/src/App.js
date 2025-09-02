import Home from './pages/Home';
import About from './pages/About';
import SkillsandTools from './pages/SkillsandTools';
import Experience from './pages/Experience';
import Services from './pages/Services';
import Project from './components/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import './Styles/Home.css';
import './Styles/Footer.css';
import Navbar from './pages/Navbar';


function App() {
  return (
    <>

      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skillsandtools"><SkillsandTools /></section>
      <section id="services"><Services /></section>
      <section id="project"><Project /></section>
      <section id="experience"><Experience /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  );
}

export default App;

