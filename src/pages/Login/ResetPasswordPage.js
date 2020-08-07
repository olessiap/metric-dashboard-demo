import React, { Component } from 'react'
import ResetPasswordForm from './ResetPasswordForm'

export class ResetPasswordPage extends Component {
  render() {
    return (
      <div className="login-main">
        <div className="login-wrapperLeft">
          <div className="login-contents">
            <img src="./images/main-logo.svg" alt=""/>
            <ResetPasswordForm />
          </div>
          {/* <div className="ayuda-footer">Necesitas auyda? Contactanos!</div> */}
        </div>
        <div className="login-wrapperRight"></div>
      </div>
    )
  }
}

export default ResetPasswordPage
