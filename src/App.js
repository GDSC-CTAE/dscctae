import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import Landing from "./pages/Landing";
import ProjectsPage from "./pages/ProjectsPage";
import EventsPage from "./pages/EventsPage";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
