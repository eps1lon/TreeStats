import React, { PropTypes } from 'react';
import { voronoi as d3Voronoi } from 'd3-voronoi';

import VoronoiPolygon from './VoronoiyPolygon.jsx';

/**
 * creates an svg group representing a voronoi diagram of the
 * provided nodes
 */
class Voronoi extends React.Component {
  static propTypes = {
    nodes: PropTypes.array.isRequired,
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
    const { nodes, extent } = this.props;

    const tooltip = this.tooltip.bind(this);

    const voronoi = d3Voronoi()
      .x((d) => d.x)
      .y((d) => d.y)
      .extent(extent);

    return (
      <g className="voronoi"
        onMouseEnter={tooltip}
        onMouseMove={tooltip}
        onMouseLeave={tooltip}>
        {voronoi.polygons(nodes).map((points, i) => {
          return (
            <VoronoiPolygon key={i}
              points={points} id={nodes[i].id} />
          );
        })}
      </g>
    );
  }
}

export default Voronoi;
