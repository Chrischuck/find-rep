import { h, render, Component } from 'preact';
import Router from 'preact-router';

import './styles.css';

import SearchRoute from '../routes/search/components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hi: 1,
    };
  }
  render() {
    return (
      <div className='app'>
        <SearchRoute />
      </div>
    );
  }
}
export default App;
