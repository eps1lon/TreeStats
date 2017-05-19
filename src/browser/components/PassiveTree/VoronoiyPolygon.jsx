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
      <polygon className="voronoi" points={points} />
    );
  }
};

export default VoronoiPolygon;
