import React, { useState, useEffect, useContext } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { domain } from "../../components/App/App"
import Axios from 'axios'
import { DashboardContext } from '../../contexts/DashboardContext';
import CancelRequest from "../../services/API/CancelRequest"

const LoginForm = () => {
  const { globalData, dispatch } = useContext(DashboardContext)
  const [ userName, setUserName] = useState("")
  const [ password, setPassword] = useState("") 
  const [ fetchDefaultData, setFetchDefaultData ] = useState(false)
  const [ clicked, setClicked ] = useState(false)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  const [ showErrorMessage, setShowErrorMessage ] = useState(false) 
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setClicked(true)
  }

  useEffect(() => {
    let mounted = true
    if(clicked === true){
      // dispatch({type: "SET_LOADING_STATUS", payload:true })
      dispatch({type: "SET_LOGGING_IN_STATUS", payload:true })
      dispatch({ type:'TOGGLE_MODAL'})
      const user = { userName, password } 
      setUserName("")
      setPassword("")
      setShow(true)
      Axios.post(domain + 'api/account/authenticate', {
        Username:user.userName,
        Password:user.password
      })
      .then((response) => {
        if(mounted){
          localStorage.setItem('data', JSON.stringify(response.data))
          localStorage.setItem("token", JSON.stringify(response.data.token))
          dispatch({ type:'FETCH_SUCCESS_LOGIN', payload:response.data })
          // dispatch({ type: 'CREATE_ROUTER_NODES', payload:response.data})
        }
      }, (error) => {
        dispatch({ type:'FETCH_ERROR_LOGIN', })
        console.log(error)
        setShowErrorMessage(true)
      })
    }
    return () => {
      mounted = false
    }
  }, [clicked])

  let checkedRouterIdsFromStorage = JSON.parse(localStorage.getItem("checkedRouterIds"))

  if (globalData.isLoggedIn) {
    //make new dashboard fetch call
    Axios.post(domain + 'Dashboard/Data', {
      "UserId": globalData.loginData.userId,
      "FromDate":globalData.dateRange[0].startDate.toISOString(), 
      "ToDate":globalData.dateRange[0].endDate.toISOString(),  
      // "RouterIds":globalData.defaultRouters, //the router selected ids concatenated with a comma separator in a single string
      "RouterIds":checkedRouterIdsFromStorage != null ? checkedRouterIdsFromStorage.join(",") : globalData.defaultRouterIds.join(",")
    },
    {headers: { Authorization: `Bearer ${globalData.loginData.token}` }
    })
    .then((response) => {
      setFetchDefaultData(true)
      if(!globalData.cancelRequest) {
        console.log(response.data)
        dispatch({ type:'FETCH_SUCCESS_DASHBOARD', payload:response.data })
      }
    }, (error) => {
      dispatch({ type:'FETCH_ERROR_DASHBOARD', })
      alert(error)
      setShowErrorMessage(true)
    })
  }
  
  return (
    <div>
    {globalData.cancelRequest && (
        <CancelRequest />
    )}
    {globalData.isLoggedIn ? <Redirect to={{ pathname: "/dashboard" }} /> : null }
      <h2>Ingresa a tu</h2>
      <h2>cuenta.</h2>
      <form>
        <input type="text" placeholder="Usuario" value={userName} required
            onChange={(e) => setUserName(e.target.value) }
        />
        <input type="password" placeholder="Contraseña" value={password} required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>Login</button> 
        {showErrorMessage ? (
          <p style={{color:'red', marginTop:'10px'}}>invalid login..</p>
        ) : null }
      </form>
      <Link to="/forgotpassword"><p>¿Has olvidado tu contraseña?</p></Link>
    </div>
  )
}

export default LoginForm

