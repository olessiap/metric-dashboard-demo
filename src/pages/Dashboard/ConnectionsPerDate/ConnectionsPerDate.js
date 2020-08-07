import React, { useContext } from 'react'
import BoxHeader from "../../../components/app-layout/box-layout/BoxHeader"
import LineGraph from "../../../components/charts/LineGraph"
import { DashboardContext } from '../../../contexts/DashboardContext';
import NoDataMessage from '../../../components/app-layout/box-layout/NoDataMessage';

const ConnectionsPerDate = ({fromCampaigns}) => {
  const { globalData } = useContext(DashboardContext)
  let noData = globalData.dashboardData.conexionesPorFecha && globalData.dashboardData.conexionesPorFecha.length === 0 || globalData.dashboardData.conexionesPorFecha === undefined
  return (
    <div className={fromCampaigns ? "connectionsPerDate" : "box connectionsPerDate"}>
      <BoxHeader title={fromCampaigns ? null : "Conexiones por fecha"} icon={fromCampaigns ? null : "./icons/Conexion.svg"} className="title-wrapper"/>
      <div className={noData ? "no-data-wrapper" : "box-content-wrapper"}>
        {noData ? <NoDataMessage /> : ( 
          <LineGraph data={globalData.connectionsPerDateData} />  
        )}
      </div>
    </div>
  )
}

export default ConnectionsPerDate