import React from 'react';
import {connect} from 'react-redux';

import {extremaChange, setInstance} from '../actions/heatmap';
import Heatmap from '../components/Heatmap.jsx';

/**
 *
 */
class TreeHeatmap extends React.Component {
  /**
   * @return {JSX}
   */
  render() {
    const {conf, data, onInstanceCreation, viewbox} = this.props;

    return (
        <Heatmap
          conf={conf} data={data} viewbox={viewbox}
          onInstanceCreation={onInstanceCreation} />
    );
  }
}

const mapStateToProps = (state) => {
  const {viewbox} = state.passive_tree;

  return {
    conf: {
      blur: state.heatmap_conf.blur / 100,
      minOpacity: state.heatmap_conf.min_opacity / 100,
      maxOpacity: state.heatmap_conf.max_opacity / 100,
      radius: +state.heatmap_conf.radius,
    },
    data: state.heatmap,
    viewbox,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onExtremaChange: function(data) {
      dispatch(extremaChange(data));
    },
    onInstanceCreation: (instance) => {
      dispatch(setInstance(instance));
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
