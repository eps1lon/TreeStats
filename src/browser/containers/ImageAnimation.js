import { connect } from 'react-redux';

import {
  addCurrent, clear,
  stepBackward, stepForward, fastBackward, fastForward, playToggle,
} from '../actions/heatmap_history';
import ImageAnimation from '../components/ImageAnimation.jsx';

const imageFactory = (history) => {
  return {
    label: history.payload.hash.toString(),
    src: undefined,
  };
};

const mapStateToProps = (state) => {
  return {
    images: state.getIn(['heatmap_history', 'history']).map(imageFactory),
    playing: state.getIn(['heatmap_history', 'playing']),
    current_frame: state.getIn(['heatmap_history', 'current_frame']),
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
