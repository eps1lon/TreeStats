import {assert} from 'chai';
import fetchMock from 'fetch-mock';
import fs from 'fs';
import path from 'path';

import CsvDataSource from '../CsvDataSource';
import dataSource, {guessType, jsonFactory, CSV_SOURCE} from '../factory';

const fixtures = {
  sources: './fixtures/sources.json',
  csv_source: {type: CSV_SOURCE, filename: 'dummy.csv'},
};

// mock fetch to fixture requests
fetchMock.get('*', function(url) {
  const uri = path.join(__dirname, url);

  return new Promise((fulfill, reject) => {
    fs.readFile(uri, (e, data) => {
      if (e) reject(e);
      fulfill(data.toString());
    });
  });
});

const DUMMY_TYPE = 'DUMMY_TYPE';

describe('factory', function() {
  describe('guessType', function() {
    it('should check type first', function() {
      assert.equal(guessType({type: CSV_SOURCE}), CSV_SOURCE);
    });

    it('should check extension', function() {
      assert.equal(guessType({filename: './test.csv'}), CSV_SOURCE);
    });

    it('should prefer type extension', function() {
      assert.equal(guessType({
        type: DUMMY_TYPE,
        filename: 'test.csv',
      }), DUMMY_TYPE);
    });
  });

  describe('dataSource', function() {
    it('should throw an error if no impl', function() {
      try {
        dataSource({});
      } catch(e) {
        assert.ok(e);
      }
    });

    it('should create a dataSource', function() {
      assert.instanceOf(dataSource(fixtures.csv_source), CsvDataSource);
    });
  });

  describe('jsonFactory', function() {
    it('should return a promise', function() {
      assert.instanceOf(jsonFactory(fixtures.sources), Promise);
    });

    it('should parse json to sources', async function() {
      const sources = await jsonFactory(fixtures.sources);

      assert.equal(sources.length, 2);
    });
  });
});
