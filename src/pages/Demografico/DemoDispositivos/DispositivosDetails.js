import React, { useContext} from 'react'
import DoughnutGraph from '../../../components/charts/DoughnutGraph'
import { DemograficoContext } from '../context/DemograficoContext'

const DispositivosDetails = props => {
  const { demoData } = useContext(DemograficoContext)
  return (
    <div className="flex dispo-item-wrapper">
      <div>
        <p className="dispo-title">Dispositivos</p>
        <div className="flex-center">
          <div className="dot" id="dot-one"></div>
          <p className="markers dispo-markers">SMARTPHONES</p>
        </div>
        <div className="flex-center">
          <div className="dot" id="dot-two"></div>
          <p className="markers dispo-markers">TABLETS</p>
        </div>
        <div className="flex-center">
          <div className="dot" id="dot-three"></div>
          <p className="markers dispo-markers">PC/MAC</p>
        </div>
      </div>
      <div className="dispo-graph">
        <DoughnutGraph 
          data={demoData.dispositivosData}
          insidePercent={"78%"}
          insideLabel={"SMARTPHONES"}
          width={190}
          height={190}  
        />
      </div>
    </div>
  )
}

export default DispositivosDetails
