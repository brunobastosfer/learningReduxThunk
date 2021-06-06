import { INITIAL_STATE } from './INITIAL_STATE'

const ua = (state = INITIAL_STATE, action) => {
    switch(action.type){
      case 'LOAD_UA_REQUEST':
        return {
          isFetching: false,
          data: [],
          error: false
        }
      case 'LOAD_UA_SUCCESS':
        return {
          isFetching: false,
          data: action.data
        }
        case 'LOAD_UA_ERROR':
          return {
            isFetching: false,
            data: [],
            error: true,
          }
      default:
        return state
      }
  }

  export default ua