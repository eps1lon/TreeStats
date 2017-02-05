import React from 'react';

import PoeStats from '../poe/Stats.jsx';

import PassiveNode from '../../../poe/PassiveNode';

/**
 * creates a minor tooltip for a {PassiveNode}
 */
class PassiveNodeTooltip extends React.Component {
  static propTypes = {
    node: React.PropTypes.instanceOf(PassiveNode).isRequired,
  }

  /**
   * @return {JSX}
   */
  render() {
    const {node} = this.props;

    return (
      <div className="passive-node">
        <strong className="name">{node.name}</strong>
        <PoeStats stats={node.stats} />
      </div>
    );
  }
}

export default PassiveNodeTooltip;
