import {connect} from 'react-redux';

import DataSources from '../components/DataSources.jsx';

const mapStateToProps = (state) => {
  return {
    sources: new Map(),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (event) => {
      console.log(event);
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataSources);
