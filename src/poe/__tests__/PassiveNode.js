import { expect } from 'chai';

import PassiveNode from '../PassiveNode';

import passive_nodes from './fixtures/passive_nodes';

describe('PassiveNode', function() {
  const normal_node = new PassiveNode(
    passive_nodes.valid_node_props,
    passive_nodes.groups,
  );
  testPassiveNodeProps(normal_node);

  it('should set the normal flag', function() {
    expect(normal_node.normal).to.be.true;
  });

  describe('mastery', function() {
    it('should set the mastery flag', function() {
      const node = new PassiveNode(
        passive_nodes.mastery,
        passive_nodes.groups,
      );

      expect(node.mastery).to.be.true;
    });
  });

  describe('keystone', function() {
    it('should set the keystone flag', function() {
      const node = new PassiveNode(
        passive_nodes.keystone,
        passive_nodes.groups,
      );

      expect(node.keystone).to.be.true;
    });
  });

  describe('notable', function() {
    it('should set the notable flag', function() {
      const node = new PassiveNode(
        passive_nodes.notable,
        passive_nodes.groups,
      );

      expect(node.notable).to.be.true;
    });
  });

  describe('ascendancy', function() {
    it('should set the ascendancy flag', function() {
      const node = new PassiveNode(
        passive_nodes.ascendancy,
        passive_nodes.groups,
      );

      expect(node.ascendancy).to.be.true;
    });
  });

  describe('start', function() {
    it('should set the start flag', function() {
      const node = new PassiveNode(
        passive_nodes.start,
        passive_nodes.groups,
      );

      expect(node.start).to.be.true;
    });
  });

  describe('jewel', function() {
    it('should set the jewel flag', function() {
      const node = new PassiveNode(
        passive_nodes.jewel,
        passive_nodes.groups,
      );

      expect(node.jewel_socket).to.be.true;
    });
  });
});

/**
 * test PassiveNode with the given props
 * @param {PassiveNode} node
 */
function testPassiveNodeProps(node) {
  it('should have a group', function() {
    expect(node.group_id).to.be.a('number');
    expect(node.group).to.be.a('Object');
  });

  it('should have a name', function() {
    expect(node.name).to.be.a('string');
  });

  it('should have an id', function() {
    expect(node.id).to.exist;
  });

  it('should have an numeric orbit', function() {
    expect(node.orbit).to.be.a('number');
  });

  it('should have an array of adjacents', function() {
    expect(Array.isArray(node.adjacent)).to.be.true;
  });

  it('should have an array of stats', function() {
    expect(Array.isArray(node.stats)).to.be.true;
  });

  it('should have a size', function() {
    expect(node.size).to.be.a('number');
  });

  it('should have polar coords', function() {
    expect(node.radius).to.be.a('number');
    expect(node.angle).to.be.at.gte(0).and.to.be.lte(2 * Math.PI);
  });

  it('should have cartesian coords', function() {
    expect(node.x).to.be.a('number');
    expect(node.y).to.be.a('number');
  });
};

export default testPassiveNodeProps;
