//-------------React and Redux
import React, { Component } from 'react';
import {connect} from 'react-redux';
//-------------UI
import { Button } from 'reactstrap';
import { skills } from '../images';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class Filter extends Component {
  render() {
    //let IconStyle={minWidth:"25vh",minHeight:"5vw", padding:"5% 5% 5% 5%"};
    let IconStyle={maxHeight:"5vh"};
    let skillslist = this.props.skills.map((item,index)=>{
      console.log(item);
      console.log(`skills[${item}]?\t${skills[item]?true:false}`);
      if(skills[item]){
        return<IconButton style={IconStyle}>
          <Tooltip  style={IconStyle} title={item}>
              <img style={IconStyle} src={skills[item]} alt={item} />
          </Tooltip>
        </IconButton>
      }
        return <IconButton style={IconStyle}>
        <Tooltip title={item}>
            <Button style={{width:"100%",height:"100%"}}>{item}</Button>
        </Tooltip>
      </IconButton>
    })
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <h3>Filter By Skill</h3>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {skillslist}
        </ExpansionPanelDetails>
      </ExpansionPanel>
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
