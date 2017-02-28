import passive_groups from './passive_groups';

// @see {http://pathofexile.gamepedia.com/Passive_Skill_Tree_JSON#nodes}
const valid_node_props = {
  g: 1,
  dn: 'ExampleName',
  id: 'node_id_1',
  ks: false,
  m: false,
  not: false,
  ascendancyName: '',
  isJewelSocket: false,
  spc: [],
  out: [],
  sd: [],
  o: 0,
  oidx: 0,
};

const passive_nodes = {
  groups: { 1: passive_groups.valid_group_props },
  valid_node_props,
  keystone: {
    ...valid_node_props,
    ks: true,
  },
  mastery: {
    ...valid_node_props,
    m: true,
  },
  notable: {
    ...valid_node_props,
    not: true,
  },
  ascendancy: {
    ...valid_node_props,
    ascendancyName: 'Elementalist',
  },
  start: {
    ...valid_node_props,
    spc: [1, 3],
  },
  jewel: {
    ...valid_node_props,
    isJewelSocket: true,
  },
};

export default passive_nodes;
