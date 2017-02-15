import React from 'react';
import { List } from 'immutable';

/**
 * considers the given List as [task, running]
 * Immutable.List provides an order wheras Map has an undefined
 * but stable order
 * and displays that
 */
class TaskState extends React.Component {
  static propTypes = {
    tasks: React.PropTypes.instanceOf(List).isRequired,
  }

  /**
   * @return {JSX}
   */
  render() {
    const { tasks } = this.props;
    return (
      <ul className="tasks">
        {tasks.map(([task, running]) => {
          const task_state = running ? 'running' : 'done';
          return (
            <li key={task}>
              <em className="task">{task}</em>...
              <em className={`state ${task_state}`}>{task_state}</em>
            </li>
          );
        })}
      </ul>
    );
  }
};

export default TaskState;
