import React from 'react';
import { connect } from 'react-redux';

import { fetchSourcesFromJson } from '../actions/data';
import { heatmapTitle } from '../selectors/app';

import DataFilter from './DataFilter.jsx';
import DataSources from './DataSources.jsx';
import HeatmapConf from './HeatmapConf.jsx';
import NavTab from './NavTab.jsx';
import Tooltip from './Tooltip.jsx';
import TreeHeatmap from './TreeHeatmap.jsx';
import PassiveTree from './PassiveTree.jsx';
import PassiveTreeConf from './PassiveTreeConf.jsx';
import Toolbar from './Toolbar.jsx';
import Zoomable from './Zoomable';

import HeatmapLegend from '../components/HeatmapLegend.jsx';

/**
 *
 */
class TreeStatsApp extends React.Component {
  /**
   * call app init
   */
  componentDidMount() {
    this.props.init();
  }

  /**
   * @return {JSX}
   */
  render() {
    const { tally, legend, clean, title } = this.props;
    const class_names = ['react-fragment'];

    if (clean) {
      class_names.push('clean-view');
    }

    return (
      <main id="app" className={class_names.join(' ')}>
        <h1>{title}</h1>
        <NavTab tab_key="conf">
          <DataSources key="data" tabLabel="source" />
          <DataFilter key="data_filter" tabLabel="filter" />
          <HeatmapConf key="heatmap_conf" tabLabel="heatmap" />
          <PassiveTreeConf key="tree_conf" tabLabel="tree" />
        </NavTab>

        <div className="data-legend">
          <strong>trees evaluated</strong>
          <em className="data-tally">{tally}</em>

          <strong>heatmap legend</strong>
          <HeatmapLegend data={legend} />
        </div>

        <div
          className="heatmap-wrapper"
          ref="heatmap_wrapper">

          <Zoomable>
            <TreeHeatmap />
            <PassiveTree />
          </Zoomable>

          <Toolbar />
        </div>

        <Tooltip />
      </main>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    legend: state.getIn(['heatmap', 'legend']),
    tally: state.getIn(['rows', 'rows']).size,
    clean: state.getIn(['app', 'clean']),
    title: heatmapTitle(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: () => {
      dispatch(fetchSourcesFromJson(`sources_production.json`));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TreeStatsApp);
