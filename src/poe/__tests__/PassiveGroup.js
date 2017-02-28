import { expect } from 'chai';

import passive_groups from './fixtures/passive_groups';

describe('PassiveGroup', function() {
  testPassiveGroupProps(passive_groups.valid_group_props);
});

/**
 * @param {Object} group
 */
function testPassiveGroupProps(group) {
  it('should have cartesian coords', function() {
    expect(group.x).to.be.a('number');
    expect(group.y).to.be.a('number');
  });
};

export default testPassiveGroupProps;
