import React, { Component } from 'react';
import {circuit, phygitall, altran, TKA, eletro, cefet, cnpq, isep} from "./images/index";
import './App.css';
import Profile from './components/Profile.js'
import Experience from './components/Experience.js';
import Filter from './components/Filter';
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
        <Filter/>
        <Row style={{marginTop:"2vh"}}>
          <Profile/>
          <Col>
            <Experience
              logo={altran}
              intro={'Altran technichiann since February 2019'}
              description={`Altran Technician since 02/2019 working in infotainment systems`}
            />
            <Experience
              logo={phygitall}
              intro={'Full stack developer intern at Phygitall (IoT solutions company) from Aug/2017 to February 2019 '}
              description={`Middleware and Full stack developer intern at Phygitall (IoT solutions company) 11/2017 to 02/2019, working in SQL databases modeling as well as developing REACT based web apps. Having experience with LoRaServer and LoRaWAN networks deployment and integrations with conventional APIS based in MQTT and REST. Fast prototyping demands with Node-red. Experience with and GIT versioning. Performed R&D in Indoor Locations models for 2.4Ghz RF using Python machine learning. Also managing in AWS IAM, EC2 and security groups management integrated with NGINX to manage web domains and subdomains`}
            />
            <Experience
              logo={TKA}
              intro={'nvited Java Teacher for a 21h Java SE 1.8 Intensive course. Sep/2017'}
              description={`Java programming invited instructor on behalf of British company The Knowledge Academy. Deploying a 21h course covering Java 8 SE features such as lambda expressions, multi-tasking development, and JavaFX introduction`}
            />
            <Experience
              logo={eletro} 
              intro={'Internship in ICE from Nov/2016 to Nov/2017'}
              description={`Intern in instrumentation and control section of Eletronuclear-Eletrobras, acting as a developer for HMI human factors engineering to nuclear power plant Angra 2 and Angra 3, automating control room GUI via VBA solutions for Microsoft VISIO and punctually developing QT M2M supervisory systems.`}
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
              intro={'Researcher In organic solar cells aimed at thin films development from Jan/2014 to Jan/2016'}
              description={`CNPq Researcher, in the Experimental Physics Laboratory (LaFEA / CEFET-RJ), for 11 months, 5 months in the development of DSSCs, and 6 months in Thin Films Deposition Process by chemical and physical deposition (Sputtering). Having all verbal and written communication in English, due to constant contact with foreigners.`}
            />
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}
export default App;