import { Map, Set } from 'immutable';

const { SET_VISIBLE } = require('../actions/poe');
const POE = require('../../poe/data');

const initial = Map({
  classes: Map(POE.classes),
  leagues: Map(POE.leagues),
  visible_leagues: Set(), // keysof leagues
});

const poe = (state = initial, action) => {
  switch (action.type) {
    case SET_VISIBLE:
      return state.set('visible_leagues', Set(action.payload.league_ids));
    default:
      return state;
  }
};

export default poe;
