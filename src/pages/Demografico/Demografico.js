import React, { useContext } from 'react'
import AuthenticatedAt from '../Demografico/AuthenticatedAt/AuthenticatedAt'
import DemoDispositivos from '../Demografico/DemoDispositivos/DemoDispositivos'
import DemoStats from '../Demografico/DemoStats/DemoStats'
import Generos from './Generos/Generos'
import Footer from '../../components/app-layout/Footer/Footer'
import Horarios from '../Dashboard/Horarios/Horarios'
import Layout from '../../components/app-layout/Layout'
import UltimosUsarios from './UltimosUsarios/UltimosUsarios'
import WeekdayConnections from '../Dashboard/WeekdayConnections/WeekdayConnections'
import { DashboardContext } from '../../contexts/DashboardContext'

const Demografico = () => {
  const { globalData, dispatch } = useContext(DashboardContext)
  return (
    <div>
      <Layout hideExport={true} title="Demografico"/>
        <div className="demografico-wrapper">
          <DemoStats />
          <WeekdayConnections />
          <Horarios />
          <UltimosUsarios />
          <Generos />
          <AuthenticatedAt />
          <DemoDispositivos />
          <Footer />
        </div>
    </div>
  )
}

export default Demografico
