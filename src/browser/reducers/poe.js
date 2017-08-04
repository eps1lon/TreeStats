import { Map } from 'immutable';

const { UPDATE_ROWS } = require('../actions/rows');
const { visibleLeagues } = require('../selectors/poe');
const POE = require('../../poe/data');

const initial = Map({
  classes: Map(POE.classes),
  leagues: Map(POE.leagues),
  // cache the result of the corresponding selector
  // because grouping over 10k might be to expensive for mapStateToProps
  visible_leagues: Map(), // subset of leagues
});

const poe = (state = initial, action) => {
  switch (action.type) {
    case UPDATE_ROWS:
      return state.set(
        'visible_leagues',
        visibleLeagues(state, action.payload.rows)
      );
    default:
      return state;
  }
};

export default poe;
