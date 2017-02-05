import React from 'react';
import {connect} from 'react-redux';

import Transform from '../../Transform';

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
    const {event, node, value} = this.props;
    const contains_information = value || node;

    const top = (event ? event.clientY + window.scrollY : 0) + offset_top;
    const left = (event ? event.clientX + window.scrollX : 0) + offset_left;
    const style = {top, left};

    console.log();

    const class_names = ['tooltip'];
    if (contains_information) class_names.push('contains_information');

    return (
      <div className={class_names.join(' ')} style={style}>
        {node !== undefined && <PassiveNodeTooltip node={node} />}
        <p><strong>taken:</strong> <em className="aggregated">{value}</em></p>
      </div>
    );
  }
};

/**
 * gets that value for a node on the heatmap under a transformation
 * @param {PassiveNode} node
 * @param {heatmap} heatmap_instance
 * @param {Transform} transform
 * @return {number|undefined}
 */
const getValueFor = (node, heatmap_instance, transform) => {
  if (!heatmap_instance || !node) {
    return undefined;
  }

  const x = transform.applyX(node.x);
  const y = transform.applyY(node.y);

  return heatmap_instance.getValueAt({x, y});
};

const mapStateToProps = (state) => {
  const {instance} = state.heatmap;
  const node = state.passive_tree.nodes.get(state.tooltip.node_id);
  const value = getValueFor(
    node, instance,
    Transform.viewboxToTransform(
      state.passive_tree.viewbox,
      state.app.width, state.app.height)
  );

  return {
    event: state.tooltip.event,
    node,
    value,
  };
};

export default connect(
  mapStateToProps,
)(Tooltip);
