import React, { createContext, useReducer } from 'react'
import dashboardReducer from '../reducers/dashboardReducer'
import { addDays, subDays } from 'date-fns';

export const DashboardContext = createContext()

let loginData = JSON.parse(localStorage.getItem('data'))

///////FECHAS LOGIC////////////////
let fromdateLS = null;
let todateLS = null;

const getStringLS = (key) => {
  try {
    return localStorage.getItem(key).toString();
  } catch (error) {
    return null;
  }
};

const parseDateFromLS = (strDate) => { 
  if(strDate == null) return null;
  
  let dateSplitted = strDate.replace('"','').replace('\\','').split('T')[0].split('-');
  let anio = Number.parseInt(dateSplitted[0]);
  let mes = Number.parseInt(dateSplitted[1]);
  let dia = Number.parseInt(dateSplitted[2]);
  let returnValue = new Date (anio,mes - 1,dia);
  return returnValue;
};

fromdateLS = parseDateFromLS(getStringLS('fromDate'));
todateLS = parseDateFromLS(getStringLS('toDate'));

let testStartDate = new Date('01 January 2018 14:48 UTC')
let testEndDate = new Date('31 January 2018 14:48 UTC')

if(fromdateLS != null)
  testStartDate = fromdateLS;
if(todateLS != null)
  testEndDate = todateLS;

//weekly connections
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

//////INITIAL STATE LOGIC/////////
const initialState = {
  loginData: loginData,
  dashboardData:{},
  markerData:{},
  defaultCenter:null,
  RouterIds:null,
  defaultRouterIds: null,
  defaultChecked: null,
  routerNodes:[],
  loggingIn:false,
  loading: false,
  isLoggedIn:false,
  toggleLoadingModal:false,
  cancelRequest: false,
  cancelDashRequest: false,
  error: 'testing default context',
  //date range from 2018 for testing purposes
  dateRange: [
    {
      endDate: testEndDate,
      startDate:testStartDate,
      key:'selection'
    }
  ],
  
  // dateRange: [
    //   {
      //     endDate: new Date(),
      //     startDate: subDays(new Date(), 7),
      //     key:'selection'
      //   }
      // ],
  routers:null,
  showRouterModal: false,
  expandRouters:false,

  filteredRouters:[],
  searchedContent:[],
  searchedContentMap:[],

  //charts
  connectionsPerDateData: {
    labels:[],
    datasets: [
      {
        data:[],
        borderColor: ['#44494e'],
        backgroundColor: ['#fff'],
      },
      {
        data:[],
        borderColor: ['rgba(75, 192, 192, 1)'],
        backgroundColor: ['#fff']
      }
    ]
  },
  dispositivosData: {
    datasets: [
      {
        data:[],
        backgroundColor:["#85d0f3", "#229fda", "#0a519f", "#878a8d", "grey"]
      }
    ],
    labels:[]
  },
  horariosBarData: {
    labels:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    datasets: [
      {
        label:"conexiones",
        data:[],
        backgroundColor: '#229fda',
        borderColor: '#229fda',
        borderWidth: 20,
      },
      {
        label:"logins",
        data:[],
        backgroundColor: '#3e4145',
      }
    ]
  },
  weekdayConnectionsData: {
    labels:["DÓMINGO", "LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO"],
    datasets: [
      {
        data:[],
        borderColor: ['#44494e'],
        backgroundColor: ['#fff'],
      },
      {
        data:[],
        borderColor: ['rgba(75, 192, 192, 1)'],
        backgroundColor: ['#fff']
      }
    ]
  },    
}

const DashboardContextProvider = (props) => {
  const [ globalData, dispatch ] = useReducer(dashboardReducer, initialState)

  return (
    <DashboardContext.Provider value={{ globalData, dispatch }}>
      { props.children }
    </DashboardContext.Provider>
  )
}

export default DashboardContextProvider
