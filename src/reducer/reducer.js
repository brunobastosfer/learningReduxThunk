const INITIAL_STATE = {
    data: {},
    isFetching: false,
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'LOAD_DATA_REQUEST':
      return {
        isFetching: true,
        data: []
      }
    case 'LOAD_DATA_SUCCESS':
      return {
        isFetching: false,
        data: action.data
      }
    default:
      return state
    }
}