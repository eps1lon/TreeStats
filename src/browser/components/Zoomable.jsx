import React from 'react';

import { event, select } from 'd3-selection';
import { zoom } from 'd3-zoom';

import browserTransform from '../../d3-transform-browser';

/**
 * creates a zoomable div
 */
class Zoomable extends React.PureComponent {
  zoom = null

  /**
   * set the zoom behavior
   */
  componentWillMount() {
    this.zoom = this.zoomBehavior();
  }

  /**
   * @override
   * call zoomBehavior
   */
  componentDidMount() {
    select(this.refs.zoomWrapper).call(this.zoom);
  }

  /**
   * creates a d3 zoom zoomBehavior
   * this should be called once in the component lifecycle
   * @return {d3-zoom}
   */
  zoomBehavior() {
    const zoomed = () => this.props.onZoom(event.transform);
    return zoom()
      .on('zoom', zoomed);
  }

  /**
   * @return {JSX}
   */
  render() {
    const { zoom } = this.props;
    const transform = browserTransform(zoom);

    // we need to double wrap this up or else
    // we get nasty flicker on panning
    return (
      <div ref="zoomWrapper">
        <div className="zoomable" style={{ transform }}>
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default Zoomable;
