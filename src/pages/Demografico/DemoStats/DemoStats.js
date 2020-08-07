import React, { Component } from 'react'

export class DemoStats extends Component {
  render() {
    return (
      <div className="demo-stats">
          <div className="stat-third-container">
          <div className="stat-title">CONEXIONES</div>
            <div className="stat-third-center">
                <div className="stat-wrapper">
                  <div className="stat-value">1.851</div>
                  <div className="demo-stat-footer">TOTALES</div>
                </div>
                <div className="stat-wrapper">
                  <div className="stat-value">1.638</div>
                  <div className="demo-stat-footer">ÚNICAS</div>
                </div>
            </div>
          </div>
          <div className="stat-half-container">
          <div className="stat-title">MÉTODO DE LOGIN</div>
            <div className="stat-third-center">
                <div className="stat-wrapper">
                  <div className="stat-value">635</div>
                  <div className="demo-stat-footer">FACEBOOK</div>
                </div>
                <div className="stat-wrapper">
                  <div className="stat-value">167</div>
                  <div className="demo-stat-footer">TWITTER</div>
                </div>
                <div className="stat-wrapper">
                  <div className="stat-value">337</div>
                  <div className="demo-stat-footer">EMAIL</div>
                </div>
                <div className="stat-wrapper">
                  <div className="stat-value">723</div>
                  <div className="demo-stat-footer">INSTAGRAM</div>
                </div>
                <div className="stat-wrapper">
                  <div className="stat-value">89</div>
                  <div className="demo-stat-footer">LINKEDIN</div>
                </div>

            </div>
          </div>
          <div className="stat-third-container">
          <div className="stat-title">USUARIOS</div>
            <div className="stat-third-center">
                <div className="stat-wrapper">
                  <div className="stat-value">1200</div>
                  <div className="demo-stat-footer">TOTALES</div>
                </div>
                <div className="stat-wrapper">
                  <div className="stat-value">1100</div>
                  <div className="demo-stat-footer">ÚNICAS</div>
                </div>
            </div>
          </div>
            
      </div>
    )
  }
}

export default DemoStats
