import "./App.css";
import Aboutus from "./components/Aboutus/Aboutus";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import GeekOfMonth from "./components/GeekOfMonth/GeekOfMonth";
import Hero from "./components/Hero/Hero";
import Motto from "./components/Motto/Motto";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Projects/Projects";
import TeamMembers from "./components/TeamMember/TeamMember";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Aboutus />
      <Motto />
      <Events />
      <GeekOfMonth />
      <Project />
      <TeamMembers />

      <Footer />
    </div>
  );
}

export default App;
