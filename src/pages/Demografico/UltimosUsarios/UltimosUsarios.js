import React, { useContext } from 'react'
import BoxHeader from "../../../components/app-layout/box-layout/BoxHeader"
import DoughnutGraph from '../../../components/charts/DoughnutGraph'
import PercentItem from "../../../components/charts/PercentItem"
import { DemograficoContext } from '../context/DemograficoContext'

const UltimosUsarios = (props) => {
  const { demoData } = useContext(DemograficoContext)
  return (
    <div className="ultimosUsarios">
      <BoxHeader title={"Últimos usuarios conectados"} icon={"./icons/Reloj.svg"} id={"with-background"} className={"user-number"} statsDots={false} userNumber={40}/>
      <div className="flex user-wrapper">
        <div className="ultimos-usarios-container">
          <div className="flex usarios-item">
            <img src="./icons/user-icon.jpg" alt="" className="user-icon"/>
            <div className="flex user-details">
              <h5 className="user-name">Alejandro Lanza</h5>
              <p className="user-info">Conectado a través de facebook hace 18min</p>
            </div>
          </div>
          <div className="flex usarios-item">
            <img src="./icons/user-icon.jpg" alt="" className="user-icon"/>
            <div className="flex user-details">
              <h5 className="user-name">Alejandro Lanza</h5>
              <p className="user-info">Conectado a través de facebook hace 18min</p>
            </div>
          </div>
          <div className="flex usarios-item">
            <img src="./icons/user-icon.jpg" alt="" className="user-icon"/>
            <div className="flex user-details">
              <h5 className="user-name">Alejandro Lanza</h5>
              <p className="user-info">Conectado a través de facebook hace 18min</p>
            </div>
          </div>
          <div className="flex usarios-item">
            <img src="./icons/user-icon.jpg" alt="" className="user-icon"/>
            <div className="flex user-details">
              <h5 className="user-name">Alejandro Lanza</h5>
              <p className="user-info">Conectado a través de facebook hace 18min</p>
            </div>
          </div>
        </div>
        <div className="ultimos-users-graph flex">
          <div>
            <PercentItem id={"nuevos"} percentValue={"81%"} percentTitle={"NUEVOS"}/>
            <PercentItem id={"recurrentes"} percentValue={"19%"} percentTitle={"RECURRENTES"}/>
          </div>
          <div>
            <DoughnutGraph 
              data={demoData.ultimosUsariosData}
              insidePercent={"19%"}
              insideLabel={"USUARIO RECURRENTES"}
              width={290}
              height={290}  
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UltimosUsarios
