import { expect } from 'chai';

import AbstractHashSink from '../AbstractHashSink';

describe('AbstractHashSink', function() {
  describe('#parseInt', function() {
    it('should init the hash', function() {
      const sink = new AbstractHashSink();

      expect(sink.hash).to.be.equal(AbstractHashSink.initial_hash);
    });

    it('should reset the hash after it has changed', function() {
      const sink = new AbstractHashSink();

      // for testing purpose since abstract doesnt implement #add
      sink.hash = 5;
      sink.reset();

      expect(sink.hash).to.be.equal(AbstractHashSink.initial_hash);
    });

    it('should parse characters', function() {
      const sink = new AbstractHashSink();

      expect(sink.parseInt('b')).to.be.a('number');
      expect(sink.parseInt('!')).to.be.a('number');
    });

    it('should parse ints', function() {
      const sink = new AbstractHashSink();

      expect(sink.parseInt(1)).to.be.a('number');
      expect(sink.parseInt(2341)).to.be.a('number');
      expect(sink.parseInt(-2341)).to.be.a('number');
      expect(sink.parseInt(0b11000)).to.be.a('number');
    });

    it('should throw errors on any other type', function() {
      const sink = new AbstractHashSink();

      expect(() => sink.parseInt(sink)).to.throw(Error);
      expect(() => sink.parseInt(() => 1)).to.throw(Error);
      expect(() => sink.parseInt(null)).to.throw(Error);
      expect(() => sink.parseInt()).to.throw(Error);
    });
  });
});
