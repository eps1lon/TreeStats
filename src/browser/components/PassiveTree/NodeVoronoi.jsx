import React, { PropTypes } from 'react';
import { voronoi as d3Voronoi } from 'd3-voronoi';

import VoronoiPolygon from './VoronoiyPolygon.jsx';

const jitter = () => Math.random();

/**
 * creates an svg group representing a voronoi diagram of the
 * provided nodes
 */
class NodeVoronoi extends React.Component {
  static propTypes = {
    extent: PropTypes.array.isRequired,
    tooltip: PropTypes.func,
  }

  /**
   * @param {object} event
   * @param {object} parent
   */
  tooltip(event) {
    if (this.props.tooltip) {
      event.persist();

      const { top, left } = event.target.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;

      const id_attr = event.target.attributes.getNamedItem('voronoi-id');
      const node_id = id_attr ? +id_attr.value : undefined;

      this.props.tooltip(x, y, node_id, event);
    }
  }

  /**
   * @return {JSX}
   */
  render() {
    const { extent, children } = this.props;

    const tooltip = this.tooltip.bind(this);

    const voronoi = d3Voronoi()
      .extent(extent);

    const polygons = voronoi.polygons(
      children.map(({ props: { node } }) => {
        return [node.x + jitter(), node.y + jitter()];
      })
    );

    return (
      <g className="passive-nodes"
        onMouseEnter={tooltip}
        onMouseLeave={tooltip}
        onMouseMove={tooltip} >
        {children.map((node, i) => {
          return (
            <g key={node.props.node.id}>
              <VoronoiPolygon points={polygons[i]} />
              {node}
            </g>
          );
        })}
      </g>
    );
  }
}

export default NodeVoronoi;
