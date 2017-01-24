const NodeAggregation = require('./poe/PassiveNodeAggregation');

module.exports = async (passive_tree, db, user_opts) => {
    const opts = Object.assign({
        filter: {},
        sum_blacklist_fn: () => true,
        limit: Number.POSITIVE_INFINITY,
        offset: 0,
    }, user_opts);

    return await new Promise((fulfill) => {
        db.then(function(rows) {
            const data_cursor = rows
                .find(opts.filter)
                .sort({xp: -1})
                .limit(opts.limit)
                .skip(opts.offset);

            data_cursor.exec(function(e, rows) {
                const aggregate = new NodeAggregation(rows);
                const summarized = aggregate.sum(opts.sum_blacklist_fn);

                // candidate for max value but differences
                // are not recognizeable anymore
                // const passives_taken
                // = Array.from(summarized.values()).reduce((s, v) => s + v, 0);

                // calculate the max
                const max = Math.max(...summarized.values()); // most taken

                // relative to trees which doesnt actually change the image,
                // just doesnt look as dramatic
                // const max = rows.length;

                // create the data for the heatmaps.js api
                const data = [...summarized].map((entry) => {
                    const [node_id, sum] = entry;

                    const node = passive_tree.nodes.get(+node_id);

                    return {
                        x: node.x,
                        y: node.y,
                        value: sum,
                    };
                });

                // update the heatmap data
                fulfill({
                    max: max,
                    data: data,
                    tally: rows.length,
                });
            });
        });
    });
};
