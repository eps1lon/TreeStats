import React from 'react';
import PassiveNode from '../../../poe/PassiveNode';

/**
 * draws a straight line from source to target
 */
class EdgeLinear extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    source: React.PropTypes.instanceOf(PassiveNode).isRequired,
    target: React.PropTypes.instanceOf(PassiveNode).isRequired,
  }

  /**
   * @return {JSX}
   */
  render() {
    const { source, target, className } = this.props;

    return (
      <line className={className}
        x1={source.x} y1={source.y}
        x2={target.x} y2={target.y} />
    );
  }
};

export default EdgeLinear;
