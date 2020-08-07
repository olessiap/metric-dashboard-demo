import React, { Component } from 'react'
import SendEmailForm from './SendEmailForm'

export class SendEmailPage extends Component {
  render() {
    return (
      <div className="login-main">
        <div className="login-wrapperLeft">
          <div className="login-contents">
            <img src="./images/main-logo.svg" alt=""/>
            <SendEmailForm />
          </div>
          {/* <div className="ayuda-footer">Necesitas auyda? Contactanos!</div> */}
        </div>
        <div className="login-wrapperRight"></div>
      </div>
    )
  }
}

export default SendEmailPage
