import React, { Component } from 'react';
import './Experience.css';
import { Collapse, Row, Col ,Card, CardImg, CardText, CardBody} from 'reactstrap';
class Experience extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    render() {
        const border_Style = {
            'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            'border-radius': '7%',
            'padding':'20px'
        };
        const Card_Style = {
            'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            'border-radius': '1%',
            //'background-color': 'beige',
            //'background-color': '#f2ecc6',
            'padding':'3px',
            'cursor': 'pointer'
        };
        
        const In_Style = {
            'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            'border-radius': '5%',
            //'background-color': 'beige',
            'background-color': '#f2ecc6',
            'margin-bottom': '15px',
            'padding':'3px'
        };
        return (
            <div>
                <Row className='hover' onClick={this.toggle}>
                <Card style ={Card_Style}>
                    <CardBody>
                    <Row>
                        <Col >
                        <Card>
                            <CardImg style ={border_Style} top width="10%" src={this.props.logo} alt="Card image cap" />
                        </Card>
                        </Col >
                    </Row>
                    <br/>
                    <CardText>{this.props.intro}</CardText>
                    </CardBody>
                </Card>
                </Row>
                <br/>
                <Collapse isOpen={this.state.collapse}>
                  <Card style={In_Style}>
                    <CardBody>
                    {this.props.description}
                    </CardBody>
                  </Card>
                </Collapse>
            </div>
        )
    }
}
export default Experience;