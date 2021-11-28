import "./App.css";
import { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
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
      <HashRouter basename="/dscctae">
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/dscctae/projects" element={<ProjectsPage />} />
          <Route path="/dscctae/events" element={<EventsPage />} />
          <Route path="/dscctae/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
