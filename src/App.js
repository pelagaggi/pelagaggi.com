import React, { Component } from 'react';
import logo from './logo2.svg';
import CEM from './CEM.jpg';
import phygitall from './Logo_Phygitall.png';
import TKA from './TKA.jpg';
import eletro from './eletro.jpg';
import cefet from './cefet.png';
import cnpq from './cnpq.png';
import isep from './ISEP.jpg';
import './App.css';
import { Container, Row, Col ,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


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
          <Col>
            <div>
              <Card>
                <CardImg top width="50%" src={CEM} alt="Card image cap" />
                <CardBody>
                  <CardTitle>Professional Developer</CardTitle>
                  <CardSubtitle>IoT aimed Software developer at</CardSubtitle>
                  <CardText>Phygitall Soluções em IoT Solutions</CardText>
                  <a href="https://www.linkedin.com/in/alexandre-pelagaggi" ><Button>Linkedin</Button></a>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col>
            <Row>
              <Card>
                <CardBody>
                  <Row>
                    <Col >
                      <Card>
                        <CardImg top width="10%" src={phygitall} alt="Card image cap" />
                      </Card>
                    </Col >
                  </Row>
                  <br/>
                  <CardText>Full stack developer intern at Phygitall (IoT solutions company) since Aug/2017</CardText>
                </CardBody>
              </Card>
            </Row>
            <br/>
            <Row>
              <Card>
                <CardBody>
                  <Row>
                    <Col >
                      <Card>
                        <CardImg top width="10%" src={TKA} alt="Card image cap" />
                      </Card>
                    </Col >
                  </Row>
                  <br/>
                  <CardText>Invited Java Teacher for an 21h Java SE 1.8 Intesive course. Sep/2017</CardText>
                </CardBody>
              </Card>
            </Row>
            <br/>
            <Row>
              <Card>
                <CardBody>
                  <Row>
                    <Col >
                      <Card>
                        <CardImg top width="10%" src={eletro} alt="Card image cap" />
                      </Card>
                    </Col >
                  </Row>
                  <br/>
                  <CardText>Internship in VBA Visio solution from Nov/2016 to Nov/2017</CardText>
                </CardBody>
              </Card>
            </Row>
            <br/>
            <Row>
              <Card>
                <CardBody>
                  <Row>
                    <Col >
                      <Card>
                        <CardImg top width="10%" src={cefet} alt="Card image cap" />
                      </Card>
                    </Col >
                  </Row>
                  <br/>
                  <CardText>Researcher in power electronics solid state devices from Oct/2016 to Nov/2017</CardText>
                </CardBody>
              </Card>
            </Row>
            <br/>
            <Row>
              <Card>
                <CardBody>
                  <Row>
                    <Col >
                      <Card>
                        <CardImg top width="10%" src={isep} alt="Card image cap" />
                      </Card>
                    </Col >
                  </Row>
                  <br/>
                  <CardText>Erasmus student from Fev/2016 to Aug/2016</CardText>
                </CardBody>
              </Card>
            </Row>
            <br/>
            <Row>
              <Card>
                <CardBody>
                  <Row>
                    <Col >
                      <Card>
                        <CardImg top width="10%" src={cnpq} alt="Card image cap" />
                      </Card>
                    </Col >
                  </Row>
                  <br/>
                  <CardText>Researcher In organic solar cells aimed thin films development from Jan/2014 to Jan/2016</CardText>
                </CardBody>
              </Card>
            </Row>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default App;
