import React, { useContext } from 'react'
import { DashboardContext } from '../../../contexts/DashboardContext';

const Stats = () => {
  const { globalData } = useContext(DashboardContext)
  
  const numberWithCommas = x => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
  }
  return(
    <div className="box stats">
      <div className="stats-wrapper">
        <p className="stats-title">CONEXIONES</p>
        <div className="stats-data">
          <h1>{globalData.dashboardData.conexionesTotales ? numberWithCommas(globalData.dashboardData.conexionesTotales) : "0"}</h1>
          <p className="stats-subtitle">TOTALES</p>
        </div>
        <div className="stats-data">
          <h1>{globalData.dashboardData.conexionesUnicas ? numberWithCommas(globalData.dashboardData.conexionesUnicas) : "0"}</h1>
          <p className="stats-subtitle">UNICAS</p>
        </div>
      </div>
      <div id="stats-border"></div>
      <div className="stats-wrapper">
        <p className="stats-title">LOGINS</p>
        <div className="stats-data">
          <h1>{globalData.dashboardData.loginsTotales ? numberWithCommas(globalData.dashboardData.loginsTotales) : "0"}</h1>
          <p className="stats-subtitle">TOTALES</p>
        </div>
        <div className="stats-data">
          <h1>{globalData.dashboardData.loginsUnicos ? numberWithCommas(globalData.dashboardData.loginsUnicos) : "0"}</h1>
          <p className="stats-subtitle">UNICOS</p>
        </div>
      </div>
    </div>
  )
}

export default Stats