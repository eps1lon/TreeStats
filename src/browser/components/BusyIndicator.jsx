import React from 'react';

/**
 * busy
 */
class BusyIndicator extends React.Component {
  static propTypes = {
    busy: React.PropTypes.bool.isRequired,
  }

  /**
   * @return {JSX}
   */
  render() {
    const { busy } = this.props;

    if (busy) {
      return <span className="busy-indicator" />;
    }
    return <span className="glyphicon glyphicon-ok-circle" />;
  }
}

export default BusyIndicator;
