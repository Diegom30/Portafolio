import React from "react";
import { Container } from "./components/Styled";

import Banner from "./components/Banner";
import AbountMe from "./components/AbountMe";
import Projects from "./components/Projects";

function App() {
  return (
    <Container>
      <Banner/>
      <AbountMe/>
      <Projects/>
    </Container>
  );
}

export default App;
