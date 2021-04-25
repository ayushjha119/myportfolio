import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './about.style.css'
import Image from 'react-bootstrap/Image'
import Profile from "../../assets/img/profile/profile.webp";

import Button from 'react-bootstrap/Button' 

const About = () => {
    return (
        <div id ='about'>
        <div className='about'>
        <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
        <Container>
            <Row className="pt-3 pb-5 align-items-center">
                <Col xs={12} md={6}>

                <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                </Row>
                </Col>

                <Col xs ={12} md={6}>

                <Row className=" align-items-start p-2 my-details rounded">
                {/* description */}
                Hi there! I am <strong>&nbsp;Ayush Jha</strong>
                <br />A passionate programmer and  ML Enthusiast, born and brought up in India. I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and mongoDB as my tech stack.
                <br />
                I am currently pursuing my Engineering with specialization in 'Information Technology'.
                <br />
                Working with Chegg India Pvt. Ltd.  my goal is always driven towards providing amazing experience with the best level of quality and knowledge to their Students.
                <br />
                Along with that, I am also a ML Enthusiast and always passionate to combine two tech stack and create something new and extraordinary. 
                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better, scalable and useful products.
                <br /> <br />


                </Row>

                <Row>
                {/* buttons */}
                <Col className="d-flex justify-content-center flex-wrap">
                <div>
                    <a href="#contact">
                    <Button className="m-2" variant="outline-primary">
                    Let's talk
                    </Button>
                    </a> 
                </div>

                <div>
                    <a href="https://drive.google.com/file/d/1dU_Ny-N1LmTF-yEc7omsmbmbMfePBkno/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/ayushjha119" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/ayush-jha-b9544a19a/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>

                </Col>
                </Row>

                </Col>
            </Row>
        </Container>
        </div>
        </div>
    )
}

export default About
