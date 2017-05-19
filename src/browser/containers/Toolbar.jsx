import React from 'react';
import { connect } from 'react-redux';

import { resetZoom } from '../actions/zoom';

import AppState from './AppState.jsx';
import DownloadHeatmap from './DownloadHeatmap';

/**
 * various tools for the app
 */
class Toolbar extends React.Component {
  /**
   * @return {JSX}
   */
  render() {
    const { resetZoom } = this.props;

    return (
      <div className="toolbar">
        <AppState />
        <button onClick={resetZoom}>resetZoom</button>
        <DownloadHeatmap label="Download Heatmap" filename="heatmap.png" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetZoom: () => dispatch(resetZoom()),
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(Toolbar);
