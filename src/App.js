import React, { Component } from 'react';
import {circuit, phygitall, altran, TKA, eletro, cefet,IPB, cnpq, isep} from "./images/index";
import './App.css';
import Profile from './components/Profile.js'
import Experience from './components/Experience.js';
//import Filter from './components/Filter';
import { Container, Row, Col} from 'reactstrap';
import { Timeline }  from 'vertical-timeline-component-for-react';

class App extends Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: true
    };
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render() {
    return (
      <div className="App" style={{width:"100%"}}>
        <header className="App-header" style={{backgroundImage:`url(${circuit})`,height:"100%"}}>
          <Profile/>
        </header>
        <Container style={{width:"100%",maxWidth:"99%"}}>
        <Row style={{marginTop:"2vh"}}>
          <Col>
          <Timeline 
          lineColor={'#ddd'} 
          style={{margin:"0 0 0 0",padding:"0 0 0 0"}}>
            <Experience
              TimelineColor='#e86971'
              dateText="02/2019 – Present"
              logo={altran}
              intro={'TECHNICIAN CONSULTANT AT ALTRAN'}
              description={`Developing as a safety team member, automated tests for embedded AUTOSAR complying embedded systems, delivering robot framework and custom python libraries automated tests for continuous integration.`}
            />
            <Experience
              dateText="09/2018 – Present"
              logo={IPB}
              intro={'Master in Industrial Electronic Engineering'}
              description={`Developing an indoor location platform capable of benchmark several machine learning algorithms with signal fusion capability, achieving floor detection and high precision indoor location`}
            />
            <Experience
              TimelineColor='#e86971'
              dateText="11/2017 – 02/2019"
              logo={phygitall}
              intro={'APPLICATIONS ENGINEER INTERN AT PHYGITALL IOT SOLUTIONS'}
              description={`Applications engineer intern in an IoT solutions company (Phygitall). Developing NodeJS middleware, React/Redux Web apps, managing PostgreSQL databases, developing Android Native Apps. Working in LPWANs aimed applications in geolocation, telemetry, indoor location as well as LoRaWAN network integration architecture in Actility and LoRa Server network Server and performing R&D in Indoor Locations models for 2.4Ghz RF using Python machine learning. Also managing in AWS IAM, EC2 and security groups management integrated with NGINX to manage web domains and subdomains.
              
              Accomplished a solution to the Brazilian navy delivering geolocation, and custom API to 20 vessels by deploying an on-premise 154,441mi² coverage LoRaWAN network.

              Designed as the first member of the software team an AWS scalable server ecosystem for integrating any LoRaWAN network server with a later developed React Redux web application.
              
              Delivered to CISCO’s center of innovation in Rio de Janeiro three LoRaWAN geolocation sensors with Webex Teams integration, by combining our company platform and an end-user mobile application with CISCO’s network server.
              
              Developed an indoor location solution for Embraer industrial site, meeting the POC defined criteria achieving 10 meters precision utilizing only existing wifi infra-structure with a noninvasive fingerprinting approach.`}
            />
            <Experience
              TimelineColor='#e86971'
              dateText="09/2017"
              logo={TKA}
              intro={'INSTRUCTOR OF THE KNOWLEDGE ACADEMY'}
              description={`Performed a 21h intensive Java introduction course covering Java 8 SE features such as lambda expressions, multi-tasking development, and JavaFX introduction.`}
            />
            <Experience
              TimelineColor='#e86971'
              dateText="11/2016 – 11/2017"
              logo={eletro} 
              intro={'Electronic engineering  internship in Instrumentation and Control'}
              description={`Intern in instrumentation and control section of Eletronuclear-Eletrobras, acting as a developer for HMI human factors engineering to nuclear power plant Angra 2 and Angra 3, automating control room GUI via VBA solutions for Microsoft VISIO and punctually developing QT M2M supervisory systems.
              
              Proposed developed and delivered an HMI simulation room for Angra 3 power plant as defined by Human Factors engineering standards in nuclear power plants by integrating existing VISIO diagrams with VBA solution.
              
              Developed an Angra 2 signal analysis platform as specified by I&C features requirements by developing a Qt creator UNIX application.
              `}
            />
            <Experience
              TimelineColor='#e86971'
              dateText="10/2016 – 11/2017"
              logo={cefet} 
              intro={'Researcher in power electronics'}
              description={`Accomplished control over a 2000 Amperes experiment as defined by smart grid aimed IoT remote control applications, by utilizing Arduino Mega micro-controller with a JAVA GUI to control solid states power electronics components.`}
            />
            <Experience
              TimelineColor='#e86971'
              dateText="02/2016 – 08/2016"
              logo={isep} 
              intro={'Erasmus international exchange student'}
              description={`Six-month Academic Exchange Program at Instituto Superior de Engenharia do Porto in Portugal, during 2016 first semester, having studied distributed systems development for UNIX/POSIX OS utilizing C. Multi-platform applications with Java SE 8 and Atmel microcontrollers family.`}
            />
            <Experience
              TimelineColor='#e86971'
              dateText="01/2014 – 01/2016"
              logo={cnpq} 
              intro={'Organics Solar cells Researcher'}
              description={`CNPq Researcher, in the Experimental Physics Laboratory (LaFEA / CEFET-RJ), for 11 months, 5 months in the development of Dye-Sensitized Solar Cells (DSSCs), and 6 months in Thin Films Deposition Process by chemical and physical deposition (Sputtering). Having all verbal and written communication in English, due to constant contact with foreigners.`}
            />
            </Timeline>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}
export default App;