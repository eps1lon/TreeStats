import React from 'react';
import {connect} from 'react-redux';

import browserTransform from '../../d3-transform-browser';

import {select, event} from 'd3-selection';
import {zoom} from 'd3-zoom';

import {zoomed} from '../actions/zoom';

import BusyIndicator from '../components/BusyIndicator.jsx';
import DataFilter from './DataFilter.jsx';
import HeatmapConf from './HeatmapConf.jsx';
import NavTab from './NavTab.jsx';
import TreeHeatmap from './TreeHeatmap.jsx';
import PassiveTree from './PassiveTree.jsx';
import PassiveTreeConf from './PassiveTreeConf.jsx';

import HeatmapLegend from '../components/HeatmapLegend.jsx';

require('bootstrap/dist/css/bootstrap.css');
require('../style/tree.css');
require('../style/tree_heatmap.css');
require('../style/nav_tabs.css');
require('../style/form.css');
require('../style/data_filter.css');
require('../style/heatmap_conf.css');
require('../style/tree_conf.css');

/**
 *
 */
class TreeStatsApp extends React.Component {
  /**
   * @override
   * call zoomBehavior
   */
  componentDidMount() {
    select(this.refs.heatmap_wrapper).call(this.zoomBehavior());
  }

  /**
   * @return {d3-zoom}
   */
  zoomBehavior() {
    const zoomed = () => this.props.zoomed();
    return zoom()
      .on('zoom', zoomed);
  }

  /**
   * @return {JSX}
   */
  render() {
    const {busy, tally, legend, zoom} = this.props;
    const transform = browserTransform(zoom);

    return (
      <div className="react-fragment">
        <NavTab tab_key="conf">
          <DataFilter key="data_filter" />
          <HeatmapConf key="heatmap_conf" />
          <PassiveTreeConf key="tree_conf" />
        </NavTab>
          <div className="data-legend">
            <strong>trees evaluated</strong>
            <em className="data-tally">{tally}</em>

            <strong>heatmap legend</strong>
            <HeatmapLegend data={legend} />
          </div>

          <BusyIndicator busy={busy} />

          <div className="heatmap-wrapper" ref="heatmap_wrapper">
            <div className="zoomable" style={{transform}}>
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
    busy: state.rows.fetching,
    legend: state.heatmap.legend,
    tally: state.rows.rows.length,
    zoom: state.zoom,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    zoomed: () => dispatch(zoomed(event.transform)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TreeStatsApp);
