import React,  { useContext, useEffect, useState } from 'react'
import Layout from '../../components/app-layout/Layout'
import Footer from "../../components/app-layout/Footer/Footer"
import conexionesData from "./conexiones-data"
import { DashboardContext } from "../../contexts/DashboardContext"
import { MonitoreoContext } from "../../pages/Monitoreo/context/MonitoreoContext"
import MaterialTable from 'material-table'

function Conexiones() {
  const { monData, dispatchMonData } = useContext(MonitoreoContext)
  const { globalData, dispatch } = useContext(DashboardContext)
  const [columns, setColumns] = React.useState({
    columns: [
      { title: 'HORA Y FECHA', field: 'horaYFecha', filtering: false },

      { title: 'ID', field: 'id', filtering: false },
      { title: 'NOMBRE', field: 'nombre', filtering: false },
      { title: 'LOGIN', 
        field: 'login',  
        lookup: { 1: 'email', 12: "phone", 3: "twitter" }, 
      },
      { title: 'HOTSPOT', field: 'hotspot', filtering: false },
      { title: 'UBICACIÓN', field: 'ubicacion', filtering: false }
    ],
    showModal: false
  });
  
  React.useEffect(() => {
    let routerIds = JSON.parse(localStorage.getItem("checkedRouterIds")).join(",")
    // getMonitoreoData().then(data => {
    //   let monitoreoData = data
    //   dispatchMonData( { type: 'FETCH_SUCCESS', payload:monitoreoData})
    // })
    }, [])
  
  return (
    <>
    <Layout title="Conexiones" />
      <div className="monitoreo-wrapper">
        <div className="monitoreo-table-wrapper">
          <MaterialTable
            title=""
            columns={columns.columns}
            data={conexionesData.data}
            localization={{ 
              toolbar: {
                searchTooltip: "Buscar",
                searchPlaceholder: "Buscar"
              },
              pagination: {
                firstTooltip: "Primera Pagina",
                nextTooltip: "Proxima Pagina",
                previousTooltip: "Pagina Anterior",
                lastTooltip: "Ultima Pagina"
              }
            }}
            options={{
              actionsColumnIndex: -1,
              searchFieldStyle: {
                borderBottom: '1px solid black'
              },
              // filtering:true
            }}
          />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Conexiones