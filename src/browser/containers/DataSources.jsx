import { connect } from 'react-redux';

import { setActive } from '../actions/data';

import DataSources from '../components/DataSources.jsx';

const mapStateToProps = (state) => {
  return {
    sources: state.getIn(['data', 'sources']),
    active: state.getIn(['data', 'active']),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (event) => {
      const select = event.target;
      const index = select.selectedIndex;
      const option = select.options.item(index);

      if (option) {
        const value = option.getAttribute('value');
        dispatch(setActive(value));
      }
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataSources);
