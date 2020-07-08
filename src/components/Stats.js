import React, { Component } from "react";
import { connect } from "react-redux";

class Stats extends Component {
  cost() {
    let totalcost = 0;
    this.props.grocery.forEach((item) => (totalcost += item.cost));
    return totalcost;
  }
  calaroies() {
    let totalcalories = 0;
    this.props.grocery.forEach((item) => (totalcalories += item.calories));
    return totalcalories;
  }
  weight() {
    let totalweight = 0;
    this.props.grocery.forEach((item) => (totalweight += item.weight));
    return totalweight;
  }
  render() {
    return (
      <div className="col-md-3 stats-bg">
        <h2 className="text-center">Stats</h2>
        <ul className="list-group">
          <li className="list-group-item">Cost {this.cost()} $</li>
          <li className="list-group-item">Calaroies {this.calaroies()} Kal</li>
          <li className="list-group-item">Weight {this.weight()} mg</li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    grocery: state.ShoppingBagReducer,
  };
}

export default connect(mapStateToProps, null)(Stats);
