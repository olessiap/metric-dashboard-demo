import React, { Component } from 'react'

export class StatsDots extends Component {
  render() {
    if(this.props.statsDots !== false) {
      return (
        <div className="flex-center">
          <div className="dot"></div>
          <p className="markers">CONEXIONES</p>
          <div className="dot"></div>
          <p className="markers">LOGINS</p>
        </div>
      )
    }
    return null
  }
}

export default StatsDots
