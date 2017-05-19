import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { resetZoom } from '../actions/zoom';
import { getLocation } from '../selectors/routing';

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
    const { resetZoom, location } = this.props;

    return (
      <div className="toolbar">
        <AppState />
        <button onClick={resetZoom}>resetZoom</button>
        <DownloadHeatmap label="Download Heatmap" filename="heatmap.png" />
        <Link to={{ ...location, query: { clean: 'true' } }}>
          screenshot view
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    location: getLocation(state).toJS(),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetZoom: () => dispatch(resetZoom()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);
