import React, { Component } from "react";
import { connect } from "react-redux";
import { addgrocerybyid } from "../actions";

class Grocery extends Component {
  render() {
    return (
      <div className="col-md-4 grocery-bg">
        <h2 className="text-center">Grocery</h2>
        <ul className="list-group">
          {this.props.grocery.map((item) => {
            return (
              <li
                key={item.id}
                className="list-group-item"
                onClick={() => this.props.addgrocerybyid(item.id)}
              >
                <b>{item.name}</b> -
                <span className="badge badge-primary"> {item.cost} &</span>-
                <span className="badge badge-secondary">
                  {item.calories} Cal
                </span>
                - <span className="badge badge-info"> {item.weight} mg</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    grocery: state.grocery,
  };
}

export default connect(mapStateToProps, { addgrocerybyid })(Grocery);
