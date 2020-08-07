import React, { useContext,  useState } from 'react'
import BoxHeader from "../../../components/app-layout/box-layout/BoxHeader"
import { DashboardContext } from '../../../contexts/DashboardContext';
import NoDataMessage from '../../../components/app-layout/box-layout/NoDataMessage';
import { UncontrolledTooltip } from 'reactstrap';


const ToolTipContent = props => {
  return (
    <>
      {props.text}
    </>
  )
}

const Logins = () => {
  const { globalData } = useContext(DashboardContext)
  // const [tooltipOpen, setTooltipOpen] = useState(false);
  
  // const toggle = () => setTooltipOpen(!tooltipOpen);

  let noData = globalData.dashboardData.metodoLogins && globalData.dashboardData.metodoLogins.length === 0 || globalData.dashboardData.metodoLogins === undefined
  return (
    <div className="box logins">
      <BoxHeader title={"Metodo de Login"} icon={"./icons/Metodo_Login.svg"} className={"title-wrapper"} id={"with-background"} statsDots={false}/>
      <div className={noData ? "no-data-wrapper" : "box-content-wrapper"}>
      {noData ? <NoDataMessage /> : ( 
        globalData.dashboardData.metodoLogins.map((item, index) => (
          <div className="login-item">
              <>
              <img className="login-icon" src={`./icons/${item.metodo}.svg`} alt="logoA"/>
              <div className="item-name">{item.metodo.toUpperCase()}</div>
              <div className="progress-bar">
                <div className="activeBar" id="toolTip" style={{width:Math.round((item.logins * 100) / globalData.dashboardData.loginsTotales) + '%' }}></div>
                <div className="notActiveBar" style={{width: 100 - Math.round((item.logins * 100) / globalData.dashboardData.loginsTotales) + '%'}}></div>
              </div>
              <UncontrolledTooltip placement="top" target="toolTip">
                <ToolTipContent text={item.logins} />
              </UncontrolledTooltip>
              <div className="login-percent" style={{paddingLeft: Math.round((item.logins * 100) / globalData.dashboardData.loginsTotales) < 10 && Math.round((item.logins * 100) / globalData.dashboardData.loginsTotales) !== 0 ? '12px' : '0'}}> {Math.round((item.logins * 100) / globalData.dashboardData.loginsTotales) == 0 ? '< 1' : Math.round((item.logins * 100) / globalData.dashboardData.loginsTotales) } %</div>
            </>
          </div>
        ))
      )}
      </div>
    </div>
  )
}
export default Logins
