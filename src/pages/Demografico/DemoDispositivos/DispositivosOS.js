import React, { useContext } from 'react'
import DoughnutGraph from '../../../components/charts/DoughnutGraph'
import { DemograficoContext } from '../context/DemograficoContext'


const DispositivosOS = props => {
  const { demoData } = useContext(DemograficoContext)
  return (
    <div className="flex dispo-item-wrapper">
      <div>
        <p className="dispo-title">Sistemas operativos</p>
        <div className="flex-center">
          <div className="dot" id="dot-one"></div>
          <p className="markers dispo-markers">ANDROID</p>
        </div>
        <div className="flex-center">
          <div className="dot" id="dot-two"></div>
          <p className="markers dispo-markers">IOS</p>
        </div>
        <div className="flex-center">
          <div className="dot" id="dot-three"></div>
          <p className="markers dispo-markers">WINDOWS</p>
        </div>
      </div>
      <div className="dispo-graph">
      <DoughnutGraph 
        data={demoData.dispositivosOSData} 
        insidePercent={"47%"}
        insideLabel={"ANDROID"}
        width={190}
        height={190}  
      />
      </div>
    </div>
  )
}

export default DispositivosOS
