import React from 'react';

import Stat from './Stat.jsx';

/**
 * creates a list of stats (see content.ggpk)
 */
class Stats extends React.Component {
  static propTypes = {
    stats: React.PropTypes.arrayOf(Object),
  }

  /**
   * @return {JSX}
   */
  render() {
    const { stats } = this.props;

    return (
      <ul className="poe stats">
        {stats.map((stat, i) => <Stat key={i} desc={stat} />)}
      </ul>
    );
  }
}

export default Stats;
