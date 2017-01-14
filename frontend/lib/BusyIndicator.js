const busy_state = Symbol("BusyIndicator instance is busy");
const ready_state = Symbol("BusyIndicator instance is ready");

/**
 * indicator wrapper class that displays a busy indicator when a submit is disabled
 */
class BusyIndicator {
    constructor(query_selector) {
        this.selector = query_selector;

        this.state = undefined;
    }

    get is_busy() {
        return this.state == busy_state;
    }

    busy() {
        this.state = busy_state;
        document.querySelector(this.selector).setAttribute("disabled", "disabled");
    }

    get is_ready() {
        return this.state = ready_state;
    }

    ready() {
        this.state = ready_state;
        document.querySelector(this.selector).removeAttribute("disabled");
    }
}