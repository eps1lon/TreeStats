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
        const {busy} = this.props;

        return <span className={`busy-indicator ${busy ? 'active' : ''}`} />;
    }
}

export default BusyIndicator;
