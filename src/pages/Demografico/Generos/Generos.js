import React, { useContext } from 'react'
import BoxHeader from "../../../components/app-layout/box-layout/BoxHeader"
import DoughnutGraph from '../../../components/charts/DoughnutGraph'
import BarGraph from '../../../components/charts/BarGraph'
import { DemograficoContext } from "../context/DemograficoContext"
// import { connect } from "react-redux"
 
const Generos = props => {
  const { demoData, dispatchDemoData } = useContext(DemograficoContext)
  return (
    <div className="generos">
        <BoxHeader title={"Genero de usarios"} icon={"./icons/Reloj.svg"} id={"with-background"} className={"title-wrapper"} statsDots={false} statsDotsGeneros={true} />
        <div className="flex">
          <div className="generos-left-side">
            <div className="flex total-wrapper">
              <p>Total de usuarios</p>
              <h1>5.714</h1>
            </div>
            <div className="flex circle-spacing">
              <div className="d-wrapper">
                <DoughnutGraph 
                  data={demoData.generosMujeresData}
                  insidePercent={"58%"}
                  width={170}
                  height={170}  
                />
                <div className="flex g-flex">
                  <p className="genero-number">3.141</p>
                  <h6 className="genero-label">MUJERES</h6>
                </div>
              </div>
              <div className="d-wrapper">
                <DoughnutGraph 
                  data={demoData.generosHombresData}
                  insidePercent={"40%"}
                  width={170}
                  height={170}  
                />
                <div className="flex g-flex">
                  <p className="genero-number">2.714</p>
                  <h6 className="genero-label">HOMBRES</h6>
                </div>
              </div>
              <div className="d-wrapper">
                <DoughnutGraph 
                  data={demoData.generosOtrosData}
                  insidePercent={"2%"}
                  width={170}
                  height={170}  
                />
                <div className="flex g-flex">
                  <p className="genero-number">1.310</p>
                  <h6 className="genero-label">N/S</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="generos-right-side">
            <BarGraph 
              data={demoData.generosBarData}
              height={300} 
            />
          </div>
        </div>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     generosBarData:state.chartJSReducer.generosBarData,
//     generosMujeresData:state.chartJSReducer.generosMujeresData,
//     generosHombresData:state.chartJSReducer.generosHombresData,
//     generosOtrosData:state.chartJSReducer.generosOtrosData
//   }
// }

// export default connect(mapStateToProps)(Generos)
export default Generos
