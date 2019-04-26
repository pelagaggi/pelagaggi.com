import React, { Component } from 'react';
import {CEM} from '../images';
import { Container,Col,Row,Button } from 'reactstrap';
class App extends Component {
    render() {
        const border_Style = {
            width:"100%",
            'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            'border-radius': '10%',
            'padding':'1vh',
            };
        return (<Container>
            <Row>
                <h1>Alexandre Rodrigues Pelagaggi Nunes</h1>
            </Row>
            <Row>
                <Col>
                    <img style={border_Style} src={CEM} alt="Card image cap" />
                </Col>
                <Col>
                <ul>
                    <li>
                        <h5>Passionate developer</h5>
                    </li>
                    <br/>
                    <li>
                        <h5>Hungry for knowledge</h5>
                    </li>
                    <br/>
                    <li>
                        <h5>Hosts its own mail server because                    ¯\_(ツ)_/¯</h5>
                    </li>
                    <br/>
                    <li>
                        <h5>Industrial Eltrotecnic Master Student at
                        <a href="http://portal3.ipb.pt/index.php/en/guiaects/degree-programmes/master-programmes-mestre-degree/course?cod_escola=3043&cod_curso=9572"> IPB</a></h5>
                    </li>
                    <br/>
                    <li>
                        <h5>Performing dual degre program at<a href="http://www.cefet-rj.br/index.php/bacharelado-em-engenharia-eletronica"> CEFET/RJ</a></h5>
                    </li>
                </ul>
                </Col>
            </Row>
            <Row style={{marginBottom:"3vh"}}>
                <div style={{marginTop:"1vh"}}>
                    <Col><h5 style={{textAlign:"left"}} >Find this site on my    <a  target="_blank" rel="noopener noreferrer" href="https://github.com/pelagaggi" style={border_Style}><Button color="primary"> Github</Button></a></h5></Col>
                    <Col><h5 style={{textAlign:"left"}} >Give a Like on my       <a  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alexandre-pelagaggi" style={border_Style}><Button color="primary"> Linkedin</Button></a></h5></Col>
                    <Col><h5 style={{textAlign:"left"}} >Or send me a e-mail     <a  target="_blank" rel="noopener noreferrer" href="mailto://alexandre@pelagaggi.com" style={border_Style}><Button color="primary">alexandre@pelagaggi.com</Button></a></h5></Col>                    
                </div>
            </Row>
        </Container>
        )
    }
}
export default App;