import React, { useContext } from 'react'
import BoxHeader from "../../../components/app-layout/box-layout/BoxHeader"
import LineGraph from '../../../components/charts/LineGraph'
import { DashboardContext } from '../../../contexts/DashboardContext';
import NoDataMessage from '../../../components/app-layout/box-layout/NoDataMessage'

const WeekdayConnections = () => {
  const { globalData } = useContext(DashboardContext)
  let noData = globalData.dashboardData.diasDeConexion && globalData.dashboardData.diasDeConexion.length === 0 || globalData.dashboardData.diasDeConexion === undefined

  const daysArr = ["DÓMINGO", "LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO"]
  
  return (
    <div className="box dayConnection demoDayConnection">
      <BoxHeader title={"Conexiones por dia"} icon={"./icons/Reloj.svg"} className={"title-wrapper"} id={"with-background"}/>
      <div className={noData ? "no-data-wrapper" : "box-content-wrapper"}>
        {noData ? <NoDataMessage /> : ( 
        <div className="day-graph" style={{marginTop: '15px'}}>
          <LineGraph data={globalData.weekdayConnectionsData}/>
        </div>
        )}
      </div>
    </div>
  )
} 

export default WeekdayConnections
