import { HYDRATE } from 'next-redux-wrapper';

///////// Service Name ////////
export const name = 'example'

///////// Action type ///////////
export const types = {
  FAILURE: 'FAILURE',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  START_CLOCK: 'START_CLOCK',
  TICK_CLOCK: 'TICK_CLOCK',
  HYDRATE: 'HYDRATE',
}

////////// Initial State ////////
const initialState = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null,
}


////////// Reducer ///////////
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload[name] }

    case types.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      }

    case types.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 },
      }

    case types.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 },
      }

    case types.RESET:
      return {
        ...state,
        ...{ count: initialState.count },
      }

    case types.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.payload },
      }

    case types.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light },
      }

    default:
      return state
  }
}

///// Actions ///////

export const actions = {
  failure: (error) => ({ type: types.FAILURE, error }),
  increment: () => ({ type: types.INCREMENT }),
  decrement: () => ({ type: types.DECREMENT }),
  reset: () => ({ type: types.RESET }),
  loadData: () => ({ type: types.LOAD_DATA }),
  loadDataSuccess: (data) => ({ type: types.LOAD_DATA_SUCCESS, payload: data }),
  startClock: () => ({ type: types.START_CLOCK }),
  tickClock: (isServer) => ({ type: types.TICK_CLOCK, light: !isServer, ts: Date.now() })
}
