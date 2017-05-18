import React from 'react';

/**
 * displays a polygon from voronoin().polygons()
 */
class VoronoiPolygon extends React.Component {
  /**
   * @return {JSX}
   */
  render() {
    const points = this.props.points.map((p) => p.join(',')).join(' ');

    return (
      <polygon is voronoi-id={this.props.id} points={points} />
    );
  }
};

export default VoronoiPolygon;
