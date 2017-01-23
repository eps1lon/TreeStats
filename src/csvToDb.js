const csvParse = require('csv-parse');
const Nedb = require('nedb');

/**
 * creates a nedb from a csv file
 * 
 * @param filename
 * @returns {Promise}
 */
module.exports = async function (filename) {
    return await new Promise(fulfill => {
        //const body = await fetch(filename);

        fetch(filename)
            .then(response => {
                console.log('csv loaded');
                return response.text()
            })
            .then(body => {
                csvParse(body, {
                    auto_parse: true,
                    columns: true,
                    delimiter: ','
                }, (err, rows) => {
                    if (err) throw err;
                    console.log('csv parsed');

                    const db = new Nedb();

                    db.insert(rows);

                    fulfill(db);
                });
            })
        
    });
};