import React from "react";
import Aboutus from "../components/Aboutus/Aboutus";

import Events from "../components/Events/Events";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Motto from "../components/Motto/Motto";

import Project from "../components/Projects/Projects";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import TeamMembers from "../components/TeamMember/TeamMember";
function Landing() {
  return (
    <div>
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

export default Landing;
