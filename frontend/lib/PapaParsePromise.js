/**
 * converts the Papa.parse conf.complete function into a promise
 *
 * @param filename
 * @param conf Object conf.complete will be overridden
 * @returns {Promise}
 * @constructor
 */
const PapaParsePromise = function (filename, conf) {
    // extract to stop infinite recursion
    const complete_cb = conf.complete;

    return new Promise(function (fulfill) {
        Papa.parse(filename, Object.assign(conf, {
            complete: function (results) {
                fulfill(complete_cb(results));
            }
        }));
    });
}
