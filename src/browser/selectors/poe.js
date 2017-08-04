const POE = require('../../poe/data');

export const leagueFromName = (league_name, not_set_value) => {
  const key = POE.leagues.findKey((league) => {
    return league.name === league_name;
  });

  if (key === undefined) {
    return not_set_value;
  } else {
    return key;
  }
};

export const visibleLeagues = (state) => {
  const visible_ids = state.getIn(['poe', 'visible_leagues']);

  return state
    .getIn(['poe', 'leagues'])
    .filter((league, league_id) => visible_ids.has(league_id));
};
