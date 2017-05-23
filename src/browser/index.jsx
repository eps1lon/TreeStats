import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store/store';
import routes from './routes.jsx';

require('./style/app.scss');

const createSelectLocationState = () => {
	let prevRoutingState;
  let prevRoutingStateJS;
	return (state) => {
		const routingState = state.get('routing');
		if (typeof prevRoutingState === 'undefined'
      || !prevRoutingState.equals(routingState)) {
			prevRoutingState = routingState;
			prevRoutingStateJS = routingState.toJS();
		}
		return prevRoutingStateJS;
	};
};


const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: createSelectLocationState(),
});

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
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app-body'));
