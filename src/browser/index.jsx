import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store.js';
import TreeStatsApp from './containers/TreeStatsApp.jsx';
import {csvToDb} from './actions/db.js';

/**
 *
 */
class App extends React.Component {
    /**
     * @return {JSX}
     */
    render() {
        return (
            <Provider store={store}>
                <TreeStatsApp />
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

store.dispatch(csvToDb('./example_small.csv'));
