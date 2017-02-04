import React from 'react';
import {connect} from 'react-redux';

import {extremaChange} from '../actions/heatmap';
import Heatmap from '../components/Heatmap.jsx';

/**
 *
 */
class TreeHeatmap extends React.Component {
    /**
     * @return {JSX}
     */
    render() {
        const {conf, data, viewbox} = this.props;

        return (
            <Heatmap conf={conf} data={data} viewbox={viewbox} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        conf: {
            blur: state.heatmap_conf.blur / 100,
            minOpacity: state.heatmap_conf.min_opacity / 100,
            maxOpacity: state.heatmap_conf.max_opacity / 100,
            radius: +state.heatmap_conf.radius,
        },
        data: state.heatmap,
        viewbox: state.passive_tree.viewbox,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onExtremaChange: function(data) {
            dispatch(extremaChange(data));
        },
    };
};

const mergeProps = (state_props, dispatch_props, own_props) => {
    return {
        ...own_props,
        ...state_props,
        conf: {
            ...state_props.conf,
            // merge the extremachange into to conf
            // so that heatmap.js can easily work with it
            onExtremaChange: dispatch_props.onExtremaChange,
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
)(TreeHeatmap);
