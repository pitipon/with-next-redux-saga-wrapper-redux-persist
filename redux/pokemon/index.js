///// STEP 1: Copy folder and change to your name
///// STEP 2: Create types and actions from gen-redux-type
///// STEP 3: Design your initialState
///// STEP 4: Design reducer
///// STEP 6: Design saga
///// STEP 7: Don't forget to add this reducer in ../persistedReducer
///// STEP 8: Don't forget to add this saga in ../saga.js
///// NOTE: Don't need to change HYDRATE
///// NOTE: you can use this reducer name to select in state

import { HYDRATE } from 'next-redux-wrapper';
import genReduxType from 'gen-redux-type'

///////// Service Name ////////
export const name = 'pokemon'

///////// Action type and action ///////////
export const [pokemonTypes, pokemonActions] = genReduxType({ name: 'pokemon' })


////////// Initial State ////////
const initialState = {
  placeholderData: null,
  error: null
}


////////// Reducer ///////////
export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload[name] }

    case pokemonTypes.GET_FAILED:
      return {
        ...state,
        error: payload,
        loading: false
      }

    case pokemonTypes.GET_SUCCESS:
      return {
        ...state,
        placeholderData: payload,
        loading: false
      }

    default:
      return state
  }
}

