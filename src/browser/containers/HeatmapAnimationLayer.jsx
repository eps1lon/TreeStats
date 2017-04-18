import React from 'react';
import { connect } from 'react-redux';

import { getCurrentHeatmap } from '../reducers/animation';

/**
 * layer for the animation of heatmap transitions
 */
class HeatmapAnimationlAyer extends React.Component {
  static propTypes = {
    src: React.PropTypes.string,
  }

  /**
   * @return {JSX}
   */
  render() {
    const { src, hidden } = this.props;

    return (
      <img src={src} className={hidden && 'hidden'} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    src: getCurrentHeatmap(state.get('animation')),
    hidden: state.getIn(['animation', 'hidden']),
  };
};

export default connect(mapStateToProps)(HeatmapAnimationlAyer);
