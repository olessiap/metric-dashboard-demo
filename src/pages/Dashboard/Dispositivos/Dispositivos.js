import React, { useContext } from 'react'
import { connect } from "react-redux"
import BoxHeader from "../../../components/app-layout/box-layout/BoxHeader"
import DoughnutGraph from "../../../components/charts/DoughnutGraph"
import { DashboardContext } from '../../../contexts/DashboardContext';
import NoDataMessage from '../../../components/app-layout/box-layout/NoDataMessage'


const Dispositivos = props => {
  const { globalData } = useContext(DashboardContext)
  let noData = globalData.dashboardData.dispositivos && globalData.dashboardData.dispositivos.length === 0 || globalData.dashboardData.dispositivos === undefined
  let colors = ["#85d0f3", "#229fda", "#0a519f", "#878a8d", "grey"]
  let colorId = colors.map((color) => {
   return color 
  })
  return (
    <div className="box dispositivos">
      <BoxHeader title={"Dispositivos"} icon={"./icons/Dispositivos.svg"} className={"title-wrapper"} id={"with-background"} statsDots={false}/>
      <div className={noData ? "no-data-wrapper" : "box-content-wrapper flex"}>
      {noData ? <NoDataMessage /> : ( 
        <>
        <div className="device-side">
          {globalData.dashboardData.dispositivos.map((item, index) => (
            <div className="device-item">
                <>
                <div className="dot" id={item.dispositivo}></div>
                <div className="item-name">{item.dispositivo.toUpperCase()}</div>
                </>
          </div>
          ))}
        </div>
        <div className="graph-side">
          <DoughnutGraph
            data={globalData.dispositivosData}
            insidePercent={globalData.dashboardData.dispositivos.length !== 0 ? Math.round((globalData.dashboardData.dispositivos[0].conexiones * 100) / globalData.dashboardData.loginsTotales) + "%" : null} 
            insideLabel={globalData.dashboardData.dispositivos.length !== 0 ? globalData.dashboardData.dispositivos[0].dispositivo.toUpperCase() : null }
            width={220}
            height={220}
          />
        </div>
        </>
      )}
      </div>
    </div>
  )
}

export default Dispositivos
