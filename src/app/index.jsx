import { h, render, Component } from 'preact';
import Router from 'preact-router';

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
      <div style={{ backgroundColor: '#2b313c', height: '100%' }}>
        <SearchRoute />
      </div>
    );
  }
}
export default App;
