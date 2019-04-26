import React, { Component } from 'react';
//import { Collapse, Row, Col ,Card, CardImg, CardText, CardBody} from 'reactstrap';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import {Row,Col,Container} from 'reactstrap';
import { TimelineItem }  from 'vertical-timeline-component-for-react';

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
        const { classes } = this.props;
        const border_Style = {
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            borderRadius: '7%',
            padding:'5px',
            width:"100%",
            maxWidth:"400px",
            display:"inline"
            
        };
        return (
            <TimelineItem
            key={this.props.key}
            dateText={this.props.dateText}
            style={{ color: "#4d70ad" }}
            dateInnerStyle={{ background: '#4d70ad'}}>
                <Card className={classes.card} >
            
                    <CardContent >
                        <Container style={{width:"100%"}}>
                            <Row style={{marginBottom:"2vh"}}>
                                <Col>
                                <img style={border_Style} src={this.props.logo} alt="Live from space album cover"/>
                                <h5 style={{marginLeft:"1vw",display:"inline"}}>
                                    {this.props.intro}
                                </h5>
                                </Col>
                            </Row>
                            <Row>
                                <p style={{"white-space": "pre-line","text-align":"justify"}}>{this.props.description}</p>
                            </Row>
                        </Container>            
                    </CardContent>
                </Card>
            </TimelineItem>
    )
    }
}
const styles = theme => ({
    card: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  });
export default withStyles(styles, { withTheme: true })(Experience);