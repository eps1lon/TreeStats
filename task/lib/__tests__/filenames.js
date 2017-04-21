import { expect, assert } from 'chai';
import filenames from '../treesToCsvFile';

describe('get_trees.js filenames', function() {
  it('should return undefined on malformed filenames', function() {
    expect(filenames.fileProps('invalid_format')).to.be.equal(undefined);
  });

  it('should return correct types', function() {
    const props = filenames.fileProps('1_test_get_trees.csv');

    assert.typeOf(props.ctime, 'number');
    assert.typeOf(props.tree_ident, 'string');
  });

  it('should be a reverse of filename', function() {
    [
      ['/', 42304234, '260'],
      ['../path/to/foo', -1231, 'testIdent'],
      ['', 0, '-'],
    ].forEach((fixture) => {
      const filename = filenames.filename(...fixture);
      const props = filenames.fileProps(filename);

      expect(props.ctime).to.be.equal(fixture[1]);
      expect(props.tree_ident).to.be.equal(fixture[2]);
    });
  });
});
