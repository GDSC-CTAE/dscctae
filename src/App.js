import "./App.css";
import { useEffect } from "react";
import Aboutus from "./components/Aboutus/Aboutus";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
// import GeekOfMonth from "./components/GeekOfMonth/GeekOfMonth";
import Hero from "./components/Hero/Hero";
import Motto from "./components/Motto/Motto";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Projects/Projects";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import TeamMembers from "./components/TeamMember/TeamMember";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Aboutus />
      <Motto />
      <Events />
      <Project />
      <TeamMembers />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
