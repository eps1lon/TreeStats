import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs';

import { SET_DB } from '../actions/db';
import { setVisible } from '../actions/poe';

export const availableLeagues = (action$, store) => {
  return action$
    .ofType(SET_DB)
    .mergeMap((action) => {
      // observable from callback
      return Observable.create((observer) => {
        // findAll
        action.payload.db.find({}, (err, rows) => {
          // .groupBy(league)
          const league_ids = rows.reduce((league_ids, row) => {
            return league_ids.add(String(row.league));
          }, new Set());

          observer.next(setVisible([...league_ids]));
          observer.complete();
        });
      });
    });
};
