import React, { Component } from 'react';
import logo from './logo2.svg';
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
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Alexandre Pelagaggi</h1>
        </header>
        <Container>
        <Row>
          <Profile/>
          <Col>
            <Experience 
              logo={phygitall} 
              intro={'Full stack developer intern at Phygitall (IoT solutions company) since Aug/2017'}
              description={`Full stack developer intern at Phygitall (IoT solutions company) since 06/11/201, working in
              SQL databases modeling as well as developing front end web apps that are deployed and
              sustained by Node.js socket.io web sockets that work with react and bootstrap 4 as front end.
              Having experience with LoRaServer and Lora networks utilizing Mqtt and Rest APIs. Fast
              prototyping demands with Node-red. Experience with AWS cloud environment, RDS, EC2,
              CloudWatch and GIT CLI software versioning. Also having aiding with Kicad PCB design
              firmware for ESP8266 micro controllers as raspberry Pi slaves`}
            />
            <Experience 
              logo={TKA} 
              intro={'Invited Java Teacher for an 21h Java SE 1.8 Intesive course. Sep/2017'}
              description={`Java programming invited instructor on behalf of British company The Knowledge
              Academy (September 2017). Deploying a 21h course covering Java 8 SE features such as
              lambda expressions, multi-tasking development and JavaFX introduction`}
            />
            <Experience 
              logo={eletro} 
              intro={'Internship in VBA Visio solution from Nov/2016 to Nov/2017'}
              description={`Intern in instrumentation and control section of Eletronuclear-Eletrobrás from 07/12/2016 to
              01/12/2017, acting as a software developer for nuclear power plant Angra 2 and Angra 3,
              assisting in control room GUI human factors engineering via VBA solutions for microsoft
              VISIO and punctually QT software development.`}
            />
            <Experience 
              logo={cefet} 
              intro={'Researcher in power electronics solid state devices from Oct/2016 to Nov/2017'}
              description={`CEFET-RJ researcher in power electronics lab LAEP since October 2016-December 2017,
              aiming smart grid technology utilizing Arduino Mega microcontroller and adding JAVA
              GUI to control active power electronics components and accomplish IoT applications.`}
            />
            <Experience 
              logo={isep} 
              intro={'Erasmus student from Fev/2016 to Aug/2016'}
              description={`Six-month Academic Exchange Program at Instituto Superior de Engenharia do Porto in
              Portugal, during 2016 first semester, having studied distributed systems development for
              UNIX/POSIX OS utilizing C. Multi-platform applications with Java SE 8.`}
            />
            <Experience 
              logo={cnpq} 
              intro={'Researcher In organic solar cells aimed thin films development from Jan/2014 to Jan/2016'}
              description={`CNPq Researcher, in the Experimental Physics Laboratory (LaFEA / CEFET-RJ), for 11
              months, being 5 months in development of DSSCs, and 6 months in Thin Films Deposition
              Process by chemical and physical deposition(Sputtering).Having all verbal and written
              communication in the English, due to constant contact with foreigners, 2014-2015.`}
            />
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default App;
