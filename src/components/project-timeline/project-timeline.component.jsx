import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

import Image from "react-bootstrap/Image";

import nameadder from "../../assets/img/projects/nameadder.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import L_REACT  from "../../assets/img/skills/react.svg";
import L_HTML5  from "../../assets/img/skills/html-5.svg";
import L_CSS3  from "../../assets/img/skills/css3.svg";
import "./project-timeline.component.css";


const TimeLine= () => {
    return (
        <div id='projects'>
        <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline> 
      <Events>
      <ImageEvent
            date="27/12/2020"
            className="text-center"
            text="React NameAdder App"
            src={nameadder}
            alt="React NameAdder App"
          >
           <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >PROJECT DETAILS</Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a Name Adder App created with React that add your text above
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Add your text above</li>
                          <li>Powered by React</li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5}  alt="HTML 5" rounded className="image-style m-1"></Image>{" "}
                              HTML5
                              </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image  src={L_CSS3}  alt="CSS 3"  rounded className="image-style m-1"></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image  src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image>{" "}
                              React
                            </span>
                          </li>
                          </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://name-adder.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/ayushjha119/Name-Adder"
                  target="_blank"
                > SOURCE CODE
                </UrlButton>
                </div>
            </div>
          </ImageEvent>


        
      </Events>
      </Timeline>

     


            
        </div>
    )
}

export default TimeLine
