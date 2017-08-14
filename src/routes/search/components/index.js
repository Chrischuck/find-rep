import { h, render, Component } from 'preact';
import { connect } from 'preact-redux';
import { bindActions } from '../../../util';
import reduce from '../../../reducer';
import * as actions from '../../../actions';

const styles = {
  child: {
    maxWidth: '100%',
    maxHeight: '50%',
    marginRight: '10px',
    marginLeft: '10px',
  },
};

@connect(reduce, bindActions(actions))
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      error: null,
    };
  }
  onInput = e => {
    this.setState({ address: e.target.value });
  }
  getData = () => {
    this.props.search(this.state.address)
    .then(data => {
      if (!data.error) {
        this.props.history.push('/state-reps');
      } else {
        if (data.error.code === 'Z_DATA_ERROR') {
          this.setState({ error: 'Invalid Address' });
        } else if (data.error.code === undefined) {
          this.setState({ error: 'No Internet Connection' });
        } else {
          this.setState({ error: 'Uh oh! Something went wrong' });
        }
      }
    });
  }

  search = e => {
    e.preventDefault();
    e.stopPropagation();
    this.getData();
  }
  handleKeyPress = target => {
    if (target.charCode === 13) {
      setTimeout(this.getData, 35);
    }
  }
  render() {
    return (
      <div className='search-route-wrapper'>
        <div style={styles.child}>
          <div style={{ color: 'white', fontSize: '20px', fontWeight: '300', fontFamily: 'Lato' }}>
            Enter an address to find your local rep!
          </div>
          <div style={{ color: '#da0000', fontSize: '16px', fontWeight: '300', fontFamily: 'Lato' }}>
            { this.state.error }
          </div>
          <div className='search-box-wrapper' style={styles.inputWrapper}>
            <input className='search-box' onInput={this.onInput} onKeyPress={this.handleKeyPress} value={this.state.address} placeHolder='Address' />
            <a onClick={this.search} aria-hidden='true' className='send-button hover-icon fa fa-arrow-circle-right' />
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
