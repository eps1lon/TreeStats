import React from 'react';

import { Map, is as objectsEqual } from 'immutable';

/**
 * a legend for react-heatmap
 */
class HeatmapLegend extends React.Component {
  static propTypes = {
    data: React.PropTypes.instanceOf(Map).isRequired,
  };

  /**
   * renders the legendGradient
   */
  renderLegendGradient() {
    const gradient_conf = this.props.data.get('gradient');
    const ctx = this.refs.canvas.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, 100, 1);
    for (const [offset, color] of gradient_conf.entries()) {
      gradient.addColorStop(offset, color);
    }
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 100, 10);
  }

  /**
   * render the legend gradient
   */
  componentDidMount() {
    this.renderLegendGradient();
  }

  /**
   * checks if we should render the legendGradient
   * @param {Object} old_props
   */
  componentDidUpdate(old_props) {
    if (this.shouldLegendGradientUpdate(old_props)) {
      this.renderLegendGradient();
    }
  }

  /**
   * @param {Object} new_props
   * @return {boolean}
   */
  shouldComponentUpdate(new_props) {
    return !objectsEqual(this.props, new_props);
  }

  /**
   * @param {object} other_props
   * @return {boolean} true if we should call renderLegendGradient
   */
  shouldLegendGradientUpdate(other_props) {
    return !objectsEqual(
      this.props.data.get('gradient'),
      other_props.data.get('gradient'),
    );
  }

  /**
   * @return {JSX}
   */
  render() {
    const min = this.props.data.get('min');
    const max = this.props.data.get('max');

    return (
      <div className="heatmap-legend">
        <em className="heatmap-min">{min}</em>
        <em className="heatmap-max">{max}</em>
        <canvas ref="canvas" width="100" height="10" />
      </div>
    );
  }
};

export default HeatmapLegend;
