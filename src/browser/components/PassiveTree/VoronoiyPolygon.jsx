import React from 'react';

/**
 * displays a polygon from voronoin().polygons()
 */
class VoronoiPolygon extends React.Component {
  static propTypes = {
    id: React.PropTypes.any,
    points: React.PropTypes.array,
  }

  /**
   * @return {JSX}
   */
  render() {
    const points = this.props.points.map((p) => p.join(',')).join(' ');
    const { id } = this.props;

    return (
      <polygon is voronoi-id={id} class="voronoi" points={points} />
    );
  }
};

export default VoronoiPolygon;
