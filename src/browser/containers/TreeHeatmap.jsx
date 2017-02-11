import React from 'react';
import { connect } from 'react-redux';

import { extremaChange } from '../actions/heatmap';
import Heatmap from '../components/Heatmap.jsx';

/**
 *
 */
class TreeHeatmap extends React.Component {
  /**
   * @return {JSX}
   */
  render() {
    const { conf, data, onInstanceCreation, viewbox } = this.props;

    return (
      <Heatmap
        conf={conf} data={data} viewbox={viewbox}
        onInstanceCreation={onInstanceCreation} />
    );
  }
}

const mapStateToProps = (state) => {
  const { viewbox } = state.get('passive_tree');
  const heatmap_conf = state.get('heatmap_conf');

  return {
    conf: {
      blur: heatmap_conf.get('blur') / 100,
      minOpacity: heatmap_conf.get('min_opacity') / 100,
      maxOpacity: heatmap_conf.get('max_opacity') / 100,
      radius: +heatmap_conf.get('radius'),
    },
    data: state.get('heatmap').toJS(),
    viewbox,
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
    onInstanceCreation: dispatch_props.onInstanceCreation,
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
