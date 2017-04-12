import React from 'react';

import AnimationControl from './AnimationControl.jsx';

/**
 *
 */
class AnimationControls extends React.Component {
  static defaultProps = {
    playing: false,
  }

	static propTypes = {
    onPlay: React.PropTypes.func,
    onStepBackward: React.PropTypes.func,
    onStepForward: React.PropTypes.func,
    onFastBackward: React.PropTypes.func,
    onFastForward: React.PropTypes.func,
    playing: React.PropTypes.bool,
	};

  /**
   * @return {JSX}
   */
  render() {
    const {
      onPlay, onStepForward, onStepBackward, onFastBackward, onFastForward,
      playing,
    } = this.props;


    return (
      <div className="animation-controls">
        <AnimationControl icon="fast-backward" onClick={onFastBackward} />
        <AnimationControl icon="step-backward" onClick={onStepBackward} />
        <AnimationControl icon={playing ? 'pause' : 'play'} onClick={onPlay} />
        <AnimationControl icon="step-forward" onClick={onStepForward} />
        <AnimationControl icon="fast-forward" onClick={onFastForward} />
      </div>
    );
  }
};

export default AnimationControls;
