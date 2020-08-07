const dashboardReducer = (state, action) => {
  switch(action.type) {
    //////////////LOGGIN IN //////////////
    case 'SET_LOGGING_IN_STATUS': 
      return {
        ...state,
        loggingIn:action.payload,
        loading:action.payload
      }
    case 'CANCEL_LOGIN':
      return {
        ...state,
        isLoggedIn:false,
        loading:false,
        cancelRequest:!state.cancelRequest
      }
    case 'CANCEL_DATA_REQUEST':
        return {
          ...state,
          loading:false,
          cancelDashRequest:true,
          toggleLoadingModal:false
        } 
    case 'LOG_OUT': 
      let testStartDate = new Date('01 January 2018 14:48 UTC')
      let testEndDate = new Date('31 January 2018 14:48 UTC')
      let defaultRoutersLogout = JSON.parse(localStorage.getItem('data')).routersInfo[0].routers.map((item, index) => {
        return item.Id
      })
      return {
        ...state,
        loading: false,
        isLoggedIn:false,
        error: 'testing from Logout',
        loginData: null,
        routers:null,
        RouterIds:defaultRoutersLogout,
        showRouterModal: false,
        expandRouters:false,
        checkedBoxes:[],
        dateRange: [
          {
            endDate: testEndDate,
            startDate:testStartDate,
            key:'selection'
          }
        ],
        checkedGroupBoxes:[],
      }
    case 'TOGGLE_MODAL':
      return {
        ...state,
        toggleLoadingModal:!state.toggleLoadingModal
      }
    //////////////FETCH SUCCESSES//////////////
    case 'FETCH_SUCCESS_LOGIN':
      //setup defaultChecked routers & default RouterIds from first routerInfo group
      //force check defaults with initial state from globalData.defaultChecked, 
      //then when checked state in routerModal changes, update LS checkedRouters & LS RouterIds
      
      let defaultChecked = []
      let defaultCheckedNodes = action.payload.routersInfo[0].routers.map((hotspot) => {
        defaultChecked.push(action.payload.routersInfo[0].Id + '/' + hotspot.Id)
      })
      return { 
        ...state,
        loggingIn:false,
        isLoggedIn:true,
        loginData:action.payload,
        defaultRouterIds:action.payload.routersInfo[0].routers.map(item => {
          return item.Id
         }),
        defaultChecked:defaultChecked,
        //all available routers
        routers:action.payload.routersInfo.map(item => {
          return item.routers
        }).flat()
      }
    case 'FETCH_SUCCESS_DASHBOARD':
      //dispositivos
      let dispoData = action.payload.dispositivos.map(item => {
        return item.conexiones
      })
      let dispoLabels = action.payload.dispositivos.map(item => {
        return item.dispositivo
      })
      //weekly connections
      let weeklyConnections = action.payload.diasDeConexion.map(item => {
        return item.conexiones
      })
      let weeklyLogins = action.payload.diasDeConexion.map(item => {
        return item.logins
      })
      //connections per day
      const fechas = action.payload.conexionesPorFecha.map(item => {
        return item.fecha
      })
      const dailyConnections = action.payload.conexionesPorFecha.map(item => {
        return item.conexiones
      })
      const dailyLogins = action.payload.conexionesPorFecha.map(item => {
        return item.logins
      })

      //horarios
      const hourConnections = action.payload.horaDeConexion.map(item => {
        return item.conexiones
      })
      
      const hourLogins = action.payload.horaDeConexion.map(item => {
        return item.logins
      })
      //weekday connections
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
      return { 
        ...state,
        loading:false,
        toggleLoadingModal:false,
        dashboardData:action.payload,
        connectionsPerDateData: {
          labels:fechas,
          datasets: [
            {
              label:"conexiones",
              data:dailyConnections,
              borderColor: ['#44494e'],
              backgroundColor: ['rgba(69, 74, 79, 0.13)'],
            },
            {
              label:"logins",
              data:dailyLogins,
              borderColor: ['#229fda'],
              backgroundColor: ['rgba(34, 158, 216, 0.14)']
            }
          ]
        },    
        dispositivosData:{
          datasets: [
            {
              data:dispoData,
              backgroundColor:["#85d0f3", "#229fda", "#0a519f", "#878a8d", "grey"]
            }
          ],
          labels:dispoLabels
        },
        horariosBarData: {
          labels:['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'],
          datasets: [
            {
              label:"conexiones",
              data:hourConnections,
              backgroundColor: '#229fda',
              borderColor: '#229fda',
              borderWidth: 20,
            },
            {
              label:"logins",
              data:hourLogins,
              backgroundColor: '#3e4145',
            }
          ]
        },
        weekdayConnectionsData: {
          labels:["DÓMINGO", "LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO"],
          datasets: [
            {
              label:"conexiones",
              data:weeklyConnections,
              borderColor: ['#44494e'],
              backgroundColor: ['rgba(69, 74, 79, 0.13)'],
            },
            {
              label:"logins",
              data:weeklyLogins,
              borderColor: '#229fda',
              backgroundColor: ['rgba(34, 158, 216, 0.14)']
            }
          ]
        }   
      }
    case 'FETCH_SUCCESS_MARKER_DATA':
      let defaultCenterObj = { lat: action.payload[0].Lat, lng: action.payload[0].Lng }
    return {
        ...state,
        markerData:action.payload,
        defaultCenter: defaultCenterObj
      }

    ////////////// FETCH ERRORS //////////////
    case 'FETCH_ERROR_LOGIN':
      return {
        loading:false,
        error: 'testing error context',
        loginData:{}
      }
    case 'FETCH_ERROR_DASHBOARD':
      return {
        loading:false,
        error: 'testing error context',
        dashboardData:{}
      }

    ////////////// GLOBAL PARAMETERS ROUTES AND DATE //////////////
    case 'CHANGE_DATE_RANGE':
      return {
        ...state,
        dateRange:action.payload
      }
    case 'SWITCH_ROUTER_MODAL':
      return {
        ...state,
        showRouterModal: !state.showRouterModal,
      }

    case 'CREATE_ROUTER_NODES':
      //create ALL checkboxes 
      function createNodes(routersInfo) {
        let nodes = [];
        let childrenRouters = [];
        for (let i = 0; i < routersInfo.length; i++) {
          let currentGroup = routersInfo[i];
          for (let j = 0; j < currentGroup.routers.length; j++) {
            let currentChild = currentGroup.routers[j];
            let childrenObj = {
              value: `${currentGroup.Id}/${currentChild.Id}`,
              label: `${currentChild.Hotspot} - ${currentChild.Ubicacion} - ${
                currentChild.Sector
              }`
            };
            childrenRouters.push(childrenObj);
          }
          let parentObj = {
            value: currentGroup.Id,
            label: currentGroup.Nombre,
            children: childrenRouters
          };
          nodes.push(parentObj);
          childrenRouters = [];
        }
        return nodes;
      }
      
      return {
        ...state,
        routerNodes:createNodes(action.payload.routersInfo),
      }
    case "EXPAND_ROUTERS": 
      return {
        ...state,  
        expandRouters:  !state.expandRouters,
        expandedRouterId: action.payload
      }
    case "CHECK_BOX":
      let checkedBox = action.payload[0] //true or false
      let router = action.payload[1] //individual router
      if(checkedBox) {
          state.checkedBoxes.push(router)
      } else {
        const index = state.checkedBoxes.findIndex((ch) => ch.Id === router.Id);
        state.checkedBoxes.splice(index, 1);
        }
        return {
          ...state,
          RouterIds: state.checkedBoxes.map((item, index) => {
            return item.Id
          })
        }
    case "CHECK_ALL_GROUP_BOXES": 
      let checkedGroupBox = action.payload[0] //true or false
      let groupRouter = action.payload[1]
      let addRouters = () => {
        groupRouter.routers.map((item, index) => {
          state.checkedBoxes.push(item)
      })}
      let deleteRouters = () => {
        groupRouter.routers.map((item, index) => {
          state.checkedBoxes.splice(index)
      })}
      if(checkedGroupBox) {
        state.checkedGroupBoxes.push(groupRouter)
        addRouters()
      } else {
        const index = state.checkedGroupBoxes.findIndex((ch) => ch.Id === groupRouter.Id) 
        state.checkedGroupBoxes.splice(index, 1);
        deleteRouters()
      }
        return {
          ...state,
          RouterIds: state.checkedBoxes.map((item, index) => {
            return item.Id
          })
      }
      ////////////// SEARCH FUNCTIONALITY //////////////
      case "UPDATE_SEARCH_IN_ROUTER":
        return {
          ...state,
          filteredRouters:state.routers,
          searchedContent:action.payload
        }
      case "UPDATE_SEARCH_IN_MAP": 
        return {
          ...state,
          searchedContentMap:action.payload
        }
      default: 
        return state
    }
}

export default dashboardReducer
