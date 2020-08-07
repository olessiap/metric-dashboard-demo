import React, { createContext, useReducer } from 'react'
import monitoreoReducer from "./monitoreoReducer"

export const MonitoreoContext = createContext()

const initialState = {
  data:[]
}

const MonitoreoContextProvider = (props) => {
  const [ monData, dispatchMonData ] = useReducer(monitoreoReducer, initialState)

  return (
    <MonitoreoContext.Provider value={{ monData, dispatchMonData }}>
      {props.children}
    </MonitoreoContext.Provider>
  )
}

export default MonitoreoContextProvider