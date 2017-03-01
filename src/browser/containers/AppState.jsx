import React from 'react';
import { connect } from 'react-redux';

import { List } from 'immutable';

import NProgress from 'nprogress';
import TaskState from '../components/TaskState.jsx';
import { getTaskState, getRunningTasks } from '../reducers/index';

/**
 * container that represents in which task state the app currently is
 * busy?, state of each task etc
 */
class AppState extends React.Component {
  static propTypes = {
    running: React.PropTypes.number.isRequired,
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
    const { running, task_state } = this.props;
    const { extended } = this.state;

    return running != new_props.running
      || !task_state.equals(new_props.task_state)
      || extended != new_state.extended;
  }

  /**
   * update the progress bar
   * @param {Object} prevProps
   */
  componentDidUpdate(prevProps) {
    if (prevProps.running == 0 && this.props.running > 0) {
      NProgress.start();
    } else if (prevProps.running > 0 && this.props.running == 0) {
      NProgress.done();
    }
  }

  /**
   * @return {JSX}
   */
  render() {
    const { task_state } = this.props;
    const { extended } = this.state;
    const title = 'click for details on running tasks';
    const toggleDetails = () => this.setState({ extended: !extended });

    return (
      <div className="task-state" title={title} onClick={toggleDetails}>
        {extended && <TaskState tasks={task_state} />}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    running: getRunningTasks(state).size,
    task_state: getTaskState(state),
  };
};

export default connect(
  mapStateToProps,
)(AppState);
