import React, { Component } from "react";
import { connect } from "react-redux";
import { removegrocerybyid } from "../actions";
class ShoppingBag extends Component {
  shoppingBagDisplay() {
    if (this.props.grocery.length > 0) {
      return (
        <ul className="list-group">
          {this.props.grocery.map((item) => {
            return (
              <li
                key={item.id}
                className="list-group-item"
                onClick={() => this.props.removegrocerybyid(item.id)}
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
      );
    } else {
      return (
        <ul className="list-group">
          <li className="list-group-item"> NO item in shopping bag yet</li>
        </ul>
      );
    }
  }
  render() {
    return (
      <div className="col-md-4 shopping-bag-bg">
        <h2 className="text-center">Shopping Bags</h2>
        {this.shoppingBagDisplay()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    grocery: state.ShoppingBagReducer,
  };
}

export default connect(mapStateToProps, { removegrocerybyid })(ShoppingBag);
