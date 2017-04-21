import { connect } from 'react-redux';

import { heatmapLabel } from '../reducers/index';
import DownloadLink from '../components/DownloadLink.jsx';

const mapStateToProps = (state) => {
  return {
    filename: heatmapLabel(state) + '.png',
    url: state.get('heatmap').get('data_url'),
  };
};

export default connect(mapStateToProps)(DownloadLink);
