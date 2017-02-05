import React from 'react';

/**
 * display infos about a single Stat
 */
class Stat extends React.Component {
  static propTypes = {
    desc: React.PropTypes.string.isRequired,
  }

  /**
   * @return {JSX}
   */
  render() {
    const {desc} = this.props;
    return <li><em className="poe stat">{desc}</em></li>;
  }
};

export default Stat;
