const demograficoReducer = (state, action) => {
  switch(action.type) {
    case 'DEMO_TEST':
      return { 
        ...state,
        data:action.payload
      }
    default: 
      return state
  }
}

export default demograficoReducer