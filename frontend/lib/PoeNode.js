const orbit_radii = [0, 82, 162, 335, 493]
const skills_per_orbit = [1, 6, 12, 12, 40]

/**
 * special node types
 * @type {[*]}
 */
const types = [
    "keystone",
    "mastery",
    "notable",
    "start",
    "ascendancy"
]

class PoeNode {
    constructor(props, groups) {
        this.props = props
        this.group = groups[props.g]
    }

    static get types() {
        return
    }

    get name() {
        return this.props.dn
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
        var order = [this.keystone, false, this.props.notable || this.props.mastery, true]
        return order.length - order.indexOf(true)
    }

    /**
     * calculates the radiant angle at which the node is located in its orbit
     *
     * @returns {number}
     */
    get angle() {
        return 2 * Math.PI * this.props.oidx / skills_per_orbit[this.props.o] - .5 * Math.PI
    }

    get x() {
        return this.group.x + this.radius * Math.cos(this.angle)
    }

    get y() {
        return this.group.y + this.radius * Math.sin(this.angle)
    }
}