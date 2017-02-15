/**
 * creates a hash from a series of numbers
 * that are sunk into the class
 *
 * @abstract
 */
class AbstractHashSink {
  static initial_hash = 0;

  /**
   *
   */
  constructor() {
    // resets also inits
    this.hash = null;

    this.reset();
  }

  /**
   * @param {any} element tries to parse the element to int
   * @return {number}
   */
  parseInt(element) {
    if (typeof element === 'string') {
      return element.charCodeAt(0);
    }

    const n = parseInt(element, 10);
    if (!isNaN(n)) {
      return n;
    }

    throw new Error(`${element} not convertable to int`);
  }

  /**
   * @param {number} n the number to add to the hash
   */
  add(n) {
    throw new Error('implement HashSink.add');
  }

  /**
   * @param {any[]} element let class decide how to convert to int
   */
  put(...elements) {
    for (const element of elements) {
      this.add(this.parseInt(element));
    }
  }

  /**
   * empties the hash
   */
  reset() {
    this.hash = this.constructor.initial_hash;
  }
};

export default AbstractHashSink;
