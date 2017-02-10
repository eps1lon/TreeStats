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
};

export default AbstractDataSource;
