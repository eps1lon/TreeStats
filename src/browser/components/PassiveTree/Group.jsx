import React from 'react';
import PassiveNode from '../../../poe/PassiveNode';

/**
 *
 */
class Group extends React.Component {
    static propTypes = {
        group: React.PropTypes.object.isRequired,
        nodes: React.PropTypes.arrayOf(
                React.PropTypes.instanceOf(PassiveNode)
                ).isRequired,
    }

    /**
     * @return {JSX}
     */
    render() {
        const {group, nodes} = this.props;
        const {x, y} = group;

        const node_orbits = new Set(nodes.map((node) => node.radius));

        return (
            <g className="passive-group">
                {[...node_orbits].map((radius) => {
                    return (
                        <circle key={radius}
                            cx={x} cy={y} r={radius}
                            className="group_orbit" />
                    );
                })}
            </g>
        );
    }
};

export default Group;
