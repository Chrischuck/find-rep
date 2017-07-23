import { h, render, Component } from 'preact';

import './styles.css';

import SearchRoute from '../routes/search/components';
import RepRoute from '../routes/rep/components';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname: this.props.history.location.pathname,
    };
  }
  componentDidMount() {
    this.props.history.listen((location) => {
      console.log(location.pathname)
      this.setState({ pathname: location.pathname });
    });
  }
  render() {
    return (
      <div className='app'>
        
        { this.state.pathname === '/' || '' ? <SearchRoute {...this.props} /> : <RepRoute {...this.props} /> }
      </div>
    );
  }
}
export default App;
