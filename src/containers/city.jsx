import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { clickCity } from '../actions';

class City extends Component {

      handleClick = () => {
        this.props.click(this.props.city);
      }
  
      render () {
      let classes = "list-group-item";
      if (this.props.city === this.props.clickedCity) {
        classes += " clicked";
      }
      return (
        <li className={classes} onClick={this.handleClick}>
          {this.props.city.name}
        </li>  
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { click: clickCity },
    dispatch
  );
  //this function makes the action avaiable in my container
}

function mapStateToProps(state) {
  return {
    clickedCity: state.clickedCity
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(City);