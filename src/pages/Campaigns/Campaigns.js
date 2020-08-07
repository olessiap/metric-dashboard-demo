import React, { useContext } from 'react'
import Layout from "../../components/app-layout/Layout"
import Monitoreo from '../Monitoreo/Monitoreo'
import Footer from '../../components/app-layout/Footer/Footer'
import ActiveState from '../Monitoreo/ActiveState'
import { MonitoreoContext } from '../Monitoreo/context/MonitoreoContext'
import MaterialTable from 'material-table'
import Stats from '../Dashboard/Stats/Stats'
import ConnectionsPerDate from '../Dashboard/ConnectionsPerDate/ConnectionsPerDate'
import CampaignsMainStats from './CampaignsMainStats'
import CampaignsCTRStats from './CampaignsCTRStats'


const Campaigns = () => {
  const { monData, dispatchMonData } = useContext(MonitoreoContext)
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

  let routerData = monData.data ? monData.data.RoutersList : "nada"

  return (
    <>
      <Layout hideRouters={true} title="Demografico"/>
      <div className="campaigns-wrapper">
          <CampaignsMainStats />
          <CampaignsCTRStats />
          <ConnectionsPerDate fromCampaigns={true}/>
        <div className="campaign-table">
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
              <div> campaign data </div>
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
  )
}

export default Campaigns