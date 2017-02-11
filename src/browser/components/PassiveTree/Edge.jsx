import React from 'react';

import EdgeLinear from './EdgeLinear.jsx';
import EdgeOrbital from './EdgeOrbital.jsx';

import PassiveNode from '../../../poe/PassiveNode';

/**
 *
 */
class Edge extends React.Component {
  static propTypes = {
    source: React.PropTypes.instanceOf(PassiveNode).isRequired,
    target: React.PropTypes.instanceOf(PassiveNode).isRequired,
  }

  /**
   * @return {JSX}
   */
  render() {
    const { source, target } = this.props;
    const class_name = [
      'tree_edge', // TODO legacy css naming style
      ...source.types,
      'tree-edge-to',
      ...target.types,
    ].join(' ');

    const same_orbit
      = source.orbit == target.orbit
      && source.group_id == target.group_id;

    if (same_orbit) {
      return <EdgeOrbital className={class_name}
        source={source} target={target} />;
    }

    return <EdgeLinear className={class_name}
      source={source} target={target} />;
  }
};

export default Edge;
