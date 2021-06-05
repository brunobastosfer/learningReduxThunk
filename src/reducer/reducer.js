const INITIAL_STATE = {
    data: {},
    isFetching: false,
    error: false,
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'LOAD_DATA_REQUEST':
      return {
        isFetching: false,
        data: [],
        error: false
      }
    case 'LOAD_DATA_SUCCESS':
      return {
        isFetching: false,
        data: action.data
      }
      case 'LOAD_DATA_ERROR':
        return {
          isFetching: false,
          data: [],
          error: true,
        }
    default:
      return state
    }
}