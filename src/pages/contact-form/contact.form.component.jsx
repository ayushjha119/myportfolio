import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact.form.style.css";

const Contact = () => {
    return (
        <div id="contact">
         <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
          <Row>
           
              <Col className="d-flex justify-content-center flex-wrap">
            
              <div className="m-2">
              <a href="mailto:ayushjha81083@gmail.com" target="_blank" rel="noopener noreferrer">
              <div id="footer-down">
                <Button variant="success" title="ayushjha81083@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
                </div>
              </a>
            </div>
            <div className="m-2">
              <a href="https://github.com/ayushjha119" target="_blank" rel="noopener noreferrer">
              <div id="footer-down">
                <Button variant="dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
                </div>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/ayush-jha-b9544a19a/" target="_blank" rel="noopener noreferrer">
              <div id="footer-down">
                <Button variant="primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
                </div>
              </a>
            </div>
         
            <div className="m-2">
              <a href="https://twitter.com/Ayush__jha_" target="_blank" rel="noopener noreferrer">
              <div id="footer-down">
                <Button variant="info" title="Tweets are welcomed!">
                  <i className="fab fa-twitter"></i> Twitter
                </Button>
                </div>
              </a>
            </div>
            

              </Col>
              
          </Row>
      </Jumbotron>
            
        </div>
    )
}

export default Contact
