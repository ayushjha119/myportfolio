import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import BgImage from "./assets/img/parallex/background.webp";

import TimeLine from "./components/project-timeline/project-timeline.component";
import MyNavbar from "./components/my-navbar/mynavbar.components";
import MyCarousel from "./components/my-Carousel/my-Carousel.component";
import TitleMessage from "./components/title-message/title.message.component";
import About from './pages/About/about.component'
import Skills from './pages/skills/skills.component';
import Experience from './pages/experience/experience.component'
import Contact from './pages/contact-form/contact.form.component'
import Footer from './components/footer/footer.component'
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";


import './App.css';

const App = () =>  {
  return (
    <div className="App" style={{ position: "relative" }}>
    
    <MyCarousel/>
    <TitleMessage/>
    <MyNavbar/>

    <Particles className="particles particles-box" params={particlesOptions} />

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
              <Slide bottom duration={500}>
              <Skills />
              </Slide>
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
      
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>

      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
          <hr / >
            <Contact />
          </Fade>
        </Container>
      </div>
      <hr />
      <Footer />
      
        
    </div>
   
  );
};

export default App;
