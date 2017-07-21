/* eslint-disable */
import { h, render } from 'preact';
import { Provider } from 'preact-redux';

import App from './app'
import store from './store'


render(<Provider store={store}><App /></Provider>, document.getElementById('app'));