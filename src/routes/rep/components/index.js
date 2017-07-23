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
    console.log(this.props)
    return (
      <div className='rep-route-wrapper'>



        <div className='profile-card'>
          <div className='img-name-wrapper'>
            <div className='profile-pic-wrapper'>
              <img src='https://spark.adobe.com/images/landing/examples/design-music-album-cover.jpg' style={{ width: 'inherit', height: 'inherit', borderRadius: 'inherit' }}/>
            </div>
            <div style={{ marginLeft: '20px' }}>
              <h1>Diane Feinstein</h1>
              <h3>Democratic Party</h3>
            </div>
          </div>
          <div className='social-wrapper' style={{ width: '50%', fontSize: '23px' }}>
            <div>
              <i className='hover-icon fa fa-facebook fa-6' aria-hidden='true' style={{ paddingRight: '20px'}}/>
              <i className='hover-icon fa fa-twitter-square fa-6' aria-hidden='true' style={{ paddingRight: '20px'}} />
              <i className='hover-icon fa fa-youtube fa-6' aria-hidden='true' />
            </div>
          </div>
          <div className='contact-wrapper'>
            <h2 style={{ marginBottom: '0px' }}>Contact Info</h2>
            <p style={{width: '100%'}}>112 Hart Senate Office Building, Washington, DC 20510</p>
            <p style={{width: '100%'}}>Phone Number: <a href='tel:1234123'>12341234123</a></p>
            <p style={{width: '100%'}}>website: <a href='https://bareminimum.co'>asdfas.asdfcom</a></p>
          </div>
        </div>

        <Profile />

      </div>
    );
  }
}
export default RepPage;
