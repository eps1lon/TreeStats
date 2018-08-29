import { expect } from 'chai';

import PassiveTree from '../../PassiveTree';

import testPassiveGroupProps from '../../__tests__/PassiveGroup';
import testPassiveNodeProps from '../../__tests__/PassiveNode';

/**
 * @param {Object} tree_data ggg tree json
 */
function testFormatWith(tree_data) {
  describe('ggg json format', function() {
    it('should have nodes and groups', function() {
      expect(tree_data).to.have.property('nodes');
      expect(Array.isArray(Object.keys(tree_data.nodes))).to.be.true;

      expect(tree_data).to.have.property('groups');
      expect(Array.isArray(Object.keys(tree_data.groups))).to.be.true;
    });

    it('should pass integration tests on every group', function() {
      Object.values(tree_data.groups).forEach((group) => {
        testPassiveGroupProps(group);
      });
    });

    it('should pass integration tests on every node', function() {
      for (const node of PassiveTree.initNodes(tree_data).values()) {
        testPassiveNodeProps(node);
      }
    });
  });
}

export default testFormatWith;
