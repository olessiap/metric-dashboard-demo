import React, {createContext, useReducer } from 'react'
import demograficoReducer from './demograficoReducer'

export const DemograficoContext = createContext()

const initialState = {
  generosMujeresData: {
    datasets: [
      {
        data:[1250,500],
        backgroundColor:["#fb2b95"]
      }
    ],
    labels:['mujeres']
  },
  generosHombresData: {
    datasets: [
      {
        data:[950,350],
        backgroundColor:["#229fda"]
      }
    ],
    labels:['hombres']
  },
  generosOtrosData: {
    datasets: [
      {
        data:[250,2550],
        backgroundColor:["#000"]
      }
    ],
    labels:['otros']
  },
  generosBarData: {
    labels:["N/S", "1-15", "16-23", "24-31", "32-39", "40-47", "48-55", "56-65", "+65"],
    datasets: [
      {
        data: [6, 8, 3, 5, 5, 6, 7, 4, 4, 1],
        backgroundColor: '#fb2b95',
        
      },
      {
        data: [3, 4, 6, 1, 4, 2, 1, 6, 1, 5],
        backgroundColor: '#229fda',
      },
      {
        data: [1, 2, 0, 1, 1, 0, 0, 4, 0, 1],
        backgroundColor: '#3e4145',
      }
  ]
  },
  authenticatedAtMethodData: {
    datasets: [
      {
        data:[1250, 300, 900, 0, 0],
        backgroundColor:["#afeeee", "#b0e0e6", "#0000ff", "#000", "#808080"]
      }
    ],
    labels:['Email', 'Facebook', 'Twitter', 'Linkedin', 'Otro']
  },
  authenticatedAtEdadesData: {
    labels:["1-15", "16-23", "24-31", "32-39", "40-47", "48-55", "56-65", "+65"],
    datasets: [
      {
        data: [6, 8, 3, 5, 5, 6, 7, 4],
        backgroundColor: '#afeeee',
        
      },
      {
        data: [3, 4, 6, 1, 4, 2, 1, 6],
        backgroundColor: '#058abd',
      },
      {
        data: [1, 2, 0, 1, 1, 0, 0, 4],
        backgroundColor: '#0000ff',
      },
      {
        data: [1, 0, 2, 1, 1, 0, 1, 1],
        backgroundColor: '#000',
        
      },
      {
        data: [1, 0, 2, 1, 1, 0, 1, 1],
        backgroundColor: '#808080',
      },
  ]
  },
  authenticatedAtGenerosData: {
    labels:["Email", "Facebook", "Twitter", "Linkedin", "Otro"],
    datasets: [
      {
        data: [6, 8, 3, 2, 1],
        backgroundColor: '#fb2b95',
        
      },
      {
        data: [7, 4, 6, 1, 2],
        backgroundColor: '#058abd',
      },
      {
        data: [3, 2, 8, 1, 2],
        backgroundColor: '#000',
      }
  ]
  },
  dispositivosData: {
    datasets: [
      {
        data:[54, 97, 78, 5],
        backgroundColor:["#85d0f3", "#229fda", "#0a519f", "#878a8d"]
      }
    ],
    labels:['smartphones', 'tablets', 'pc/mac', 'otro'],
  },
  dispositivosBrowserData: {
    datasets: [
      {
        data:[650, 200, 60, 15, 0],
        backgroundColor:["#afeeee", "#b0e0e6", "#0000ff", "#0000ff", "#808080"]
      }
    ],
    labels:['android', 'chrome', 'mobile sam', 'microsoft', 'otros']
  },
  dispositivosOSData: {
    datasets: [
      {
        data:[480, 310, 100],
        backgroundColor:["#afeeee", "#b0e0e6", "#0000ff"]
      }
    ],
    labels:['android', 'ios', 'windows']
  },
  ultimosUsariosData: {
    datasets:[
      {
        data:[54, 97],
        backgroundColor:["#229fda", "#0a519f"]
      }
    ],
    labels:['nuevos', 'recurrentes']
  },
}

const DemograficoContextProvider = props => {
  const [ demoData, disptatchDemoData ] = useReducer(demograficoReducer, initialState)

return (
  <DemograficoContext.Provider value={{ demoData, disptatchDemoData }}>
    {props.children}
  </DemograficoContext.Provider>
  )
}

export default DemograficoContextProvider