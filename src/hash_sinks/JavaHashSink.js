import AbstractHashSink from './AbstractHashSink';

/**
 * HashSink implementation like Java's .hashCode()
 */
class JavaHashSink extends AbstractHashSink {
    /**
     * @param {number} n
     */
    add(n) {
        this.hash = ((this.hash<<5)-this.hash)+n;
        this.hash = this.hash & this.hash;
    }
};

export default JavaHashSink;
