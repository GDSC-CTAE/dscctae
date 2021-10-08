import "./App.css";
import Aboutus from "./components/Aboutus/Aboutus";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Aboutus />
    </div>
  );
}

export default App;
