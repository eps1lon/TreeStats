import React from 'react';
import PassiveTreeConf from '../../../poe/PassiveTreeConf';
import PassiveNode from '../../../poe/PassiveNode';

/**
 *
 */
class Node extends React.Component {
    static propTypes = {
        conf: React.PropTypes.instanceOf(PassiveTreeConf).isRequired,
        node: React.PropTypes.instanceOf(PassiveNode).isRequired,
    }

    /**
     * @return {JSX}
     */
    render() {
        const {node, conf} = this.props;
        const {x, y, size, types} = node;
        const class_name = [...types, 'tree_node'].join(' ');

        return (
            <circle
                cx={x} cy={y} r={size*conf.node_scale}
                className={class_name} />
        );
    }
};

export default Node;
