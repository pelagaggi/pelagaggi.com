import React, { Component } from 'react';
import CEM from './profile.png';
import { Alert,ListGroup,ListGroupItem, Row, Col ,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
class App extends Component {
    render() {
        const border_Style = {
            'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            'border-radius': '10%',
            'padding':'1vh',
            };
        return (
            <Col>
                <Card style={{
            marginLeft:"1%",
            marginRight:"1%",}}> 
                    <CardImg style={border_Style} src={CEM} alt="Card image cap" />
                    <CardBody style={{textAlign:"left"}}>
                      <CardTitle style={{textAlign:"left"}}>Technichian at Altran Portugal</CardTitle>
                      <CardSubtitle style={{margin:"1vh 1vh 1vh 1vh"}}>Industrial Eltrotecnic Master Student at 
                      <a href="http://portal3.ipb.pt/index.php/en/guiaects/degree-programmes/master-programmes-mestre-degree/course?cod_escola=3043&cod_curso=9572"> IPB</a></CardSubtitle>
                      <CardSubtitle style={{margin:"1vh 1vh 1vh 1vh"}}>Electronic Enginner bachelor student at 
                      <a href="http://www.cefet-rj.br/index.php/bacharelado-em-engenharia-eletronica"> CEFET/RJ</a></CardSubtitle>
                      <CardText>Born: 04 - August - 1994</CardText>
                        <Col>
                            <Row>
                                <Col>
                                    <Alert color="primary">
                                        Excel at:
                                    </Alert>
                                </Col>
                                <Col>
                                    <ListGroup>
                                        <ListGroupItem>NodeJS</ListGroupItem>
                                        <ListGroupItem>LoRaWAN</ListGroupItem>
                                        <ListGroupItem>VBA + Microsoft Visio</ListGroupItem>
                                    </ListGroup>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <Alert color="primary">
                                        Very good with:
                                    </Alert>
                                </Col>
                                <Col>
                                    <ListGroup>
                                        <ListGroupItem>SQL databases</ListGroupItem>
                                        <ListGroupItem>Distributed Systems</ListGroupItem>
                                        <ListGroupItem>Python</ListGroupItem>
                                        <ListGroupItem>Git version control</ListGroupItem>
                                        <ListGroupItem>HTML5</ListGroupItem>
                                        <ListGroupItem>Java</ListGroupItem>
                                        <ListGroupItem>ReactJS</ListGroupItem>
                                        <ListGroupItem>REST Integrations</ListGroupItem>
                                    </ListGroup>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <Alert color="primary">
                                        Have worked with:
                                    </Alert>
                                </Col>
                                <Col>
                                    <ListGroup>
                                        <ListGroupItem>CSS</ListGroupItem>
                                        <ListGroupItem>HTML5</ListGroupItem>
                                        <ListGroupItem>JQuery</ListGroupItem>
                                        <ListGroupItem>Bootstrap</ListGroupItem>
                                        <ListGroupItem>AWS Solutions</ListGroupItem>
                                        <ListGroupItem>Microcontrollers</ListGroupItem>
                                        <ListGroupItem>QT Creator</ListGroupItem>
                                        <ListGroupItem>C++</ListGroupItem>
                                        <ListGroupItem>C</ListGroupItem>
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Col>
                        <br/>
                        <div >
                            <Alert color="primary" style={{marginBottom:"2vh"}}>
                                Contacs:
                            </Alert>
                            <a style={{marginTop:"1vh",marginBottom:"2vh"}} href="mailto://alexandre@pelagaggi.com" style={border_Style}><Button color="primary">alexandre@pelagaggi.com</Button></a>
                            <a style={{marginTop:"1vh",marginBottom:"2vh"}} href="https://www.linkedin.com/in/alexandre-pelagaggi" style={border_Style}><Button color="primary"> Linkedin</Button></a>
                            <a style={{marginTop:"1vh",marginBottom:"2vh"}} href="https://github.com/pelagaggi" style={border_Style}><Button color="primary"> Github</Button></a>
                        </div>
                    </CardBody>
                </Card>
                
            </Col>
        )
    }
}
export default App;