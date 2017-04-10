import { connect } from 'react-redux';

import Zoomable from '../components/Zoomable.jsx';
import { commandExecuted, zoomed } from '../actions/zoom';
import { immutableToTransform } from '../../d3_util';

const mapStateToProps = (state) => {
  return {
    zoom: immutableToTransform(state.getIn(['zoom', 'transform'])),
    command: state.getIn(['zoom', 'command']),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    commandExecuted: () => dispatch(commandExecuted()),
    onZoom: (transform) => dispatch(zoomed(transform)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Zoomable);
