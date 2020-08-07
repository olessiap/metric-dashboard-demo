const initState = {
  showRouterModal: false,
  expandRouters: false,
  expandedRouterId: 6,
  groupCheckbox:true,
  "routers": [
    {"id": 1, "name": "SANTA FÉ Y TALCAHUANO", "ischecked": false},
    {"id": 2, "name": "AV. CABILDO 2345", "ischecked":false},
    {"id": 3, "name": "AV. SANTA FÉ 3456 - JUMBO", "ischecked":false},
    {"id": 4, "name": "AV. SANTA FÉ 3456 - JUMBO", "ischecked":false},
    {"id": 5, "name": "AV. SANTA FÉ 3456 - JUMBO", "ischecked":false},
    {"id": 6, "name": "AV. SANTA FÉ 3456 - JUMBO", "ischecked":false},
    {"id": 7, "name": "AV. SANTA FÉ 3456 - JUMBO", "ischecked":false},
    {"id": 8, "name": "AV. SANTA FÉ 3456 - JUMBO", "ischecked":false},
    {"id": 9, "name": "AV. SANTA FÉ 3456 - JUMBO", "ischecked":false},
    {"id": 10, "name": "AV. SANTA FÉ 3456 - JUMBO", "ischecked":false},
    {"id": 11, "name": "AV. SANTA FÉ 3456 - JUMBO", "ischecked":false},
    {"id": 12, "name": "AV. SANTA FÉ 3456 - JUMBO", "ischecked":false},
    {"id": 13, "name": "AV. SANTA FÉ 3456 - JUMBO", "ischecked":false},
  ],
  searchedContent: [],
  searchedContentMap: [],
  checkbox: 'test',
  selectedRouters: [],
  filteredRouters: []
  
  // totalRouterNumber: 1
}

const routerModalReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SWITCH_ROUTER_MODAL':
      return {
        ...state,
        showRouterModal: !state.showRouterModal,
        test: 'test2'
     }
    case "EXPAND_ROUTERS": 
      return {
        ...state,  
        expandRouters:  !state.expandRouters,
        // expandedRouterId: action.payload
      }
    case "EXPANED_ROUTER_ID": 
      return {
        ...state,  
        expandedRouterId: action.payload,
      }
    case "HANDLE_CHECKBOX_CHANGE":
      let newRouters = state.routers.filter(router => {
        if(router.id === action.payload) {
          router.ischecked = !router.ischecked
          return router
        }
      })
      return {
        ...state,
        selectedRouters: state.selectedRouters.concat(newRouters).filter((item) => {
          return item.ischecked === true
        })
      }
      case "SELECT_ALL_CHILDREN":
        let newRouters2 = state.routers.filter(router => {
          router.ischecked = !router.ischecked
          return router
        })
        return {
          ...state,
          groupCheckbox: !state.groupCheckbox,
          selectedRouters: state.selectedRouters.concat(newRouters2).filter((item) => {
            return item.ischecked === true
          })
        }
      case "RESET_ROUTERS":
        let resetRouters = state.routers.filter(router => {
          router.ischecked = false
          return router
        })
        return {
          ...state,
          selectedRouters:state.selectedRouters.concat(resetRouters).filter((item) => {
            return item.ischecked
          })
        }
      case "UPDATE_SEARCH": 
        return {
          ...state,
          filteredRouters:state.routers
        }
      case "UPDATE_SEARCH_ROUTER": 
        return {
          ...state,
          searchedContent:action.payload
        }
      case "UPDATE_SEARCH_MAP":
        return {
          ...state,
          searchedContentMap:action.payload
        }
    default: return state
  }
}

export default routerModalReducer
