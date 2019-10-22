import { ADD_TEMP,ADD_TEMPS  } from "./actions"


const initState = {
  temps: []
}

export const tempReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TEMP: 
      return {
        ...state,
        temps: [
          ...state.temps,
          action.payload.temp
        ]
      } 
    case ADD_TEMPS: 
      return {
        ...state,
        temps: action.payload.temps
      } 
      default: 
        return state
  }
}


// Object.assign({}, state, {

// })

// {
//   ...state,
//   temps: [
//     ...state.temps,
//     action.payload
//   ]
// }
