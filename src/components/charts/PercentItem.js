import React, { Component } from "react";

export class PercentItem extends Component {
  render() {
    return (
      <div className="percent-item">
        <div className="flex">
          <div className="dot" id={this.props.id}></div>
          <h5 className="percent-num">{this.props.percentValue}</h5>
        </div>
        <p className="percent-title">{this.props.percentTitle}</p>
      </div>
    )
  }
}

export default PercentItem;
