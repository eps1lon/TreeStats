import React from 'react';
import { connect } from 'react-redux';

import { List } from 'immutable';

import NProgress from 'nprogress';
import TaskState from '../components/TaskState.jsx';
import { getTaskState, progress } from '../task';

/**
 * container that represents in which task state the app currently is
 * busy?, state of each task etc
 */
class AppState extends React.Component {
  static propTypes = {
    progress: React.PropTypes.number.isRequired,
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
    const { progress, task_state } = this.props;
    const { extended } = this.state;

    return progress != new_props.progress
      || task_state.hash_code !== new_props.task_state.hash_code
      || extended != new_state.extended;
  }

  /**
   * update the progress bar
   */
  componentDidUpdate() {
    if (this.props.progress === 1) {
      NProgress.done();
    } else {
      if (!NProgress.isStarted()) {
        NProgress.start();
      }

      NProgress.set(this.props.progress);
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
  const task_state = getTaskState(state);

  return {
    progress: progress(task_state),
    task_state,
  };
};

export default connect(
  mapStateToProps,
)(AppState);
