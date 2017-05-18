import React from 'react';

import Voronoi from '../Voronoi.jsx';

/**
 * voronoi diagram of the nodes of the passiveTree
 */
class Tooltip extends React.Component {
  /**
   * @return {JSX}
   */
  render() {
    const { tree, conf, tooltip } = this.props;

    const nodes = [...tree.nodes.values()]
      .filter((node) => conf.isVisibleNode(node))
      // adding jitter because of
      // https://github.com/d3/d3-voronoi/issues/12
      .map((node) => ({
        x: node.x + Math.random(),
        y: node.y + Math.random(),
        id: node.id,
      }));

    const extent = [
      [tree.dimensions[0], tree.dimensions[1]],
      [tree.dimensions[2], tree.dimensions[3]],
    ];

    return <Voronoi nodes={nodes} extent={extent} tooltip={tooltip} />;
  }
}

export default Tooltip;
