import React, { useState } from 'react'
import { domain } from '../../components/App/App'
import { Link, Redirect } from 'react-router-dom'


// TODO 
// ADD ICON IDENTIFIERS IF PASSWORDS MATCH OR NO MATCH
// ADD A TIMEOUT WITH A "REDIRECTING" MESSAGE BEFORE REDIRECTING BACK TO LOGIN

const ResetPasswordForm = () => {
  const [ password1, setPassword1 ] = React.useState("")
  const [ password2, setPassword2 ] = React.useState("")
  const [ errorMessage, setErrorMessage ] = React.useState(false)
  const [ gobackToLogin, setGoBackToLogin ] = React.useState(false)
  // const [ passwordsMatch, setPasswordsMatch ] = React.useState(false)

  let userParam = window.location.href.split("=")[1]
  
  const handleSubmit = e => {
  e.preventDefault()
  if(password1 === password2) {
    // setPasswordsMatch(true)
    fetch(domain + "api/account/SetPasswordAnon", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Username:userParam,
        NewPassword:password1,
        ConfirmPassword:password2
      })
    })
    .then(setGoBackToLogin(true)).catch()
    setPassword1("")
    setPassword2("")
    } else {
      setErrorMessage(true)
    }
  }

  if (gobackToLogin) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <h2>Ingresa</h2>
      <h2>tu nueva contraseña</h2>
      <p>Ingresa una nueva contraseña que sea diferente a la anterior</p>
      <form onSubmit={handleSubmit}>
        <input type="password" placeholder="new password" onChange={(e) => setPassword1(e.target.value)}/>
        <input type="password" placeholder="repeat password" onChange={(e) => setPassword2(e.target.value)}/>
        <button type="submit">Submit</button>
        {errorMessage ? (
          <p style={{color:"red"}}>Try again..</p>
        ) : null }
      </form>
    </>
  )
}

export default ResetPasswordForm
