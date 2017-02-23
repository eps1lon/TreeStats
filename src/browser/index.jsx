import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import TreeStatsApp from './containers/TreeStatsApp.jsx';

require('./style/app.scss');

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
