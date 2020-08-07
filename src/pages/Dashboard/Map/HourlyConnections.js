import React, {useContext, useState } from 'react'
import BoxHeader from '../../../components/app-layout/box-layout/BoxHeader'
import HotspotItem from './HotspotItem'
import { DashboardContext } from '../../../contexts/DashboardContext';


const HourlyConnections = props => {
  const { globalData, dispatch } = useContext(DashboardContext)

  //old logic
  const handleSearch = e => {
    let currentList = []
    let newList = []
    if(e.target.value !== "") {
      currentList = globalData.checkedBoxes ? globalData.checkedBoxes : null
      newList = currentList.filter(item => {
        const lc = item.Hotspot.toLowerCase()
        const filter = e.target.value.toLowerCase()
        return lc.includes(filter)
      })
    } else {
      newList = globalData.checkedBoxes
    }
    dispatch({ type: "UPDATE_SEARCH_IN_MAP", payload: newList })
  }

  // let hotspotsFromRouter = globalData.checkedBoxes.map((item, i) => {
  //   return item.Hotspot
  // })

  // let hotspotsFromSearch = globalData.searchedContentMap.map((item) => {
  //   return item.Hotspot
  // })
  // let hotspotItemsFromSearch = hotspotsFromSearch.map((searchItem, index) => {
  //   return <HotspotItem hotspot={searchItem} key={index} />
  // })
  
  return (
    <div className="hour-connection-side">
      <BoxHeader title={"Conexiones en la ultima hora"} statsDots={false} className={"title-wrapper"} />
      <div className="map-search">
        <span>
          <img className="box-icon" src="./icons/lupa.svg"/>
          <input type="text" className="search" placeholder="Buscar hotspot" onChange={handleSearch}/>
        </span>
      </div>
      <div className="scroll-wrapper">
        {/* {globalData.searchedContentMap.length > 0 ? hotspotItemsFromSearch : <HotspotItem /> } */}
          <HotspotItem /> 
      </div>
    </div>  
  )
}
export default HourlyConnections