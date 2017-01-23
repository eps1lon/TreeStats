const self = require('./PassiveNodeConst');
const tau = 2 * Math.PI;

module.exports = class {
    constructor(props, groups) {
        this.props = props;
        this.group = groups[this.group_id];
    }

    get name() {
        return this.props.dn
    }

    get orbit() {
        return this.props.o
    }

    get keystone() {
        return this.props.ks
    }

    get mastery() {
        return this.props.m
    }

    get notable() {
        return this.props.not
    }

    get ascendancy() {
        return !!this.props.ascendancyName
    }

    get jewel_socket() {
        return this.props.isJewelSocket
    }

    // classes used to have a common start point
    get start() {
        return this.props.spc.length > 0
    }

    get adjacent() {
        return this.props.out
    }

    /**
     * normal node if not any special type
     *
     * @returns {boolean}
     */
    get normal() {
        return !self.types.some(t => this[t])
    }

    /**
     * although they should be mutually exclusive
     * the data has flags for each of this type
     * it should only return arrays with one element
     *
     * @returns {Array.<string>}
     */
    get types() {
        // getters for the types
       return [
           ...self.types,
           "normal"
       ].filter(t => this[t])
    }

    get stats() {
        return this.props.sd;
    }

    get group_id() {
        return this.props.g
    }

    get radius() {
        return self.orbit_radii[this.props.o]
    }

    get size() {
        return self.sizes[Object.keys(self.sizes).filter(t => this[t])[0]]
    }

    /**
     * calculates the radiant angle at which the node is located in its orbit
     *
     * consider a clock
     * the oidx starts at 0:00 and moves clockwise
     * angles in math increases counter clockwise starting at 3:00
     * we need to adjust the angle accordingly
     *
     * @returns {number}
     */
    get angle() {
        return (tau * (1 - this.props.oidx / self.skills_per_orbit[this.props.o]) + tau / 4) % tau
    }

    /**
     * the angle if counted clockwise
     */
    get angle_clockwise() {
        return (tau * this.props.oidx / self.skills_per_orbit[this.props.o] - tau / 4) % tau
    }

    get x() {
        return this.group.x + this.radius * Math.cos(this.angle)
    }

    get y() {
        return this.group.y - this.radius * Math.sin(this.angle)
    }

    get inspect() {
        return Object.entries(Object.assign({
            angle: this.angle,
            x: this.x,
            y: this.y,
            g: Object.entries(this.group).join("\n")
        }, this.props)).map(e => `${e[0]}: ${e[1]}`).join("\n")
    }
}