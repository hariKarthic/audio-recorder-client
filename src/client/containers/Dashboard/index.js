import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dashboard from './../../components/Dashboard';
import * as action from './actions';

const mapStateToProps = state => {

  return {
    ...state.stories
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...action
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);