import React from "react";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import BgImage from "./assets/img/parallex/background.webp";

import MyNavbar from "./components/my-navbar/mynavbar.components";
import MyCarousel from "./components/my-Carousel/my-Carousel.component";
import TitleMessage from "./components/title-message/title.message.component";
import About from './pages/About/about.component'
import Skills from './pages/skills/skills.component';
import Experience from './pages/experience/experience.component'


import './App.css';

const App = () =>  {
  return (
    <div className="App" style={{ position: "relative" }}>
    <MyNavbar/>
    <MyCarousel/>
    <TitleMessage/>

    <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={BgImage}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
              <Skills />
              </Fade>
            </Container>
          </div>
          <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
          <hr / >
            <Experience />
          </Fade>
        </Container>
      </div>
        
    </div>
   
  );
};

export default App;
