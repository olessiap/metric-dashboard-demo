export const switchRouterModal = (routerModal) => {
  return {
    type: 'SWITCH_ROUTER_MODAL',
    routerModal:"routerModal"
  }
}

export const expandRoutersAction = (expandRouters) => {
  return {
    type:"EXPAND_ROUTERS",
    expandRouters
  }
}

export const expandedRouterId = (id) => {
  return {
    type:"EXPANDED_ROUTER_ID",
    payload:id
  }
}

export const handleCheckboxChangeAction = (id) => {
  return {
    type: "HANDLE_CHECKBOX_CHANGE",
    payload:id
  }
} 

export const selectChildrenAction = (e) => {
  return {
    type: "SELECT_CHILDREN",
  }
}

export const selectAllChildrenboxesAction = (isChecked) => {
  return {
    type: "SELECT_ALL_CHILDREN",
    payload:isChecked
  }
}

export const resetAllRouters = () => {
  return {
    type: "RESET_ROUTERS",
    payload: true
  }
}

export const updateSearchResults = (nextProps) => {
  return {
    type: "UPDATE_SEARCH",
    payload:nextProps
  }
}

export const updateSearchResultsInRouter = (newList) => {
  return {
    type: "UPDATE_SEARCH_ROUTER",
    payload:newList
  }
}

export const updateSearchResultsInMap = (mapSearchList) => {
  return {
    type: "UPDATE_SEARCH_MAP",
    payload:mapSearchList
  }
}