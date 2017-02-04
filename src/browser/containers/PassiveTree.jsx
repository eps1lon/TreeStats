import React from 'react';
import {connect} from 'react-redux';

import {select} from 'd3-selection';

import PassiveTreeConf from '../../poe/PassiveTreeConf';

import Nodes from '../components/PassiveTree/Nodes.jsx';
import Edges from '../components/PassiveTree/Edges.jsx';
import Groups from '../components/PassiveTree/Groups.jsx';

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
        const old_props = this.props;
        return !old_props.tree.equals(new_props.tree)
            || !old_props.conf.equals(new_props.conf);
    }

    /**
     * @return {JSX}
     */
    render() {
        const {conf, tree} = this.props;

        return (
            <svg className="passive-tree" viewBox={tree.viewbox.join(' ')}>
                <Nodes nodes={tree.nodes} conf={conf} />
                <Edges edges={tree.edges} conf={conf} />
                <Groups nodes={tree.nodes} groups={tree.groups} conf={conf} />
            </svg>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        conf: new PassiveTreeConf(state.passive_tree, state.passive_tree_conf),
        tree: state.passive_tree,
    };
};

export default connect(
    mapStateToProps,
)(PassiveTree);
