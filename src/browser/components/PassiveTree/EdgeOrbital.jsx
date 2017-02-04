import React from 'react';
import PassiveNode from '../../../poe/PassiveNode';

/**
 * draws a straight line from source to target
 */
class EdgeOrbital extends React.Component {
    static propTypes = {
        className: React.PropTypes.string,
        source: React.PropTypes.instanceOf(PassiveNode).isRequired,
        target: React.PropTypes.instanceOf(PassiveNode).isRequired,
    }

    /**
     * describes an svg arc between two PassiveNodes
     * @return {string} path for d attribute
     */
    describeArc() {
        const {source, target} = this.props;

        const x = source.group.x;
        const y = source.group.y;
        const r = source.radius;
        const tau = 2 * Math.PI;

        let source_angle = source.angle;
        let target_angle = target.angle;

        if (source_angle > target_angle) {
            [source_angle, target_angle] = [target_angle, source_angle];
        }

        if (target_angle - source_angle > tau) {
            target_angle = tau - Number.EPSILON;
        }

        let sweep = 0;
        if (target_angle - source_angle > Math.PI) {
            sweep = 1;
        }

        return [
            'M',
            x + Math.cos(source_angle) * r,
            y - Math.sin(source_angle) * r,
            'A', r, r, 0, 0, sweep,
            x + Math.cos(target_angle) * r,
            y - Math.sin(target_angle) * r,
        ].join(' ');
    }

    /**
     * @return {JSX}
     */
    render() {
        const {className} = this.props;

        return (
            <path className={className}
                d={this.describeArc()} />
        );
    }
};

export default EdgeOrbital;
