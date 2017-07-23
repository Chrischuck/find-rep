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
  inputWrapper: {
    marginTop: '20px',
    maxWidth: '336px',
    height: '50px',
    fontSize: '16px',
    lineHeight: '16px',
    width: '100%',
    position: 'relative',
  },
  input: {
    width: '100%',
    height: '100%',
    marginRight: '35px',
    fontSize: '15px',
    lineHeight: '15px',
    borderBottomColor: '#825acb',
    borderRadius: '5px',
    boxShadow: 'inset 0 2px 5px rgba(0,0,0,.2)',
    outline: 'none',
    fontWeight: '300',
    backgroundColor: '#211f21',
    border: '1px solid #171717',
    color: '#c7c7c7',
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
          <div style={styles.inputWrapper}>
            <input onInput={this.onInput} onKeyPress={this.handleKeyPress} value={this.state.zipCode} placeHolder='   Zip Code' style={styles.input} />
            <a onClick={this.search} aria-hidden='true' className='hover-icon fa fa-arrow-circle-right' style={styles.send} />
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
