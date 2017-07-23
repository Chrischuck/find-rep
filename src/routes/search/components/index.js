import { h, render, Component } from 'preact';
import { connect } from 'preact-redux';
import { bindActions } from '../../../util';
import reduce from '../../../reducer';
import * as actions from '../../../actions';

const styles = {
  child: {
    maxWidth: '50%',
    maxHeight: '50%',
  },
  send: {
    cursor: 'pointer',
    position: 'absolute',
    top: '32%',
    bottom: '50%',
    right: '1px',
    fontSize: '25px',
    height: '25px',
    width: '25px',
  },
};

@connect(reduce, bindActions(actions))
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: '',
    };
  }
  onInput = e => {
    this.setState({ zipCode: e.target.value });
  }
  search = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.search(this.state.zipCode)
    .then(() => this.props.history.push('/state-reps'));
  }
  handleKeyPress = target => {
    if (target.charCode === 13) {
      this.props.search(this.state.zipCode)
      .then(() => this.props.history.push('/state-reps'));   
    }
  }
  render() {
    return (
      <div className='search-route-wrapper'>
        <div style={styles.child}>
          <div style={{ color: 'white', fontSize: '20px', fontWeight: '300', fontFamily: 'Lato' }}>
            Enter a zip code to find your local rep!
          </div>
          <div className='search-box-wrapper' style={styles.inputWrapper}>
            <input className='search-box' onInput={this.onInput} onKeyPress={this.handleKeyPress} value={this.state.zipCode} placeHolder='Zip Code' />
            <a onClick={this.search} aria-hidden='true' className='hover-icon fa fa-arrow-circle-right' style={styles.send} />
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
