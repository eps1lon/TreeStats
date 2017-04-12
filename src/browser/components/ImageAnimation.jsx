import React from 'react';
import { List } from 'immutable';

import AnimationControls from './AnimationControls.jsx';
import ImageGallery from './ImageGallery.jsx';

/**
 *
 */
class ImageAnimation extends React.Component {
	static propTypes = {
		images: React.PropTypes.instanceOf(List).isRequired,
    onPlay: React.PropTypes.func,
    onStepBackward: React.PropTypes.func,
    onStepForward: React.PropTypes.func,
    onFastBackward: React.PropTypes.func,
    onFastForward: React.PropTypes.func,
    onAdd: React.PropTypes.func,
    onClear: React.PropTypes.func,
	};

  /**
   * @return {JSX}
   */
  render() {
    const {
      onPlay, onStepBackward, onStepForward, onFastBackward, onFastForward,
      playing,
      onAdd, onClear,
      images,
    } = this.props;

    const controls = {
      onPlay, onStepBackward, onStepForward, onFastBackward, onFastForward,
    };


    return (
      <div className="react-fragment">
        <ImageGallery images={images} />

        <button type="button" onClick={onAdd}>
          add current heatmap
        </button>
        <button type="button" onClick={onClear}>
          clear animation
        </button>

        <AnimationControls playing={playing} {...controls} />
      </div>
    );
  }
};

export default ImageAnimation;
