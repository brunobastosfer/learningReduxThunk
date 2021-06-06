import React from 'react';
import { connect } from 'react-redux';
import { loadData } from '../actions/action';

class INFO extends React.Component {
  componentDidMount() {
    this.props.loadData()
}
  render() {
    if(this.props.isFetching){
      return <span>Carregando...</span>
    }
    if(this.props.error) {
      return <span>Ocorreu um erro!</span>
    }
    return <div><span>INFO: {this.props.data.origin}</span></div>
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.ip.isFetching,
    data: state.ip.data,
    error: state.ip.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(loadData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(INFO)

// {
//   this.props.isFetching &&
//   <span>Carregando...</span>
// }
// {
//   !this.props.isFetching &&
//   <span>O ip é: {this.props.data.origin}</span>
// }
// {
//   this.props.error &&
//   <span>Ocorreu um erro!</span>
// }