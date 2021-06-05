import React from 'react';
import { connect } from 'react-redux';
import { loadData } from '../actions/action';

class INFO extends React.Component {
    componentDidMount() {
        this.props.loadData()
    }
    render() {
        return (
            <div>
            {
                this.props.isFetching 
                ? <span>Carregando...</span>
                : <span>O ip é: {this.props.data.origin}</span>
            }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching,
        data: state.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(loadData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(INFO)