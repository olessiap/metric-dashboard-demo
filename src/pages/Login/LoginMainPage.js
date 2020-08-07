import React, { useContext } from 'react'
import LoadingModal from '../../components/modals/LoadingModal'
import LoginForm from "./LoginForm"
import { DashboardContext } from "../../contexts/DashboardContext"
import SEO from '../../components/app-layout/SEO'

const LoginMainPage = () => {
  const { globalData } = useContext(DashboardContext)
  return (
    <>
    <SEO title={"login"}/>
      <div className="login-main">
        <div className="login-wrapperLeft">
          <div className="login-contents">
            <img src="./images/main-logo.svg" alt="man with phone"/>
            <LoginForm /> 
          </div>
        </div>
        <div className="login-wrapperRight">
        {globalData.toggleLoadingModal & globalData.loading ? <LoadingModal loginModal={true}/> : null}
        </div>
      </div>
    </>
  )
}

export default LoginMainPage
