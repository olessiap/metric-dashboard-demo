import React, { useContext } from 'react'
import { DashboardContext } from '../../../contexts/DashboardContext';
import { MonitoreoContext } from '../../../pages/Monitoreo/context/MonitoreoContext'

var dateFormat = require('dateformat')

dateFormat.i18n = {
  dayNames: [
      'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab',
      'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'
  ],
  monthNames: [
      'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec',
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Deciembre'
  ],
  timeNames: [
      'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
  ]
}


const HeaderUltimoUpdate = () => {
  const { globalData } = useContext(DashboardContext)
  const { monData }  = useContext(MonitoreoContext)
  const lastUpdate = globalData.dashboardData ? dateFormat(globalData.dashboardData.LastUpdate) : ""
    return (
      <p className="last-update">Última actualización: {lastUpdate}</p>
    )
  return null
}

export default HeaderUltimoUpdate