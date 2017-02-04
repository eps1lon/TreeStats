import React from 'react';
import {connect} from 'react-redux';

import DataFilter from './DataFilter.jsx';
import HeatmapConf from './HeatmapConf.jsx';
import TreeHeatmap from './TreeHeatmap.jsx';
import PassiveTree from './PassiveTree.jsx';
import PassiveTreeConf from './PassiveTreeConf.jsx';

/**
 *
 */
class TreeStatsApp extends React.Component {
    /**
     * @return {JSX}
     */
    render() {
        const {tally} = this.props;

        return (
            <div className="react-fragment">
                <DataFilter />
                <HeatmapConf />
                <PassiveTreeConf />
                <h2>{tally} trees evaluated</h2>
                <div className="heatmap-wrapper">
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
    };
};

export default connect(
    mapStateToProps,
)(TreeStatsApp);
