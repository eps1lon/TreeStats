import { Map } from 'immutable';
const POE = require('../../poe/data');

const initial = Map({
  classes: Map(POE.classes),
  leagues: Map(POE.leagues),
});

const poe = (state = initial, action) => {
  return state;
};

export default poe;
