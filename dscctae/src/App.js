import "./App.css";
import Aboutus from "./components/Aboutus/Aboutus";
import Footer from "./components/Footer/Footer";
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
      <br/>
      <br/>
      <Project />
      <br />
      <TeamMembers />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
