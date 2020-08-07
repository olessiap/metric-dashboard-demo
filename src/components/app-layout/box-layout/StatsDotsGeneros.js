import React, { Component } from 'react'

export class StatsDotsGeneros extends Component {
  render() {
    if(this.props.statsDotsGeneros) {
      return (
        <div className="flex-center">
          <div className="dot" id="mujer-dot"></div>
          <p className="markers">MUJERES</p>
          <div className="dot"></div>
          <p className="markers">HOMBRES</p>
          <div className="dot" id="ns-dot"></div>
          <p className="markers">N/S</p>
        </div>
      )
    }
    return null
  }
}

export default StatsDotsGeneros
