const last7DaysFun = () => {
  var dates = [];
  for (let I = 0; I < Math.abs(7); I++) {
      dates.push(new Date(new Date() - ((7 >= 0 ? I : (I - I - I)) * 24 * 60 * 60 * 1000)).toLocaleString());
  }
  return dates;
}
const last7Days = last7DaysFun().reverse()

const days = last7Days.map((day, index) => {
  let dayOnly = day.split(',')
  return (
      dayOnly[0]
  )
})

const initState = {
  weeklyConnectionsData: {
    labels:days,
    datasets: [
      {
        data:[250, 260, 280, 260, 290, 260, 250],
        borderColor: ['#44494e'],
        backgroundColor: ['#fff'],
      },
      {
        data:[230, 240, 260, 250, 270, 230, 220],
        borderColor: ['rgba(75, 192, 192, 1)'],
        backgroundColor: ['#fff']
      }
    ]
  },
  horariosBarData: {
    labels:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    datasets: [
      {
        label:"conexiones",
        data:[1, 2, 3, 5, 4, 3, 4, 5, 4, 3, 3, 9, 3, 3, 6, 2, 1, 4, 7, 4, 5, 7, 3, 6],
        backgroundColor: '#229fda',
        borderColor: '#229fda',
        borderWidth: 20,
      },
      {
        label:"logins",
        data:[9, 5, 3, 7, 2, 4, 8, 3, 4, 8, 2, 2, 5, 2, 1, 7, 3, 4, 2, 1, 6, 3, 2, 9],
        backgroundColor: '#3e4145',
      }
    ]
  },
  dayConnectionsData: {
    labels:["DÓMINGO", "LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO"],
    datasets: [
      {
        data:[50, 60, 40, 60, 40, 20, 50],
        borderColor: ['#44494e'],
        backgroundColor: ['#fff'],
      },
      {
        data:[30, 40, 26, 50, 40, 30, 45],
        borderColor: ['rgba(75, 192, 192, 1)'],
        backgroundColor: ['#fff']
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
  ultimosUsariosData: {
    datasets:[
      {
        data:[54, 97],
        backgroundColor:["#229fda", "#0a519f"]
      }
    ],
    labels:['nuevos', 'recurrentes']
  },
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
    labels:["email", "Facebook", "Twitter", "Linkedin", "Otro"],
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
  dispositivosOSData: {
    datasets: [
      {
        data:[480, 310, 100],
        backgroundColor:["#afeeee", "#b0e0e6", "#0000ff"]
      }
    ],
    labels:['android', 'ios', 'windows']
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
}

const chartJSReducer = (state = initState, action) => {
  return state
}

export default chartJSReducer