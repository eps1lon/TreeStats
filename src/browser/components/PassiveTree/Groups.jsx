import React from 'react';

import Group from './Group.jsx';
import PassiveTreeConf from '../../../poe/PassiveTreeConf';

/**
 *
 */
class Groups extends React.Component {
  static propTypes = {
    conf: React.PropTypes.instanceOf(PassiveTreeConf).isRequired,
    // group_id => Object
    groups: React.PropTypes.instanceOf(Map).isRequired,
    // node_id => PassiveNode
    nodes: React.PropTypes.instanceOf(Map).isRequired,
  }

  /**
   * @return {Map} group_id => visible nodes
   */
  get visible_nodes() {
    // group_id => nodes of that group
    // init with empty node list
    const nodes = new Map(
      [...this.props.groups.entries()].map((entry) => [+entry[0], []])
    );

    for (const [, node] of this.props.nodes) {
      if (this.props.conf.isVisibleNode(node)) {
        nodes.get(node.group_id).push(node);
      }
    }
    return nodes;
  }

  /**
   * @param {Object} group
   * @return {boolean} true if the group should be drawn in the current conf
   */
  isVisible(group) {
    return this.props.conf.isVisibleGroup(group);
  };

  /**
   * yields [group_id, group] for a visible group with visible nodes
   */
  * drawn() {
    const { groups } = this.props;
    const nodes = this.visible_nodes;

    for (const [group_id, group] of groups.entries()) {
      // group is visible and has visible nodes
      if (this.isVisible(group) && nodes.get(+group_id).length) {
        yield [+group_id, group];
      }
    }
  }

  /**
   * @return {JSX}
   */
  render() {
    const nodes = this.visible_nodes;

    return (
      <g className="passive-groups">
        {[...this.drawn()]
          .map((entry) => {
            const [group_id, group] = entry;
            return (
              <Group
                key={group_id}
                group={group}
                nodes={nodes.get(group_id)} />
            );
          })}
      </g>
    );
  }
};

export default Groups;
