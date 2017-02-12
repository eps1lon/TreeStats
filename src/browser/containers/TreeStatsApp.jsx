import React from 'react';
import { connect } from 'react-redux';

import browserTransform from '../../d3-transform-browser';
import { immutableToTransform } from '../../d3-transform-immutable';

import { select, event } from 'd3-selection';
import { zoom, zoomIdentity } from 'd3-zoom';

import { showTooltip } from '../actions/tooltip';
import { zoomed } from '../actions/zoom';

import BusyIndicator from '../components/BusyIndicator.jsx';
import DataFilter from './DataFilter.jsx';
import DataSources from './DataSources.jsx';
import HeatmapConf from './HeatmapConf.jsx';
import NavTab from './NavTab.jsx';
import Tooltip from './Tooltip.jsx';
import TreeHeatmap from './TreeHeatmap.jsx';
import PassiveTree from './PassiveTree.jsx';
import PassiveTreeConf from './PassiveTreeConf.jsx';

import HeatmapLegend from '../components/HeatmapLegend.jsx';

require('bootstrap/dist/css/bootstrap.css');
require('../style/app.css');
require('../style/tree.css');
require('../style/tree_heatmap.css');
require('../style/nav_tabs.css');
require('../style/form.css');
require('../style/data_filter.css');
require('../style/heatmap_conf.css');
require('../style/tooltip.css');
require('../style/tree_conf.css');
require('../style/tooltip.css');

/**
 *
 */
class TreeStatsApp extends React.Component {
  zoom = null

  /**
   * set the zoom behavior
   */
  componentWillMount() {
    this.zoom = this.zoomBehavior();
  }

  /**
   * @override
   * call zoomBehavior
   */
  componentDidMount() {
    select(this.refs.heatmap_wrapper).call(this.zoom);
  }

  /**
   * creates a d3 zoom zoomBehavior
   * this should be called once in the component lifecycle
   * @return {d3-zoom}
   */
  zoomBehavior() {
    const zoomed = () => this.props.zoomed();
    return zoom()
      .on('zoom', zoomed);
  }

  /**
   * resets the zoom
   */
  resetZoom() {
    this.zoom.transform(select(this.refs.heatmap_wrapper), zoomIdentity);
  }

  /**
   * @return {JSX}
   */
  render() {
    const { busy, tally, legend, zoom } = this.props;
    const tooltip
      = (event) => this.props.tooltip(event, this.refs.heatmap_wrapper);
    const transform = browserTransform(zoom);

    return (
      <div className="react-fragment">
        <NavTab tab_key="conf">
          <DataSources key="data" />
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
        <a href="#" onClick={() => this.resetZoom()}>reset zoom</a>

        <div
          className="heatmap-wrapper"
          onMouseLeave={tooltip}
          onMouseMove={tooltip}
          ref="heatmap_wrapper">

          <div className="zoomable" style={{ transform }}>
            <TreeHeatmap />
            <PassiveTree />
          </div>
        </div>

        <Tooltip />
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    busy: state.getIn(['rows', 'fetching']),
    legend: state.getIn(['heatmap', 'legend']),
    tally: state.getIn(['rows', 'rows']).size,
    zoom: immutableToTransform(state.get('zoom')),
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
    zoomed: () => dispatch(zoomed(event.transform)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TreeStatsApp);
