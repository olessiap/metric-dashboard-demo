import React,  { useContext, useEffect, useState } from 'react'
import Layout from '../../components/app-layout/Layout'
import Footer from "../../components/app-layout/Footer/Footer"
import hotspotData from "./hotspot-data"
import { DashboardContext } from "../../contexts/DashboardContext"
import { MonitoreoContext } from "../Monitoreo/context/MonitoreoContext"
import MaterialTable from 'material-table'

function Hotspots() {
  const { monData, dispatchMonData } = useContext(MonitoreoContext)
  const { globalData, dispatch } = useContext(DashboardContext)
  const [columns, setColumns] = React.useState({
    columns: [
      { title: 'ID', field: 'id'},
      { title: 'HOTSPOT', field: 'hotspot'},
      { title: 'UBICACIÓN', field: 'ubicacion'},
      { title: 'SECTOR', field: 'sector'},
      { title: 'ESTADO', field: 'estado'},
      { title: 'CONTACTO', field: 'contacto'},
      { title: 'TELÉFONO', field: 'telefono'},
      { title: 'SERIAL', field: 'serial'},
      { title: 'MODO', field: 'modo'},
      { title: 'GMT', field: 'GMT'},
      { title: 'WHITELIST', field: 'whitelist'}
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
    <Layout title="Hotspots" />
      <div className="monitoreo-wrapper">
        <div className="monitoreo-table-wrapper">
          <MaterialTable
            title=""
            columns={columns.columns}
            data={hotspotData.data}
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

export default Hotspots