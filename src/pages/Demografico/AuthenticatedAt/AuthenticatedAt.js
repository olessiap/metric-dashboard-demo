import React, { useContext } from 'react'
import BoxHeader from "../../../components/app-layout/box-layout/BoxHeader"
import PercentItem from '../../../components/charts/PercentItem'
import DoughnutGraph from '../../../components/charts/DoughnutGraph'
import BarGraph from '../../../components/charts/BarGraph'
import { DemograficoContext } from '../context/DemograficoContext'

const AuthenticatedAt = props => {
  const { demoData } = useContext(DemograficoContext)
  return (
    <div className="authenticatedAt">
      <BoxHeader title={"Métodos de autenticación"} icon={"./icons/Reloj.svg"} id={"with-background"} className={"title-wrapper"} statsDots={false} />
      <div className="flex">
        <div className="left-side">
          <PercentItem id={"email"} percentValue={"43%"} percentTitle={"EMAIL"} />
          <PercentItem id={"facebook"} percentValue={"30%"} percentTitle={"FACEBOOK"} />
          <PercentItem id={"twitter"} percentValue={"27%"} percentTitle={"TWITTER"} />
          <PercentItem id={"linkedin"} percentValue={"0%"} percentTitle={"LINKEDIN"} />
          <PercentItem id={"otro"} percentValue={"0%"} percentTitle={"OTRO"} />
        </div>
        <div className="auth-wrapper">
          <DoughnutGraph 
            data={demoData.authenticatedAtMethodData}
            insidePercent={"43%"}
            insideLabel={"EMAIL"}
            width={290}
            height={290}  
            />
        </div>
        <div className="right-side">
          <div>
            <BarGraph 
                data={demoData.authenticatedAtEdadesData}    
            />
          </div>
          <div>
            <BarGraph 
              data={demoData.authenticatedAtGenerosData}    
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthenticatedAt
