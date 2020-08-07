import React, { useContext, useEffect, useState } from 'react'
import Bienvenido from './Bienvenido/Bienvenido'
import Dispositivos from './Dispositivos/Dispositivos'
import Horarios from './Horarios/Horarios'
import Footer from '../../components/app-layout/Footer/Footer'
import Layout from "../../components/app-layout/Layout"
import MapAndHourlyConnections from "./Map/MapAndHourlyConnections"
import LoadingModal from "../../components/modals/LoadingModal"
import Logins from "./Logins/Logins"
import Stats from './Stats/Stats'
import WeekdayConnections from './WeekdayConnections/WeekdayConnections'
import ConnectionsPerDate from "./ConnectionsPerDate/ConnectionsPerDate"
import { DashboardContext } from '../../contexts/DashboardContext';
import Axios from 'axios'

import { domain } from "../../components/App/App"

const Dashboard = () => {
  const { globalData, dispatch } = useContext(DashboardContext)
  const [reloading, setReloading] = useState(false) //handles loading modal
  const [ showErrorMessage, setShowErrorMessage ] = useState(false) 
  
  let routersFromStorage = JSON.parse(localStorage.getItem("routers"))
  let fromDateFromStorage = JSON.parse(localStorage.getItem("fromDate"))
  let toDateFromStorage = JSON.parse(localStorage.getItem("toDate"))
  let checkedRouterIdsFromStorage = JSON.parse(localStorage.getItem("checkedRouterIds"))

  //makes a dashboardCall on each first render including refresh
  React.useEffect(() => {
    if(checkedRouterIdsFromStorage) {
      setReloading(true)
      Axios.post(domain + 'Dashboard/Data', {
        "UserId": globalData.loginData.userId && globalData.loginData.userId,
        "FromDate":fromDateFromStorage,
        "ToDate":toDateFromStorage,
        "RouterIds": checkedRouterIdsFromStorage != null ? checkedRouterIdsFromStorage.join(",") : "here"
      },
      {headers: { Authorization: `Bearer ${globalData.loginData.token}` }
      })
      .then((response) => {
        dispatch({ type:'TOGGLE_MODAL'})
        if(!globalData.cancelRequest) {
          dispatch({ type:'FETCH_SUCCESS_DASHBOARD', payload:response.data })
          setReloading(false)
        }
      }, (error) => {
        dispatch({ type:'FETCH_ERROR_DASHBOARD', })
        alert(error)
        setShowErrorMessage(true)
      })
    }
  }, [])
  
  //REALTIME MAP CALL every 1 minute
  React.useEffect(() => {
    if(globalData.dashboardData.LastUpdate){
        Axios.post(domain + 'Dashboard/RealTimeMap', {
          "RouterIds":JSON.parse(localStorage.getItem("checkedRouterIds")).join(",")
        },
        {headers: { Authorization: `Bearer ${globalData.loginData.token}` }
        })
        .then((response) => {
          if(!globalData.cancelRequest) {
            dispatch({ type:"FETCH_SUCCESS_MARKER_DATA", payload:response.data})
          }
        }, (error) => {
          alert(error)
        })
    }
  }, [globalData.dashboardData.LastUpdate])

  //set up local storage parameters when parameters change
  useEffect(() => {
    if(globalData.dateRange[0].startDate != null) {
      localStorage.setItem("fromDate", JSON.stringify(globalData.dateRange[0].startDate))
    } 
    if(globalData.dateRange[0].endDate != null) {
      localStorage.setItem("toDate", JSON.stringify(globalData.dateRange[0].endDate))
    } 
  // }, [globalData.RouterIds, globalData.dateRange[0].startDate, globalData.dateRange[0].endDate]) 
  }, [globalData.RouterIds, globalData.dateRange]) 

  return (
    <>
      <Layout hideExport={true} title={"Dashboard"}/>
        <div className="dashboard-wrapper">
          {globalData.toggleLoadingModal || reloading ? <LoadingModal dataLoadingModal={true} /> : null}
          <Bienvenido />
          <ConnectionsPerDate />
          <Stats />
          <MapAndHourlyConnections />
          <Horarios />
         <WeekdayConnections />
          <Logins />
          <Dispositivos />
          <Footer />
        </div>
    </>
  )
}

export default Dashboard
