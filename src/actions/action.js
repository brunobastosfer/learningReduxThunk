import axios from 'axios'

const loadDataRequest = () => {
    return {
        type: 'LOAD_DATA_REQUEST'
    }
}

const loadDataError = () => {
    return {
        type: 'LOAD_DATA_ERROR',
    }
}

const loadDataSuccess = (data) => {
    return {
        type: 'LOAD_DATA_SUCCESS',
        data
    }
}

export const loadData = () => {
    return dispatch => {
        dispatch(loadDataRequest())
        axios.get('http://httpbin.org/ip')
        .then(({data}) => dispatch(loadDataSuccess(data)))
        .catch(() => dispatch(loadDataError()))
    }
}