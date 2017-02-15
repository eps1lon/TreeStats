import { expect } from 'chai';

import JavaHashSink from '../JavaHashSink';

describe('JavaHashSink', function() {
  it('should change when adding a single value', function() {
    const sink = new JavaHashSink();
    const old_hash = sink.hash;

    sink.add(2);
    const new_hash = sink.hash;

    expect(old_hash).to.not.be.equal(new_hash);
  });

  it('should change when putting multiple values', function() {
    const sink = new JavaHashSink();
    const old_hash = sink.hash;

    const values = [2, -234, 1e4, 0b101110, 0xA3, 'a', 'z{IGNORED}'];

    sink.put(values);

    expect(old_hash).to.not.be.equal(sink.hash);

    sink.reset();
    sink.put(...values);

    expect(old_hash).to.not.be.equal(sink.hash);
  });
});
