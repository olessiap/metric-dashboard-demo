import React, { Component } from 'react'

export class BoxTitle extends Component {
  render() {
    return (
      <div className="flex-center">
        <img src={this.props.icon} className= "box-icon" alt=""/>
        <p className="title">{this.props.title}</p>
      </div>
    )
  }
}

export default BoxTitle
