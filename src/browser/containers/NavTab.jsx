import React from 'react';
import {connect} from 'react-redux';

import {activate} from '../actions/nav_tabs';

/**
 * creates a bootstrap-like navtab
 */
class NavTab extends React.Component {
  /**
   * @return {JSX}
   */
  render() {
    const {children, active} = this.props;

    const navClick = (event) => this.props.navClick(event, this.props.tab_key);

    return (
      <div className='nav-tab'>
        <ul className="nav tab" onClick={navClick} role="tablist">
          {React.Children.map(children, function(child) {
            return (
              <li data-toggle={child.key}>{child.key}</li>
            );
          })}
        </ul>

        <div className="tab-content">
          {React.Children.map(children, function(child) {
            const class_names = ['tab-pane'];

            console.log(active, child.key);
            if (child.key == active) class_names.push('active');

            return <div className={class_names.join(' ')}>{child}</div>;
          })}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log('ownProps', ownProps);
  return {
    active: state.nav_tabs[ownProps.tab_key],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navClick: (event, tab_key) => {
      const key = event.target.attributes.getNamedItem('data-toggle').value;

      dispatch(activate(tab_key, key));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavTab);
