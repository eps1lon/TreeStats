import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist-immutable';

import store from './store/store';
import persist_config from './store/persist';
import init from './actions/init';

import RehydrationScreen from './components/RehydrationScreen.jsx';
import TreeStatsApp from './containers/TreeStatsApp.jsx';

require('./style/app.scss');

/**
 *
 */
class App extends React.Component {
  state = {
    rehydrated: false,
  }

  /**
   * init store
   */
  componentWillMount() {
    // begin periodically persisting the store
    persistStore(store, persist_config, () => {
      this.setState({ rehydrated: true });
      // rehydrated
      store.dispatch(init());
    });
  }

  /**
   * @return {JSX}
   */
  render() {
    if (!this.state.rehydrated) {
      return <RehydrationScreen />;
    }

    return (
      <Provider store={store}>
        <TreeStatsApp />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
