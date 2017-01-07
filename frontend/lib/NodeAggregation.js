const NODES_KEY = "nodes"

const NodeAggregation = class NodeAggregation {
    /**
     * increments the value for the given key or creates it
     *
     * @param map
     * @param key
     */
    static incMapKey(map, key) {
        if (map.has(key)) {
            map.set(key, map.get(key) + 1)
        } else {
            map.set(key, 1)
        }
    }

    static nodeStringToArray(nodes) {
        return nodes.slice(1, nodes.length - 1).split(",")
    }

    static get nodes_key() {
        return NODES_KEY
    }

    constructor(csv_rows) {
        this.rows = csv_rows
    }



    /**
     * filters each row by the given fn
     *
     * @param fn
     * @returns {NodeAggregation}
     */
    filter(fn) {
        return new NodeAggregation(this.rows.filter(fn))
    }

    /**
     * sums up the occurences of nodes in its rows
     *
     * @returns {Map}
     */
    sum() {
        var aggregated = new Map()

        for (var row of this.rows) {
            var nodes = NodeAggregation.nodeStringToArray(row[NodeAggregation.nodes_key])

            for (var node of nodes) {
                NodeAggregation.incMapKey(aggregated, node)
            }
        }

        return aggregated
    }
}