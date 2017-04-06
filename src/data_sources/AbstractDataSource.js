/**
 * a source for nedb
 */
class AbstractDataSource {
  /**
   * get the rows of the source in a Promise
   * @return {Promise}
   */
  rows() {
    return new Promise((fulfill, reject) => {
      reject('rows not implemented');
    });
  }

  /**
   * @return {Any} the PassiveTree identifier associated to this DataSource
   */
  get tree_ident() {
    return undefined;
  }
};

export default AbstractDataSource;
