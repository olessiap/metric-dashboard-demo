import React, { Component, useCallback, useContext, useEffect, useState } from 'react'
import Layout from '../../components/app-layout/Layout'
import Footer from "../../components/app-layout/Footer/Footer"
import { useTable, useExpanded, useSortBy, usePagination } from 'react-table'
import styled from 'styled-components'
import monitoreoData from "./monitoreo-data"
import { DashboardContext } from "../../contexts/DashboardContext"
import { MonitoreoContext } from "./context/MonitoreoContext"
import Estado from "./Estado"
import UpTimes from "./UpTimes"
import ActiveState from "./ActiveState"
import getMonitoreoData from '../../services/API/getMonitoreoData'
import getMonitoreoStats from '../../services/API/getMonitoreoStats'
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles'

import MaterialTable from 'material-table'
import { PersonAdd, CalendarToday, Wifi, WifiOff} from '@material-ui/icons'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th {
      padding: 30px 30px;
      text-align: left;
    }
    td {
      padding: 30px 30px;
      border-top: 1px solid #e4e4e4;
      }
    }

  .first-header:first-of-type {
    display:none;
  }
`

function Monitoreo() {
  const { monData, dispatchMonData } = useContext(MonitoreoContext)
  const { globalData, dispatch } = useContext(DashboardContext)
  const [columns, setColumns] = React.useState({
    columns: [
      { title: 'HOTSPOT', field: 'Hotspot' },
      { title: 'UBICACIÓN', field: 'Ubicacion' },

      { title: 'SECTOR', field: 'Sector' },
      { title: 'MODO', field: 'Modo'},
      { title: 'ÚLTIMO CONTACTO', field: 'UltimoContacto'},
      {
        title: 'ESTADO',
        field: 'Estado',
        lookup: { 
          'CAIDO': <ActiveState active={false} />,
          'HABILITADO':<ActiveState active={true} />
        },
      }
    ],
    showModal: false
  });
  
  React.useEffect(() => {
    let routerIds = JSON.parse(localStorage.getItem("checkedRouterIds")).join(",")
    let search = ""
    // const results = getMonitoreoData(search)
    getMonitoreoData().then(data => {
      let monitoreoData = data
      dispatchMonData( { type: 'FETCH_SUCCESS', payload:monitoreoData})
    })
    }, [])

  let routerData = monData.data ? monData.data.RoutersList : "nada"
  
  return (
    // <Styles>
      <>
        <Layout title="Monitoreo" hideExport={true} hideCalendar={true}/>
          <div className="monitoreo-wrapper">
            <div className="monitoreo-table-wrapper">
              <MaterialTable
                title=""
                columns={columns.columns}
                data={routerData}
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
                  }
                }}
                detailPanel={rowData => {
                  return (
                    <UpTimes row={rowData} />
                  )
                }}
                onRowClick={(event, rowData, togglePanel) => {
                  togglePanel()
                } }
              />
            </div>
            <Footer />
          </div>
      </>
    // </Styles>
  )
}

export default Monitoreo