import React from 'react';
import { connect } from 'react-redux';

import { showTooltip } from '../actions/tooltip';
import { resetZoom } from '../actions/zoom';

import AppState from './AppState.jsx';
import DataFilter from './DataFilter.jsx';
import DataSources from './DataSources.jsx';
import HeatmapConf from './HeatmapConf.jsx';
import HeatmapAnimationLayer from './HeatmapAnimationLayer.jsx';
import ImageAnimation from './ImageAnimation';
import NavTab from './NavTab.jsx';
import Tooltip from './Tooltip.jsx';
import TreeHeatmap from './TreeHeatmap.jsx';
import PassiveTree from './PassiveTree.jsx';
import PassiveTreeConf from './PassiveTreeConf.jsx';
import Zoomable from './Zoomable';

import HeatmapLegend from '../components/HeatmapLegend.jsx';

/**
 *
 */
class TreeStatsApp extends React.Component {
  /**
   * @return {JSX}
   */
  render() {
    const { tally, legend, resetZoom } = this.props;
    const tooltip
      = (event) => this.props.tooltip(event, this.refs.heatmap_wrapper);

    return (
      <div className="react-fragment">
        <NavTab tab_key="conf">
          <DataSources key="data" tabLabel="source" />
          <DataFilter key="data_filter" tabLabel="filter" />
          <HeatmapConf key="heatmap_conf" tabLabel="heatmap" />
          <PassiveTreeConf key="tree_conf" tabLabel="tree" />
          <ImageAnimation key="heatmap_animation" tabLabel="animation" />
        </NavTab>

        <div className="data-legend">
          <strong>trees evaluated</strong>
          <em className="data-tally">{tally}</em>

          <strong>heatmap legend</strong>
          <HeatmapLegend data={legend} />
        </div>

        <div
          className="heatmap-wrapper"
          onMouseLeave={tooltip}
          onMouseMove={tooltip}
          ref="heatmap_wrapper">

          <Zoomable>
            <TreeHeatmap />
            <HeatmapAnimationLayer />
            <PassiveTree />
          </Zoomable>

          <div className="toolbar">
            <AppState />
            <button onClick={resetZoom}>resetZoom</button>
          </div>
        </div>

        <Tooltip />
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    legend: state.getIn(['heatmap', 'legend']),
    tally: state.getIn(['rows', 'rows']).size,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tooltip: (event, parent) => {
      event.persist();

      const { top, left } = parent.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;

      const id_attr = event.target.attributes.getNamedItem('poe-node_id');
      const node_id = id_attr ? +id_attr.value : undefined;

      dispatch(showTooltip(x, y, node_id, event));
    },
    resetZoom: () => dispatch(resetZoom()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TreeStatsApp);
