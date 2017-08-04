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

export const visibleLeagues = (poe_state, new_rows) => {
  const available_leagues = new Set(
    new_rows.map(({ league }) => String(league))
  );

  return poe_state
    .get('leagues')
    .filter((league, league_id) => available_leagues.has(league_id));
};
