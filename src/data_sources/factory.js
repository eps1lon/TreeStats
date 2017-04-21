import { basename } from 'path';

import CsvDataSource from './CsvDataSource';

export const CSV_SOURCE = 'CSV_SOURCE';

/**
 * first try .type
 * then try file extension
 *
 * @param {Object} data_source
 * @return {string} the implementation  for data_source
 */
export function guessType(data_source) {
  if (data_source.type) return data_source.type;

  if (data_source.filename) {
    const extension = data_source.filename.match(/\.([a-z]+)$/i) || [];

    switch (extension[1].toLowerCase()) {
    case 'csv':
      return CSV_SOURCE;
    }
  }

  return undefined;
};

/**
 * @param {AbstractDataSource} data_source
 * @return {string} a label for the given source
 */
export function label(data_source) {
  if (data_source === undefined) {
    return 'undefined';
  } else if (data_source.filename) {
    // TODO extension support
    return basename(data_source.filename, '.csv');
  } else {
    return 'generic-source';
  }
}

/**
 * @param {Object} data_source
 * @return {AbstractDataSource}
 */
export default function dataSource(data_source) {
  const type = guessType(data_source);

  switch (type) {
  case CSV_SOURCE:
    return new CsvDataSource(data_source.filename);
  default:
    throw new Error(`no implementation for ${type} found`);
  }
};

/**
 * @param {string} filename to json (array of objects for #dataSource)
 * @return {Promise}
 */
export async function jsonFactory(filename) {
  return fetch(filename)
    .then((response) => response.json())
    .then((sources) => sources.map(dataSource));
};
