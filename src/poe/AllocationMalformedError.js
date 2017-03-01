/**
 * error if a PassiveTreeAllocation is malformed
 * e.g. more than 2 different ascendancy nodes or starting classes
 * no closed path, etc
 */
class AllocationMalformedError extends Error {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(message);

    this.name = 'PassiveTreeAllocationMalformed';
    this.message = message;
  }
};

module.exports = AllocationMalformedError;
