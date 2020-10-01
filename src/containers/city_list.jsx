import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setCities } from '../actions';

class CityList extends Component {

  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <ul className="cities col-3">
          {this.props.cities.map(city => <li className="list-group-item" key={city.name}>{city.name}</li>)}
      </ul>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
  //this function makes the action avaiable in my container
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CityList);