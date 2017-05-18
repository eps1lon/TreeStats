import React from 'react';
import { connect } from 'react-redux';

import PassiveTreeConf from '../../poe/PassiveTreeConf';

import Nodes from '../components/PassiveTree/Nodes.jsx';
import Edges from '../components/PassiveTree/Edges.jsx';
import Groups from '../components/PassiveTree/Groups.jsx';
import Tooltip from '../components/PassiveTree/Tooltip.jsx';

import { showTooltip } from '../actions/tooltip';

export const tree_visual_changed = (old_props, new_props) => {
    return !old_props.tree.equals(new_props.tree)
      || !old_props.conf.equals(new_props.conf);
};

/**
 *
 */
class PassiveTree extends React.Component {
  /**
   * should update if the tree changes or the config
   * @param {Object} new_props
   * @return {boolean}
   */
  shouldComponentUpdate(new_props) {
    return tree_visual_changed(this.props, new_props);
  }

  /**
   * @return {JSX}
   */
  render() {
    const { conf, tree, tooltip } = this.props;

    return (
      <svg className="passive-tree" viewBox={tree.viewbox.join(' ')}>
        <Edges edges={tree.edges} conf={conf} />
        <Nodes nodes={tree.nodes} conf={conf} />
        <Groups nodes={tree.nodes} groups={tree.groups} conf={conf} />
        <Tooltip conf={conf} tree={tree} tooltip={tooltip} />
      </svg>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    // TODO add class instanciation to reducer
    conf: new PassiveTreeConf(state.get('passive_tree_conf').toJS()),
    tree: state.get('passive_tree'),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tooltip: (x, y, node_id, event) => {
      dispatch(showTooltip(x, y, node_id, event));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PassiveTree);
