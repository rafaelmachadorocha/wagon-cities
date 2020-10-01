import React, { Component } from "react";
import { connect } from "react-redux";

class ActiveCity extends Component {

  render() {
    if(this.props.activeCity) {
      console.log(this.props.activeCity.name)
      const url = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`;
      return (
        <div className="col-7 active-city">
          <h2>{this.props.activeCity.name}</h2>
          <p>{this.props.activeCity.address}</p>
          <img className="image-active-city" src={url}></img>
        </div>
      );
    } else {
      return (
        <div className="col-7 active-city">
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { 
    activeCity: state.clickedCity 
  };
} 

export default connect(mapStateToProps)(ActiveCity);