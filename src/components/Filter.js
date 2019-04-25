//-------------React and Redux
import React, { Component } from 'react';
import {connect} from 'react-redux';
//-------------UI
import { Container, Row,Col,Button } from 'reactstrap';


class Filter extends Component {
  render() {
    let skillslist = this.props.skills.map((item,index)=>{
        return <Col>
                <Button>{item}</Button>
            </Col>
    })
    return (
        <Container>
            <Row>
                {skillslist}
            </Row>
        </Container>
    );
  }
}
function mapStateToProps (state,props){
  return{
    filterlist: state.filterlist,
	skills:state.skills
  };
}
function mapDispacherToProps (dispatch){
  return{
  }
}

export default connect(mapStateToProps,mapDispacherToProps)(Filter);
