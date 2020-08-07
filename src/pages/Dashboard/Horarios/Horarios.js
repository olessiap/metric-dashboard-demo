import React, { useContext } from 'react'
import BoxHeader from '../../../components/app-layout/box-layout/BoxHeader'
import StackedBarHorarios from '../../../components/charts/StackedBarHorarios'
import { DashboardContext } from '../../../contexts/DashboardContext';
import NoDataMessage from '../../../components/app-layout/box-layout/NoDataMessage'

const Horarios = () => {
  const { globalData } = useContext(DashboardContext)
  let noData = globalData.dashboardData.horaDeConexion && globalData.dashboardData.horaDeConexion.length === 0 || globalData.dashboardData.horaDeConexion === undefined
  return (
    <div className="box horarios">
        <BoxHeader title={"Horarios de Conexiones"} icon={"./icons/Reloj.svg"} className={"title-wrapper"} id={"with-background"}/>
        <div className={noData ? "no-data-wrapper" : "box-content-wrapper"}>
        {noData ? <NoDataMessage /> : ( 
          <div className="horarios-graph">
            <StackedBarHorarios data={globalData.horariosBarData}/>
          </div>
        )}
        </div>
    </div>
  )
}

export default Horarios
