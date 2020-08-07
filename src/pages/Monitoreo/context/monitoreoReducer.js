const monitorioReducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_SUCCESS':
      return { 
        ...state,
        data:action.payload
      }
    default: 
      return state
  }
}

export default monitorioReducer