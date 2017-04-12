import React from 'react';

/**
 *
 */
class AnimationControl extends React.Component {
	static propTypes = {
    icon: React.PropTypes.string,
    onClick: React.PropTypes.func,
	};

  /**
   * @return {JSX}
   */
  render() {
    const { onClick, icon } = this.props;

    return (
      <button type="button" onClick={onClick}>
        {icon && <span className={`glyphicon glyphicon-${icon}`} />}
      </button>
    );
  }
};

export default AnimationControl;
