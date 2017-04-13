import { connect } from 'react-redux';

import {
  addCurrent, clear,
  stepBackward, stepForward, fastBackward, fastForward, playToggle,
} from '../actions/animation';
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
    onFastBackward: () => dispatch(fastBackward()),
    onFastForward: () => dispatch(fastForward()),
    onStepBackward: () => dispatch(stepBackward()),
    onStepForward: () => dispatch(stepForward()),
    onPlay: () => dispatch(playToggle()),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImageAnimation);
