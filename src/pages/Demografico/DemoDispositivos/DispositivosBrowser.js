import React, { useContext } from 'react'
import DoughnutGraph from "../../../components/charts/DoughnutGraph"
import { DemograficoContext } from '../context/DemograficoContext'


const DispositivosBrowser = props => {
  const { demoData } = useContext(DemograficoContext)
  return (
    <div className="flex dispo-item-wrapper">
      <div>
        <p className="dispo-title">Browser</p>
        <div className="flex-center">
          <div className="dot" id="dot-one"></div>
          <p className="markers dispo-markers">ANDROID</p>
        </div>
        <div className="flex-center">
          <div className="dot" id="dot-two"></div>
          <p className="markers dispo-markers">CHROME MOBI</p>
        </div>
        <div className="flex-center">
          <div className="dot" id="dot-three"></div>
          <p className="markers dispo-markers">MOBILE SAM</p>
        </div>
        <div className="flex-center">
          <div className="dot" id="dot-three"></div>
          <p className="markers dispo-markers">MICROSOFT</p>
        </div>
        <div className="flex-center">
          <div className="dot" id="dot-five"></div>
          <p className="markers dispo-markers">OTROS</p>
        </div>
      </div>
      <div className="dispo-graph">
        <DoughnutGraph 
          data={demoData.dispositivosBrowserData}
          insidePercent={"65%"}
          insideLabel={"ANDROID"}
          width={190}
          height={190}  
        />
      </div>
    </div>
  )
}

export default DispositivosBrowser
