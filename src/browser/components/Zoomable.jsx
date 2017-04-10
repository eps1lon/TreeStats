import React from 'react';

import { event, select } from 'd3-selection';
import { zoom, zoomIdentity } from 'd3-zoom';

import { browserTransform, transformEqual } from '../../d3_util';

export const RESET_ZOOM = 'ZOOMABLE/RESET';

/**
 * creates a zoomable div
 */
class Zoomable extends React.Component {
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
   * @param {Object} new_props
   * @return {boolean} true if applied transformations !equal
   */
  shouldComponentUpdate(new_props) {
    return !transformEqual(this.props.zoom, new_props.zoom)
      || this.props.command !== new_props.command;
  }

  /**
   * invoker for commands
   */
  componentDidUpdate() {
    switch (this.props.command) {
      case RESET_ZOOM:
        this.resetZoom();
        this.props.commandExecuted();

        break;
    }
  }

  /**
   * resets the zoom
   * this is only needed to reset the event
   */
  resetZoom() {
    select(this.refs.zoomWrapper).call(this.zoom.transform, zoomIdentity);
  }

  /**
   * @return {JSX}
   */
  render() {
    const { zoom } = this.props;
    const transform = browserTransform(zoom);
    const style = {
      transform,
      transformOrigin: `${zoom.x / zoom.k}px ${zoom.y / zoom.k}px`,
    };

    // we need to double wrap this up or else
    // we get nasty flicker on panning
    return (
      <div ref="zoomWrapper">
        <div className="zoomable" style={style}>
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default Zoomable;
