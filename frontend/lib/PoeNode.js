const orbit_radii = [0, 82, 162, 335, 493];
const skills_per_orbit = [1, 6, 12, 12, 40];

/**
 * special node types
 * @type {[*]}
 */
const types = [
    "keystone",
    "mastery",
    "notable",
    "start",
    "ascendancy",
    "jewel_socket"
];

class PoeNode {
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
        return !types.some(t => this[t])
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
           ...types,
           "normal"
       ].filter(t => this[t])
    }

    get group_id() {
        return this.props.g
    }

    get radius() {
        return orbit_radii[this.props.o]
    }

    get size() {
        const order = [this.keystone, this.notable || this.mastery, true];
        return order.length - order.indexOf(true)
    }

    /**
     * calculates the radiant angle at which the node is located in its orbit
     *
     * consider a clock
     * the oidx starts at 0:00 and moves counter clockwise
     * angles in math increases counter clockwise starting at 3:00
     * we need to adjust the angle accordingly
     *
     * @returns {number}
     */
    get angle() {
        const tau = 2 * Math.PI
        return (tau * (1 - this.props.oidx / skills_per_orbit[this.props.o]) + tau / 4) % tau
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