import { h, render, Component } from 'preact';
import { connect } from 'preact-redux';
import { bindActions } from '../../../util';
import reduce from '../../../reducer';
import * as actions from '../../../actions';

import Profile from './profile';

@connect(reduce, bindActions(actions))
class RepPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: '',
    };
  }

  render() {
    console.log(this.props.officials);
    const { officials = [] } = this.props;
    return (
      <div className='rep-route-wrapper'>
        { officials.map(official => <Profile official={official} />) }
      </div>
    );
  }
}
export default RepPage;
