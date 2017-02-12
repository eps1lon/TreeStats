import React from 'react';

import { event, select } from 'd3-selection';
import { zoom, zoomIdentity } from 'd3-zoom';

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
   * resets the zoom
   */
  resetZoom() {
    this.zoom.transform(select(this.refs.heatmap_wrapper), zoomIdentity);
  }

  /**
   * @return {JSX}
   */
  render() {
    const { transform } = this.props;
    const cssTransform = browserTransform(transform);

    // we need to double wrap this up or else
    // we get nasty flicker on panning
    return (
      <div ref="zoomWrapper">
        <div className="zoomable" style={{ transform: cssTransform }}>
          <a href="#" onClick={() => this.resetZoom()}>reset zoom</a>
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default Zoomable;
