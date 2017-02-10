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
 * @param {string} canvas_selector
 * @param {Transform} transform
 * @return {number}
 */
const getValueFor = (node, canvas_selector, transform) => {
  if (!canvas_selector || !node) {
    return undefined;
  }

  console.warn('getValueFor to be implemented');

  const x = transform.applyX(node.x);
  const y = transform.applyY(node.y);

  return 0;
};

const mapStateToProps = (state) => {
  const node_id = state.get('tooltip').get('node_id');
  const node = state.get('passive_tree').nodes.get(node_id);
  const value = getValueFor(
    node, 'canvas',
    Transform.viewboxToTransform(
      state.get('passive_tree').viewbox,
      state.get('app').get('width'), state.get('app').get('height'),
    ),
  );

  return {
    event: state.get('tooltip').get('event').toJS(),
    node,
    value,
  };
};

export default connect(
  mapStateToProps,
)(Tooltip);
