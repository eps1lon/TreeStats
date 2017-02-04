const self = require('./PassiveNodeConst');
const tau = 2 * Math.PI;

module.exports = class {
    /**
     * @constructor
     * @param {Object} props from the ggg passive skill tree data
     * @param {Object} groups all groups from the ggg passive skill tree data
     */
    constructor(props, groups) {
        this.props = props;
        this.group = groups[this.group_id];
    }

    /**
     * @return {string} name of the node
     */
    get name() {
        return this.props.dn;
    }

    /**
     * @return {string} unique id of the node
     */
    get id() {
        return this.props.id;
    }

    /**
     * @return {number} orbit index
     */
    get orbit() {
        return this.props.o;
    }

    /**
     * @return {boolean} if the node is a keystone
     */
    get keystone() {
        return this.props.ks;
    }

    /**
     * @return {boolean} if the node is a mastery
     */
    get mastery() {
        return this.props.m;
    }

    /**
     * @return {boolean} if the node is a notable
     */
    get notable() {
        return this.props.not;
    }

    /**
     * @return {boolean} if the node is a keystone
     */
    get ascendancy() {
        return !!this.props.ascendancyName;
    }

    /**
     * @return {boolean} if the node is a jewel socket
     */
    get jewel_socket() {
        return this.props.isJewelSocket;
    }

    /**
     * @return {boolean} if the node is a class start node
     */
    get start() {
        return this.props.spc.length > 0;
    }

    /**
     * @return {number[]} adjacent node ids
     */
    get adjacent() {
        return this.props.out;
    }

    /**
     * normal node if not any special type
     *
     * @return {boolean}
     */
    get normal() {
        return !self.types.some((t) => this[t]);
    }

    /**
     * although they should be mutually exclusive
     * the data has flags for each of this type
     * it should only return arrays with one element
     *
     * @return {string[]}
     */
    get types() {
        // getters for the types
        return [
            ...self.types,
            'normal',
        ].filter((t) => this[t]);
    }

    /**
     * @return {string[]} stats descriptions
     */
    get stats() {
        return this.props.sd;
    }

    /**
     * @return {number}
     */
    get group_id() {
        return this.props.g;
    }

    /**
     * @scalable
     * @return {number} radius relative to group
     */
    get radius() {
        return self.orbit_radii[this.orbit];
    }

    /**
     * @scalable
     * @return {number} size of the biggest asset
     */
    get size() {
        return self.sizes[Object.keys(self.sizes).filter((t) => this[t])[0]];
    }

    /**
     * calculates the radiant angle at which the node is located in its orbit
     *
     * consider a clock
     * the oidx starts at 0:00 and moves clockwise
     * angles in math increases counter clockwise starting at 3:00
     * we need to adjust the angle accordingly
     *
     * @return {number}
     */
    get angle() {
        return (tau *
        (1 - this.props.oidx / self.skills_per_orbit[this.props.o])
         + tau / 4) % tau;
    }

    /**
     * the angle if counted clockwise
     */
    get angle_clockwise() {
        return (tau *
        this.props.oidx / self.skills_per_orbit[this.props.o] - tau / 4) % tau;
    }

    /**
     * @scalable
     * @return {number} cartesian x
     */
    get x() {
        return this.group.x + this.radius * Math.cos(this.angle);
    }

    /**
     * @scalable
     * @return {number} cartesian y
     */
    get y() {
        return this.group.y - this.radius * Math.sin(this.angle);
    }

    /**
     * @return {string}
     */
    get inspect() {
        return Object.entries(Object.assign({
            angle: this.angle,
            x: this.x,
            y: this.y,
            g: Object.entries(this.group).join('\n'),
        }, this.props)).map((e) => `${e[0]}: ${e[1]}`).join('\n');
    }
};
