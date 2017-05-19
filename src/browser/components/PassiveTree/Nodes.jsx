import React from 'react';

import Node from './Node.jsx';
import NodeVoronoi from './NodeVoronoi.jsx';
import PassiveTreeConf from '../../../poe/PassiveTreeConf';

/**
 *
 */
class Nodes extends React.Component {
  static propTypes = {
    conf: React.PropTypes.instanceOf(PassiveTreeConf).isRequired,
    // node_id => PassiveNode
    nodes: React.PropTypes.instanceOf(Map).isRequired,
    tooltip: React.PropTypes.func,
  }

  /**
   * @param {PassiveNode} node
   * @return {boolean} true if the node should be drawn under the current conf
   */
  isVisible(node) {
    return this.props.conf.isVisibleNode(node);
  };

  /**
   * yields all visible nodes
   */
  * drawn() {
    const { nodes } = this.props;

    for (const [node_id, node] of nodes.entries()) {
      if (this.isVisible(node)) {
        yield [node_id, node];
      }
    }
  }

  /**
   * @return {JSX}
   */
  render() {
    const { conf, dimensions, tooltip } = this.props;
    const extent = [
      [dimensions[0], dimensions[1]],
      [dimensions[2], dimensions[3]],
    ];

    return (
      <NodeVoronoi extent={extent} tooltip={tooltip}>
        {[...this.drawn()]
          .map((entry) => {
            const [node_id, node] = entry;
            return (
              <Node key={node_id} node={node} conf={conf} />
            );
          })}
      </NodeVoronoi>
    );
  }
};

export default Nodes;
