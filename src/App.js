import React from 'react';
import './App.css';
import Profile from './components/Profile.js'
import Experience from './components/Experience.js';
import { Container, Row, Col } from 'reactstrap';
import { Timeline } from 'vertical-timeline-component-for-react';
import {experiences} from './experiences';
const App = () => {
  return (
    <div className="App" style={{ width: "100%", }}>
      <header className="App-header">
        <Profile />
      </header>
      <Container style={{ width: "100%", maxWidth: "99%" }}>
        <Row style={{ marginTop: "2vh" }}>
          <Col>
            <Timeline
              lineColor={'#ddd'}
              style={{ margin: "0 0 0 0", padding: "0 0 0 0" }}>
              {experiences.map((xp,key)=>(
                <Experience
                  key={key}
                  TimelineColor='#e86971'
                  {...xp}
              />
              ))}              
            </Timeline>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;