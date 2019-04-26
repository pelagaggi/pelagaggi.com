import React, { Component } from 'react';
import {Spacee_week} from '../images';
import { Container,Col,Row,Button } from 'reactstrap';
class App extends Component {
    render() {
        const border_Style = {
            width:"100%",
            'border-radius': '5%',
            };
        return (<Container>
            <Row>
                <h1 style={{textAlign:"left",marginLeft:"1vw"}}>Alexandre Rodrigues Pelagaggi Nunes</h1>
            </Row>
            <Row>
                <Col>
                    <br/>
                    <img style={border_Style} src={Spacee_week} alt="Card cap" />
                </Col>
                <Col>
                <br/>
                    <h5 style={{textAlign:"left"}}>Passionate developer</h5>
                    <br/>
                    <h5 style={{textAlign:"left"}}>Hungry for knowledge</h5>
                    <br/>
                    <h5 style={{textAlign:"left"}}>Hosts its own mail server because                    ¯\_(ツ)_/¯</h5>
                    <br/>
                    <h5 style={{textAlign:"left"}}> Industrial Eltrotecnic Master Student at
                        <a href="http://portal3.ipb.pt/index.php/en/guiaects/degree-programmes/master-programmes-mestre-degree/course?cod_escola=3043&cod_curso=9572"> IPB</a></h5>
                    <br/>
                    <h5 style={{textAlign:"left"}} >Performing dual degre program at<a href="http://www.cefet-rj.br/index.php/bacharelado-em-engenharia-eletronica"> CEFET/RJ</a></h5>
                    <br/><br/><br/>
                    <h6 style={{textAlign:"left"}} >Find this site on my    <a  target="_blank" rel="noopener noreferrer" href="https://github.com/pelagaggi" style={border_Style}>                     Github                 </a></h6>
                    <h6 style={{textAlign:"left"}} >Give a Like on my       <a  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alexandre-pelagaggi" style={border_Style}>  Linkedin               </a></h6>
                    <h6 style={{textAlign:"left"}} >Or send me an e-mail     <a  target="_blank" rel="noopener noreferrer" href="mailto://alexandre@pelagaggi.com" style={border_Style}>               alexandre@pelagaggi.com </a></h6>
                </Col>
            </Row>
            <Row style={{marginBottom:"3vh"}}>
                <div style={{marginTop:"1vh"}}>                
                </div>
            </Row>
        </Container>
        )
    }
}
export default App;