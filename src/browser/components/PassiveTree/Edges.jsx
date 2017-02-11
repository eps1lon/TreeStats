import React from 'react';

import Edge from './Edge.jsx';
import PassiveTreeConf from '../../../poe/PassiveTreeConf';
import PassiveNode from '../../../poe/PassiveNode';

/**
 *
 */
class Edges extends React.Component {
  static propTypes = {
    conf: React.PropTypes.instanceOf(PassiveTreeConf).isRequired,
    edges: React.PropTypes.arrayOf(
      React.PropTypes.arrayOf(React.PropTypes.instanceOf(PassiveNode))
    ).isRequired,
  }
  /**
   * @param {PassiveNode} source
   * @param {PassiveNode} target
   * @return {boolean} true if the edge should be drawn under the current conf
   */
  isVisible(source, target) {
    return this.props.conf.isVisibleEdge(source, target);
  };

  /**
   * @param {PassiveNode[]} edge nodes composing the edge
   * @return {string} a unique id for react key
   */
  edgeKey(edge) {
    return edge.map((node) => node.id).join('-');
  }

  /**
   * @return {JSX}
   */
  render() {
    const { edges } = this.props;

    return (
      <g className="passive-edges">
        {edges
          .filter((edge) => {
            return this.isVisible(...edge);
          }).map((edge) => {
            const [source, target] = edge;

            return (
              <Edge key={this.edgeKey(edge)}
                source={source} target={target} />
            );
          })}
      </g>
    );
  }
};

export default Edges;
