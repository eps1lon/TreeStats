import React from 'react';
import {connect} from 'react-redux';

import {zoom as d3_zoom} from 'd3-zoom';
import {select, event} from 'd3-selection';

import DataFilter from './DataFilter.jsx';
import HeatmapConf from './HeatmapConf.jsx';
import TreeHeatmap from './TreeHeatmap.jsx';
import PassiveTree from './PassiveTree.jsx';
import PassiveTreeConf from './PassiveTreeConf.jsx';

import {zoom} from '../actions/app';

/**
 *
 */
class TreeStatsApp extends React.Component {
    /**
     * creates a d3 zoom behavior for the div wrapper
     * @return {d3-zoomBehavior}
     */
    zoomBehavior() {
        return d3_zoom().on('zoom', () => this.props.onZoom(event.transform));
    }

    /**
     * @override
     */
    componentDidMount() {
        select(this.refs.heatmap_wrapper).call(this.zoomBehavior());
    };

    /**
     * @return {JSX}
     */
    render() {
        const {tally, width, height} = this.props;
        const style = {width, height};

        return (
            <div className="react-fragment">
                <DataFilter />
                <HeatmapConf />
                <PassiveTreeConf />
                <h2>{tally} trees evaluated</h2>
                <div className="heatmap-wrapper" style={style} ref="heatmap_wrapper">
                    <TreeHeatmap />
                    <PassiveTree />
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        tally: state.rows.rows.length,
        width: state.app.width,
        height: state.app.height,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onZoom: (transform) => {
            dispatch(zoom(transform));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TreeStatsApp);
