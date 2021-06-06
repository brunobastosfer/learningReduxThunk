import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/action';

class UserAgent extends React.Component {
  componentDidMount() {
    this.props.loadData()
}
  render() {
      console.log(this.props.data)
    if(this.props.isFetching){
      return <span>Carregando...</span>
    }
    if(this.props.error) {
      return <span>Ocorreu um erro!</span>
    }
    return <span>User-Agent {this.props.data['user-agent']}</span>
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.ua.isFetching,
    data: state.ua.data,
    error: state.ua.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(actions.loadUA())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAgent)