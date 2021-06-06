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

const loadUARequest = () => {
    return {
        type: 'LOAD_UA_REQUEST'
    }
}

const loadUAError = () => {
    return {
        type: 'LOAD_UA_ERROR',
    }
}

const loadUASuccess = (data) => {
    return {
        type: 'LOAD_UA_SUCCESS',
        data
    }
}

export const loadUA = (axios) => {
    return dispatch => {
        dispatch(loadUARequest())
        axios.get('http://httpbin.org/user-agent')
        .then(({data}) => dispatch(loadUASuccess(data)))
        .catch(() => dispatch(loadUAError()))
    }
}

export default {
    loadUA: loadUA.bind(null, axios)
}