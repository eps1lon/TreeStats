const Map = require('immutable').Map;

/* eslint max-len: ["error", 120]*/
/**
 *
 */
module.exports = {
  // Map<string, LeagueProps>
  leagues: Map([
    ['1', { name: 'Breach', active: false, permanent: false }],
    ['2', { name: 'Hardcore Breach', active: false, permanent: false }],
    ['3', { name: 'Legacy', active: true, permanent: false }],
    ['4', { name: 'Hardcore Legacy', active: true, permanent: false }],
    ['5', { name: 'Standard', active: false, permanent: false }],
    ['6', { name: 'SSF Legacy', active: true, permanent: false }],
    ['7', { name: 'SSF HC Legacy', active: true, permanent: false }],
    ['8', { name: '2 Week Mayhem HC (JRE091)', active: false, permanent: false }],
    ['9', { name: '2 Week Mayhem (JRE092)', active: false, permanent: false }],
    ['10', { name: '2 Week Mayhem HC Solo (JRE093)', active: false, permanent: false }],
  ]),
  // Map<string, ClassProps>
  classes: Map([
    // name, parent is the parent class for ascendancies ie
    // character_class, ascendancy is used for url generation
    ['1', { name: 'Marauder', parent: null, character_class: 1, ascendancy: 0 }],
    ['2', { name: 'Templar', parent: null, character_class: 5, ascendancy: 0 }],
    ['3', { name: 'Witch', parent: null, character_class: 3, ascendancy: 0 }],
    ['4', { name: 'Shadow', parent: null, character_class: 6, ascendancy: 0 }],
    ['5', { name: 'Ranger', parent: null, character_class: 2, ascendancy: 0 }],
    ['6', { name: 'Duelist', parent: null, character_class: 4, ascendancy: 0 }],
    ['7', { name: 'Scion', parent: null, character_class: 7, ascendancy: 0 }],
    ['8', { name: 'Berserker', parent: 1, character_class: 1, ascendancy: 2 }],
    ['9', { name: 'Chieftain', parent: 1, character_class: 1, ascendancy: 3 }],
    ['10', { name: 'Juggernaut', parent: 1, character_class: 1, ascendancy: 1 }],
    ['11', { name: 'Inquisitor', parent: 2, character_class: 5, ascendancy: 1 }],
    ['12', { name: 'Guardian', parent: 2, character_class: 5, ascendancy: 3 }],
    ['13', { name: 'Hierophant', parent: 2, character_class: 5, ascendancy: 2 }],
    ['14', { name: 'Necromancer', parent: 3, character_class: 3, ascendancy: 3 }],
    ['15', { name: 'Occultist', parent: 3, character_class: 3, ascendancy: 1 }],
    ['16', { name: 'Elementalist', parent: 3, character_class: 3, ascendancy: 2 }],
    ['17', { name: 'Assassin', parent: 4, character_class: 6, ascendancy: 1 }],
    ['18', { name: 'Saboteur', parent: 4, character_class: 6, ascendancy: 3 }],
    ['19', { name: 'Trickster', parent: 4, character_class: 6, ascendancy: 2 }],
    ['20', { name: 'Deadeye', parent: 5, character_class: 2, ascendancy: 2 }],
    ['21', { name: 'Raider', parent: 5, character_class: 2, ascendancy: 1 }],
    ['22', { name: 'Pathfinder', parent: 5, character_class: 2, ascendancy: 3 }],
    ['23', { name: 'Slayer', parent: 6, character_class: 4, ascendancy: 1 }],
    ['24', { name: 'Gladiator', parent: 6, character_class: 4, ascendancy: 2 }],
    ['25', { name: 'Champion', parent: 6, character_class: 4, ascendancy: 3 }],
    ['26', { name: 'Ascendant', parent: 7, character_class: 7, ascendancy: 1 }],
  ]),
  trees: Map([
    // dont use underscores in the ident or adjust regexp that rely on format
    ['250', { name: '2.5.0 Breach', version: 4 }],
    ['260', { name: '2.6.0 Legacy', version: 4 }],
  ]),
  current_tree: '260',
};
