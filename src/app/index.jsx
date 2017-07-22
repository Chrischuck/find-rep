import { h, render, Component } from 'preact';

import './styles.css';

import SearchRoute from '../routes/search/components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname: this.props.history.location.pathname,
    };
  }
  componentDidMount() {
    this.props.history.listen((location) => {
      this.setState({ pathname: location.pathname });
    });
  }
  render() {
    return (
      <div className='app'>
        { this.state.pathname === '/' || '' ? <SearchRoute {...this.props}/> : null}
      </div>
    );
  }
}
export default App;
