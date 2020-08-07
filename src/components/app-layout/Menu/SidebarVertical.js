import React, {useContext} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { DashboardContext } from '../../../contexts/DashboardContext';

const SidebarVertical = () => {
  const {globalData, dispatch} = useContext(DashboardContext)
  return(
    <ul className="sidebarV">
      <li><NavLink to="/dashboard"><img src="./icons/Icon_1-claro.svg" alt=""/></NavLink></li>
      <li><NavLink to='/demografico'><img src="./icons/Icon_2-claro.svg" alt=""/></NavLink></li>
      <li><NavLink to='/conexiones'><img src="./icons/Icon_4-claro.svg" alt=""/></NavLink></li>
      <li><NavLink to='hotspots'><img src="./icons/Icon_5-claro.svg" alt=""/></NavLink></li>
      <li><NavLink to='/monitoreo'><img  src="./icons/Icon_4-claro.svg" alt=""/></NavLink></li>
      <li><NavLink to='/campanas'><img src="./icons/Icon_3-claro.svg" alt=""/></NavLink></li>
      <li><img src="./icons/Icon_6-claro.svg" alt=""/></li>
      <li onClick={() => dispatch({type:'LOG_OUT'})}><Link to="/"><img src="./icons/Icon_7-claro.svg" alt=""/></Link></li>
    </ul>
  )
}

export default SidebarVertical 