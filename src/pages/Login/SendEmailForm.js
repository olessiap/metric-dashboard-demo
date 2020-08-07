import React, { useState } from 'react'
import { domain } from "../../components/App/App"

const SendEmailForm = () => {
  const [ email, setEmail ] = React.useState("")
  const [ showErrorMessage, setShowErrorMessage ] = useState(false) 
  const [ showSuccessMessage, setShowSuccessMessage ] = useState(false) 

 
  const handleErrors = response => {
    if(!response.ok) {
      setShowErrorMessage(true)
    } else {
      setShowSuccessMessage(true)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    if(email) {
      fetch(domain + "api/account/SendRecoveryEmail?email=" + email+"&origin="+window.location.origin, {
        method: "GET"
      })
      .then(handleErrors)
    }
  }
  
  return (
    <>
      <h2>Olvidaste</h2>
      <h2>tu conrasena?</h2>
      <p>Ingresa tu email para restablecer tu contrasena.</p>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required 
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Enviar</button>
        {showErrorMessage ? (
          <p style={{color:'red', marginTop:'10px'}}>invalid email..</p>
        ) : null }
        {showSuccessMessage ? (
          <p>Check your email to reset your password..</p>
        ) : null }
      </form>
    </>
  )
}

export default SendEmailForm 
