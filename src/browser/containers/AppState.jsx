import React from 'react';
import { connect } from 'react-redux';

import { List } from 'immutable';

import BusyIndicator from '../components/BusyIndicator.jsx';
import TaskState from '../components/TaskState.jsx';
import { getTaskState, getRunningTasks } from '../reducers/index';

/**
 * container that represents in which task state the app currently is
 * busy?, state of each task etc
 */
class AppState extends React.Component {
  static propTypes = {
    busy: React.PropTypes.bool.isRequired,
    task_state: React.PropTypes.instanceOf(List).isRequired,
  }

  state = {
    extended: false,
  }

  /**
   * react doesnt provide Immutable.List eql
   * @param {Object} new_props
   * @param {Object} new_state
   * @return {boolean} if task_state or busy changes
   */
  shouldComponentUpdate(new_props, new_state) {
    const { busy, task_state } = this.props;
    const { extended } = this.state;

    return busy != new_props.busy
      || !task_state.equals(new_props.task_state)
      || extended != new_state.extended;
  }

  /**
   * @return {JSX}
   */
  render() {
    const { busy, task_state } = this.props;
    const { extended } = this.state;
    const toggleDetails = () => this.setState({ extended: !extended });

    return (
      <div className="task-state" onClick={toggleDetails}>
        {extended && <TaskState tasks={task_state} />}
        {!extended && <BusyIndicator busy={busy} />}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    busy: getRunningTasks(state).size > 0,
    task_state: getTaskState(state),
  };
};

export default connect(
  mapStateToProps,
)(AppState);
