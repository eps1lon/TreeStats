const states = {
    busy: Symbol("BusyIndicator instance is busy"),
    ready: Symbol("BusyIndicator instance is ready")
};

module.exports = class BusyIndicator {
    constructor(query_selector) {
        this.selector = query_selector;

        this.state = undefined;
    }

    get is_busy() {
        return this.state == states.busy;
    }

    busy() {
        this.state = states.busy;
        document.querySelector(this.selector).setAttribute("disabled", "disabled");
    }

    get is_ready() {
        return this.state = states.ready;
    }

    ready() {
        this.state = states.ready;
        document.querySelector(this.selector).removeAttribute("disabled");
    }
};