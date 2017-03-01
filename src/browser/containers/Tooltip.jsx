import React from 'react';
import { connect } from 'react-redux';

import PassiveNodeTooltip
  from '../components/PassiveTree/PassiveNodeTooltip.jsx';

/**
 * creates a tooltip for TreeHeatmap
 */
class Tooltip extends React.Component {
  /**
   * @return {JSX}
   */
  render() {
    const [offset_left, offset_top] = [20, 0];
    const { event, node, value } = this.props;
    const contains_information = value || node;

    const top = (event.get('clientY') || 0) + window.scrollY + offset_top;
    const left = (event.get('clientX') || 0) + window.scrollX + offset_left;
    const style = { top, left };

    const class_names = ['tooltip'];
    if (contains_information) class_names.push('contains_information');

    return (
      <div className={class_names.join(' ')} style={style}>
        {node !== undefined && <PassiveNodeTooltip node={node} />}
        <p>
          <strong>taken: </strong>
          <em className="aggregated">{value || 'none taken'}</em>
        </p>
      </div>
    );
  }
};

/**
 * selector for data
 * we coould think about some caching strategy here
 * but the data list is an aggregation of nodes in our passive tree
 * and in its size roughly constant
 * @param {PassiveNode} node
 * @param {List} data
 * @return {number}
 */
const getValueFor = (node, data) => {
  if (!node) {
    return undefined;
  }

  for (const datum of data) {
    if (datum.x == node.x && datum.y == node.y) {
      return datum.value;
    }
  }

  return undefined;
};

const mapStateToProps = (state) => {
  const node_id = state.getIn(['tooltip', 'node_id']);
  const node = state.get('passive_tree').nodes.get(node_id);
  const value = getValueFor(node, state.getIn(['heatmap', 'data']));

  return {
    event: state.getIn(['tooltip', 'event']),
    node,
    value,
  };
};

export default connect(
  mapStateToProps,
)(Tooltip);
