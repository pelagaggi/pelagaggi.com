import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import { Row, Col, Container } from 'reactstrap';
import { TimelineItem } from 'vertical-timeline-component-for-react';
import { Typography } from '@material-ui/core';

const Experience = ({ classes, date, logo, intro, description, entityUrl }) => {
  return (
    <TimelineItem
      dateText={date}
      style={{ color: "#4d70ad" }}
      dateInnerStyle={{ background: '#4d70ad' }}>
      <Card className={classes.card} >
        <Container className={classes.container}>
          <Row >
            <Col className='experience-title-col'>
              <a href={entityUrl} target='_blank' alt={`logo_`} ><div className='experience-image-logo' style={{
                backgroundImage: `url("${logo}")`
              }} />
              </a>
              <Typography className={`experience-title ${classes.title}`} variant='body1' children={intro} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Typography className='experience-content' variant='body2' >
                {description.map((paragraph,key)=>(
                  <span key={key} className='experience-paragraph'>{paragraph}</span>
                ))}
              </Typography>
            </Col>
          </Row>
        </Container>
      </Card>
    </TimelineItem>
  )
}

export default withStyles(theme=> ({
  card: {
    display: 'flex',
    padding:'16px 8px',
    minWidth:'65vw',
    [theme.breakpoints.up('sm')]: {
      minWidth:'unset',
      padding:'16px',
    },
  },
  container:{
    paddingLeft:'0',
    paddingRight:'0',
  },
  title:{
    float:'left',
    [theme.breakpoints.up('md')]: {
      float:'inherit',
    },
  }
}))(Experience);