import path from 'path';

import POE from '../../poe/data';
import CsvDataSource from '../../data_sources/CsvDataSource';
import { fileProps } from '../../scripts/lib/treesToCsvFile';

import { getLocation } from './routing';

export const defaultSource = (state) => {
  return getLocation(state).getIn(['query', 'source'])
  || state.getIn(['data', 'sources']).keySeq().first();
};

/**
 * returns currently active source
 * @param {Map} state data state
 * @return {DataSource}
 */
export function activeSource(state) {
  return state.get('sources').get(state.get('active'));
}

/**
 * @param {DataSource?} source
 * @return {Object | undefined}
 */
export function dataSourceProps(source) {
  if (source instanceof CsvDataSource) {
    const filename = path.basename(source.filename);
    const file_props = fileProps(filename);

    if (file_props !== undefined) {
      const date = new Date(file_props.ctime);
      const tree = POE.trees.get(file_props.tree_ident);

      if (date && tree) {
        return { date, tree };
      }
    }
  }

  return undefined;
};

/**
 *
 * @param {DataSource?} source
 * @return {String}
 */
export function dataSourceHuman(source) {
  const props = dataSourceProps(source);

  if (props !== undefined) {
    return [
      props.date.toLocaleDateString(),
      props.tree.name,
    ].join(' - ');
  } else if (source instanceof CsvDataSource) {
    const filename = path.basename(source.filename);

    return filename;
  } else {
    return source.toString();
  }
};
