import React, { PropTypes } from 'react';
import { voronoi as d3Voronoi } from 'd3-voronoi';

import VoronoiPolygon from './VoronoiyPolygon.jsx';

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
   * jitter to prevent https://github.com/d3/d3-voronoi/issues/7
   * basically if a point config has multiple Delaunay triangulation
   * it doesnt pick one but none (sic!)
   * @return {number}
   */
  static jitter() {
    return Math.random();
  }

  /**
   * @param {object} event
   * @param {object} parent
   */
  tooltip(event) {
    if (this.props.tooltip) {
      const target = event.target;
      event.persist();

      const { top, left } = target.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;

      console.log(event);

      const id_attr = target.attributes.getNamedItem('voronoi-id');
      const node_id = id_attr && event.type !== 'mouseleave'
        ? +id_attr.value : undefined;

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
        return [
          node.x + NodeVoronoi.jitter(),
          node.y + NodeVoronoi.jitter(),
        ];
      })
    );

    return (
      <g className="passive-nodes"
        onMouseEnter={tooltip}
        onMouseLeave={tooltip}
        onMouseMove={tooltip} >
        {children.map((node, i) => {
          const node_id = node.props.node.id;
          return (
            <g key={node_id}>
              <VoronoiPolygon points={polygons[i]} id={node_id} />
              {node}
            </g>
          );
        })}
      </g>
    );
  }
}

export default NodeVoronoi;
