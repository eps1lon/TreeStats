import { connect } from 'react-redux';

import { setActive } from '../actions/data';

import DataSources from '../components/DataSources.jsx';

const mapStateToProps = (state) => {
  return {
    sources: state.get('data').get('sources'),
    active: state.get('data').get('active'),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (event) => {
      const select = event.target;
      const index = event.target.selectedIndex;
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
