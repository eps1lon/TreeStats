import { connect } from 'react-redux';

import { addCurrent } from '../actions/animation';
import ImageAnimation from '../components/ImageAnimation.jsx';

const mapStateToProps = (state) => {
  return {
    images: state.getIn(['animation', 'heatmaps']),
    playing: state.getIn(['animation', 'playing']),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: () => dispatch(addCurrent()),
    onClear: () => dispatch({ type: 'CLEAR' }),
    onFastBackward: () => dispatch({ type: 'FAST_BACKWARD' }),
    onFastForward: () => dispatch({ type: 'FAST_FORWARD' }),
    onStepBackward: () => dispatch({ type: 'STEP_BACKWARD' }),
    onStepForward: () => dispatch({ type: 'STEP_FORWARD' }),
    onPlay: () => dispatch({ type: 'PLAY_TOGGLE' }),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImageAnimation);
