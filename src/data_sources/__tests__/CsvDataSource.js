import { assert } from 'chai';
import fetchMock from 'fetch-mock';
import fs from 'fs';
import path from 'path';

import CsvDataSource from '../CsvDataSource';

const fixtures = {
  empty: './fixtures/empty.csv',
  working_url: './fixtures/example_small.csv',
  404: './404.csv',
  tree_url: './fixtures/324324_260_testTree.csv',
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

describe('CsvDataSource', function() {
  describe('.fetch()', function() {
    it('should return a promise', function() {
      assert.instanceOf(CsvDataSource.fetch(fixtures.working_url), Promise);
    });

    it('should be done sometimes', async function() {
      const body = await CsvDataSource.fetch(fixtures.working_url);
      assert.ok(body);
    });
  });

  describe('.parse()', function() {
    it('should parse a file body', async function() {
      const body = await CsvDataSource.fetch(fixtures.working_url);

      const rows = await CsvDataSource.parse(body);

      assert.equal(rows.length, 681);
    });
  });

  describe('#fetch', function() {
    it('should implement AbstractDataSource#rows getter', async function() {
      const source = new CsvDataSource(fixtures.working_url);
      const rows = await source.rows;

      assert.equal(rows.length, 681);
    });

    it('should cache the response (check time)', async function() {
      const source = new CsvDataSource(fixtures.working_url);

      let start = new Date();
      await source.rows;
      const fetch_time = new Date() - start;

      const start2 = new Date();
      await source.rows;
      const fetch_time2 = new Date() - start2;

      assert.isBelow(fetch_time2, fetch_time);
      assert.equal(fetch_time2, 0);
    });
  });

  describe('.tree', function() {
    it('should not have a tree on non-conformant filenames', function() {
      const non_conformant_source = new CsvDataSource(fixtures.working_url);

      assert.equal(non_conformant_source.tree_ident, undefined);
    });

    it('should have a tree ident on conformant filenames', function() {
      const conformant_source = new CsvDataSource(fixtures.tree_url);

      assert.equal(conformant_source.tree_ident, '260');
    });
  });
});
