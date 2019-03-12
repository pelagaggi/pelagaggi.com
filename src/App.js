import React, { Component } from 'react';
import circuit from "./circuit.jpeg";
import phygitall from './Logo_Phygitall.png';
import TKA from './TKA.jpg';
import eletro from './eletro.jpg';
import cefet from './cefet.png';
import cnpq from './cnpq.png';
import isep from './ISEP.jpg';
import './App.css';
import Profile from './Profile.js'
import Experience from './Experience.js';
import { Container, Row, Col } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header" style={{backgroundImage:`url(${circuit})`/*,textAlign:"left", paddingLeft:"70vw"*/}}>
          <h1 className="App-title">Alexandre Rodrigues Pelagaggi Nunes </h1>
          <br/>
          <h4>Personal page / résumé</h4>
        </header>
        <Container>
        <Row style={{marginTop:"2vh"}}>
          <Profile/>
          <Col>
            <Experience
              logo={phygitall}
              intro={'Full stack developer intern at Phygitall (IoT solutions company) since Aug/2017'}
              description={`Middleware and Full stack developer intern in an IoT solutions company (Phygitall) since November 2017. Developing mainly NodeJS middleware, ReactJS components, managing PostgreSQL databases, developing Android Native Apps. Working in LPWANs aimed applications in geolocation, telemetry, indoor location as well as LoRaWAN network integration architecture in Actility and LoRa Server network Server and performing R&D in Indoor Locations models for 2.4Ghz RF using Python machine learning. Also managing in AWS IAM, EC2 and security groups management integrated with NGINX to manage web domains and subdomains.`}
            />
            <Experience
              logo={TKA}
              intro={'Invited Java Teacher for an 21h Java SE 1.8 Intesive course. Sep/2017'}
              description={`Java programming invited instructor on behalf of British company The Knowledge Academy. Deploying a 21h course covering Java 8 SE features such as lambda expressions, multi-tasking development and JavaFX introduction`}
            />
            <Experience
              logo={eletro} 
              intro={'Internship in VBA Visio solution from Nov/2016 to Nov/2017'}
              description={`Intern in instrumentation and control section of Eletronuclear-Eletrobras, acting as a software developer for nuclear power plant Angra 2 and Angra 3, assisting in control room GUI human factors engineering via VBA solutions for Microsoft VISIO and punctually developing QT M2M supervisory systems.`}
            />
            <Experience
              logo={cefet} 
              intro={'Researcher in power electronics solid state devices from Oct/2016 to Nov/2017'}
              description={`CEFET-RJ researcher in power electronics lab LAEP, aiming smart grid technology utilizing Arduino Mega micro-controller and adding JAVA GUI to control power electronics components and accomplish smart grid aimed IoT applications.`}
            />
            <Experience
              logo={isep} 
              intro={'Erasmus student from Fev/2016 to Aug/2016'}
              description={`Six-month Academic Exchange Program at Instituto Superior de Engenharia do Porto in Portugal, during 2016 first semester, having studied distributed systems development for UNIX/POSIX OS utilizing C. Multi-platform applications with Java SE 8 and Atmel microcontrollers family`}
            />
            <Experience
              logo={cnpq} 
              intro={'Researcher In organic solar cells aimed thin films development from Jan/2014 to Jan/2016'}
              description={`CNPq Researcher, in the Experimental Physics Laboratory (LaFEA / CEFET-RJ), for 11 months, being 5 months in development of DSSCs, and 6 months in Thin Films Deposition Process by chemical and physical deposition (Sputtering). Having all verbal and written communication in the English, due to constant contact with foreigners`}
            />
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default App;
