import React, {useContext } from 'react'
import { DashboardContext } from '../../../contexts/DashboardContext';

const HotspotItem = () =>  {
  const { globalData, dispatch } = useContext(DashboardContext)
    //grab all the individual routers
  let rtrs2 = globalData.loginData && globalData.loginData.routersInfo.reduce((accumulator, routerinfo) => {
    if(!accumulator)
        accumulator = [];
    return accumulator.concat(routerinfo.routers);
  }, 0);
  
  return (
    <>
    {globalData.markerData && globalData.markerData.length > 0 && (
      globalData.markerData.map((marker, index) => (
        <div className="connection-wrapper">
          <img src="./icons/Icon_5-claro.svg" alt="icon" className="connection-icon"/>
          <div className="connection-details">
            <p className="connection-name">{rtrs2.find(r => r.Id == marker.RouterId).Hotspot}</p> 
            <p className="total-connections">{marker.Conexiones} conexiones</p>
          </div>
        </div> 
        )
      ))}
    </>
  )
}

export default HotspotItem
