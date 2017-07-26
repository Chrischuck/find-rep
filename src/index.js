/* eslint-disable */
import { h, render } from 'preact'
import { Provider } from 'preact-redux'
import createHistory from 'history/createBrowserHistory'

import App from './app'
import store from './store'
import favicon from './assets/favicon-32x32.png'

const history = createHistory()

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('app')
);