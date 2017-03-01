import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

import {
  FETCH_SOURCES_FROM_JSON,
  SET_SOURCES,
  setActive,
  setSourcesArray,
} from '../actions/data';
import { defaultSource } from '../reducers/data';
import dataSource from '../../data_sources/factory';

export const getSourcesIndex = (action$) => {
  return action$.ofType(FETCH_SOURCES_FROM_JSON)
    .mergeMap((action) => {
      return ajax.getJSON(action.payload)
        .map((sources) => setSourcesArray(sources.map(dataSource)));
    });
};

export const setSourcesIndex = (action$, store) => {
  return action$.ofType(SET_SOURCES)
    .map(() => setActive(defaultSource(store.getState())));
};
