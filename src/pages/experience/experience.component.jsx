import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_CHEGG from '../../assets/img/experience/chegg.svg'
import Tilt from 'react-tilt'
import "./experience.style.css";


const Experience = () => {
    return (
        <div id ='experience'>
         <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
         <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_CHEGG} alt="Chegg logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center"><span id="title">Advanced Mathematics Expert</span></Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style "><span id="sub-title">Managed network expert</span></strong>
                    <br />
                    <span id="subject-font">
                    <strong>Subject:</strong> Advanced Mathematics
                    <br />
                    <strong>Duration:</strong> September 2020 - Present
                    <br/>
                    <strong> Description </strong>
                    </span>
                    <ul id ="font-small" className="text-left">
                      <li><strong>Solved 500+ </strong> Advanced Mathematics question.</li>
                      
                      <li>Current <strong>CF score</strong> is more than 95%. 
                      </li>
                      <li><strong>Delivered</strong> exceptional level of service to each students by listening to concerns and answering questions.</li>
                      

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
            
        </div>
    );
};

export default Experience
