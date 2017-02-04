import React from 'react';
import {connect} from 'react-redux';

import {select, event} from 'd3-selection';
import {zoom, zoomIdentity} from 'd3-zoom';

import DataFilter from './DataFilter.jsx';
import HeatmapConf from './HeatmapConf.jsx';
import TreeHeatmap from './TreeHeatmap.jsx';
import PassiveTree from './PassiveTree.jsx';
import PassiveTreeConf from './PassiveTreeConf.jsx';

import HeatmapLegend from '../components/HeatmapLegend.jsx';

import browserTransform from '../../d3-transform-browser';

/**
 *
 */
class TreeStatsApp extends React.Component {
    state = {
        zoom: zoomIdentity,
    }

    componentDidMount() {
        select(this.refs.heatmap_wrapper).call(this.zoomBehavior());
    }

    zoomBehavior() {
        return zoom()
            .on('zoom', () => {
                this.setState({
                    zoom: event.transform,
                });
            });
    }

    /**
     * @return {JSX}
     */
    render() {
        const {tally, legend} = this.props;
        const zoom = browserTransform(this.state.zoom);

        return (
            <div className="react-fragment">
                <DataFilter />
                <HeatmapConf />
                <PassiveTreeConf />
                <h2>{tally} trees evaluated</h2>
                <HeatmapLegend data={legend} />
                <div className="heatmap-wrapper" ref="heatmap_wrapper">
                    <div className="zoomable" style={{transform: zoom}}>
                        <TreeHeatmap />
                        <PassiveTree />
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        legend: state.heatmap.legend,
        tally: state.rows.rows.length,
    };
};

export default connect(
    mapStateToProps,
)(TreeStatsApp);
