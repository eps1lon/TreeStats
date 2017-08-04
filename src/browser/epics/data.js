import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

import {
  FETCH_SOURCES_FROM_JSON,
  SET_SOURCES,
  setActive,
  setSourcesArray, setSources,
} from '../actions/data';
import { publicPath } from '../helpers/url';
import { defaultSource } from '../selectors/data';
import dataSource from '../../data_sources/factory';

const dataSourceWithPublicPath = (source) => {
  return dataSource({
    ...source,
    filename: publicPath(source.filename),
  });
};

export const getSourcesIndex = (action$) => {
  return action$.ofType(FETCH_SOURCES_FROM_JSON)
    .mergeMap((action) => {
      return ajax.getJSON(action.payload)
        .map((sources) => {
          if (Array.isArray(sources)) {
            return setSourcesArray(sources.map((source) => {
              return dataSourceWithPublicPath(source);
            }));
          } else {
            return setSources(new Map(
              Object.entries(sources)
                .map(([key, source]) => [key, dataSourceWithPublicPath(source)])
            ));
          }
        });
    });
};

export const setSourcesIndex = (action$, store) => {
  return action$.ofType(SET_SOURCES)
    .map(() => setActive(defaultSource(store.getState())));
};
