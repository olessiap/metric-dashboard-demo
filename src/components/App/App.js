import React from 'react';
import '../../styles/app.scss';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Conexiones from '../../pages/Conexiones/Conexiones'
import Dashboard from '../../pages/Dashboard/Dashboard'
import Demografico from "../../pages/Demografico/Demografico"
import SendEmailPage from '../../pages/Login/SendEmailPage'
import ResetPasswordPage from '../../pages/Login/ResetPasswordPage'
import LoginMainPage from "../../pages/Login/LoginMainPage"
import Monitoreo from '../../pages/Monitoreo/Monitoreo'
import DashboardContextProvider from '../../contexts/DashboardContext'
import MonitoreoContextProvider from '../../pages/Monitoreo/context/MonitoreoContext'
import DemograficoContextProvider from '../../pages/Demografico/context/DemograficoContext'
import Hotspots from '../../pages/Hotspots/Hotspots'
import Campaigns from '../../pages/Campaigns/Campaigns'

export const domain = process.env.REACT_APP_DOMAIN_URL

const App = () => {
    return(
      <HashRouter>
        <Switch>
          <Route exact path='/' render={ (props) => 
            <DashboardContextProvider> 
                <LoginMainPage {...props} /> 
            </DashboardContextProvider>} />
          <Route path='/forgotpassword' component={SendEmailPage} />
          <Route path='/resetpassword' component={ResetPasswordPage} />
          
          <Route path='/dashboard'  render={ (props) => 
            <DashboardContextProvider> 
            <MonitoreoContextProvider> 
                <Dashboard {...props} /> 
            </MonitoreoContextProvider>
            </DashboardContextProvider>} />
          
          <Route path='/demografico' render={ (props) => 
            <DemograficoContextProvider> 
            <MonitoreoContextProvider> 
            <DashboardContextProvider> 
                <Demografico {...props} />
            </DashboardContextProvider>
            </MonitoreoContextProvider> 
             </DemograficoContextProvider>
             } />
          
          <Route path='/conexiones'  render={ (props) => 
            <DashboardContextProvider> 
            <MonitoreoContextProvider> 
                <Conexiones {...props} /> 
            </MonitoreoContextProvider> 
            </DashboardContextProvider>} />

          <Route path='/hotspots'  render={ (props) => 
            <DashboardContextProvider> 
            <MonitoreoContextProvider> 
                <Hotspots {...props} /> 
            </MonitoreoContextProvider>
            </DashboardContextProvider>} />

          <Route path='/monitoreo'  render={ (props) => 
            <DashboardContextProvider> 
            <MonitoreoContextProvider> 
                <Monitoreo {...props} /> 
            </MonitoreoContextProvider>
            </DashboardContextProvider>} />

            <Route path='/campanas'  render={ (props) => 
            <DashboardContextProvider> 
            <MonitoreoContextProvider> 
                <Campaigns {...props} /> 
            </MonitoreoContextProvider>
            </DashboardContextProvider>} />
        </Switch>
      </HashRouter>
    )
}

export default App;
