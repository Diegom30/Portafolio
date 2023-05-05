import React from "react";
import { Container } from "./components/Styled";

import Banner from "./components/Banner";
import AbountMe from "./components/AbountMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Container>
      <Banner/>
      <AbountMe/>
      <Projects/>
      <Contact/>
      
    </Container>
  );
}

export default App;
