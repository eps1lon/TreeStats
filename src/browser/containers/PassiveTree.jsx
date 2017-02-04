import React from 'react';
import {connect} from 'react-redux';

import {select} from 'd3-selection';

import PassiveTreeConf from '../../poe/PassiveTreeConf';
import viewboxToTransform from '../../viewboxToTransform';

import Nodes from '../components/PassiveTree/Nodes.jsx';
import Edges from '../components/PassiveTree/Edges.jsx';
import Groups from '../components/PassiveTree/Groups.jsx';

/**
 *
 */
class PassiveTree extends React.Component {
    /**
     * @param {Object} new_props
     */
    componentWillReceiveProps(new_props) {
        // we dont want all the children to be rendered again
        // and since its a big array we dont want to leave it to the child
        // component. so we just transform the svg here
        const transform = new_props.zoom;

        select(this.refs.zoomable).attr('transform', transform);
    }

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
        const {conf, tree, width, height} = this.props;
        const identity = viewboxToTransform(tree.viewbox, width, height);

        return (
            <svg className="passive-tree"><g ref="zoomable"><g transform={identity}>
                <Nodes nodes={tree.nodes} conf={conf} />
                <Edges edges={tree.edges} conf={conf} />
                <Groups nodes={tree.nodes} groups={tree.groups} conf={conf} />
            </g></g></svg>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        conf: new PassiveTreeConf(state.passive_tree, state.passive_tree_conf),
        tree: state.passive_tree,
        zoom: state.app.zoom,
        width: state.app.width,
        height: state.app.height,
    };
};

export default connect(
    mapStateToProps,
)(PassiveTree);
