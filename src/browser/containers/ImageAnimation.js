import { connect } from 'react-redux';

import { addCurrent, clear, stepBackward } from '../actions/animation';
import ImageAnimation from '../components/ImageAnimation.jsx';

const mapStateToProps = (state) => {
  return {
    images: state.getIn(['animation', 'heatmaps']),
    playing: state.getIn(['animation', 'playing']),
    current_frame: state.getIn(['animation', 'current_frame']),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: () => dispatch(addCurrent()),
    onClear: () => dispatch(clear()),
    onFastBackward: () => dispatch({ type: 'FAST_BACKWARD' }),
    onFastForward: () => dispatch({ type: 'FAST_FORWARD' }),
    onStepBackward: () => dispatch(stepBackward()),
    onStepForward: () => dispatch({ type: 'STEP_FORWARD' }),
    onPlay: () => dispatch({ type: 'PLAY_TOGGLE' }),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImageAnimation);
