const states = {
    busy: Symbol('BusyIndicator instance is busy'),
    ready: Symbol('BusyIndicator instance is ready')
};

module.exports = class BusyIndicator {
    /**
     * @constructor
     * @param {string} query_selector document.querySelector compatible
     */
    constructor(query_selector) {
        this.selector = query_selector;

        this.state = undefined;
    }

    /**
     * @return {boolean} if busy
     */
    get is_busy() {
        return this.state == states.busy;
    }

    /**
     * sets state to busy, disables button
     */
    busy() {
        this.state = states.busy;
        document.querySelector(this.selector)
                .setAttribute('disabled', 'disabled');
    }

    /**
     * @return {boolean} if ready
     */
    get is_ready() {
        return this.state = states.ready;
    }

    /**
     * sets state to ready, enables button
     */
    ready() {
        this.state = states.ready;
        document.querySelector(this.selector).removeAttribute('disabled');
    }
};
