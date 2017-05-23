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
