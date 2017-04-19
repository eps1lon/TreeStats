import { connect } from 'react-redux';

import DownloadLink from '../components/DownloadLink.jsx';  

const mapStateToProps = (state) => {
  return {
    url: state.get('heatmap').get('data_url'),
  };
};

export default connect(mapStateToProps)(DownloadLink);
