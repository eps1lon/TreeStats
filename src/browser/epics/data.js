import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

import { push } from 'react-router-redux';

import {
  FETCH_SOURCES_FROM_JSON,
  SET_ACTIVE,
  SET_SOURCES,
  setActive,
  setSourcesArray, setSources,
} from '../actions/data';
import { publicPath } from '../helpers/url';
import { defaultSource } from '../selectors/data';
import { getLocation } from '../selectors/routing';
import dataSource from '../../data_sources/factory';

export const getSourcesIndex = (action$) => {
  return action$.ofType(FETCH_SOURCES_FROM_JSON)
    .mergeMap((action) => {
      return ajax.getJSON(action.payload)
        .map((sources) => {
          if (Array.isArray(sources)) {
            return setSourcesArray(sources.map((source) => {
              source.filename = publicPath(source.filename);
              return dataSource(source);
            }));
          } else {
            return setSources(new Map(
              Object.entries(sources)
                .map(([key, source]) => [key, dataSource(source)])
            ));
          }
        });
    });
};

export const setSourcesIndex = (action$, store) => {
  return action$.ofType(SET_SOURCES)
    .map(() => setActive(defaultSource(store.getState())));
};

export const sourceInLocation = (action$, store) => {
  return action$
    .ofType(SET_ACTIVE)
    .map(({ payload: { active } }) => push({
      ...getLocation(store.getState()).toJS(),
      query: {
        source: active,
      },
    }));
};
