import "./App.css";
import Aboutus from "./components/Aboutus/Aboutus";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Projects/Projects";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Aboutus />
      <Project />
      <br/>
      <br />
      <br />
    </div>
  );
}

export default App;
