import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setCities } from '../actions';
import City from './city';

class CityList extends Component {

  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <ul className="cities col-3">
        { this.props.cities.map((city) => <City key={city.name} city={city} />) }
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