import csvParse from 'csv-parse';
import AbstractDataSource from './AbstractDataSource';

/**
 * an AbstractDataSource implementation for csv
 */
class CsvDataSource extends AbstractDataSource {
  _body = null;
  _rows = null;

  /**
   * @param {string} filename
   */
  constructor(filename) {
    super();

    this.filename = filename;
  }

  /**
   * fetches the text body for csv parse
   * @param {string} filename
   * @return {Promise}
   */
  static fetch(filename) {
    return fetch(filename)
            .then((response) => response.text());
  }

  /**
   * parses a csv response into rows
   * @param {string} body
   * @return {Promise}
   */
  static parse(body) {
    return new Promise((fulfill, reject) => {
      csvParse(body, {
        auto_parse: true,
        columns: true,
        delimiter: ',',
      }, (e, rows) => {
        if (e) reject(e);
        fulfill(rows);
      });
    });
  }

  /**
   * gets body for the data source
   * and inits fetching if neccessary
   * @return  {Promise}
   */
  body() {
    if (this._body === null) {
      this._body = CsvDataSource.fetch(this.filename);
    }

    return this._body;
  }

  /**
   * gets rows for the data source
   * and inits the parsing (and fetching) if neccessary
   * @return  {Promise}
   */
  get rows() {
    if (this._rows === null) {
      this._rows = this.body().then((body) => {
        return CsvDataSource.parse(body);
      });
    }

    return this._rows;
  }

  /**
   * TODO thats more a concern of the get_trees.js task
   * @return {Any} the PassiveTree identifier associated to this DataSource
   */
  get tree_ident() {
    const match = this.filename.match(/\d+_([^_]+)_.*\.csv$/);

    if (match === null) {
      return undefined;
    }

    return match[1];
  }
};

export default CsvDataSource;
