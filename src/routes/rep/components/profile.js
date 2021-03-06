import { h, render, Component } from 'preact';

import Socials from './socials';

const Profile = ({ official }) =>
  <div className='profile-card' style={{ marginLeft: '2vw', marginRight: '2vw' }}>
    <div className='img-name-wrapper'>
      <div>
      <div className='profile-pic-wrapper'>
        <img src={official.photoUrl} style={{ width: 'inherit', height: 'inherit', borderRadius: 'inherit' }}/>
      </div>
          <Socials socials={official.channels} />
      </div>
      <div style={{ marginLeft: '20px' }}>
        <h1>{ official.name }</h1>
        <h3>{ `${official.party} Party` }</h3>
      </div>
    </div>
    <div className='contact-wrapper'>
      <h2 style={{ marginBottom: '0px' }}>Contact Info</h2>
      <h3 style={{width: '100%'}}>{`${official.address[0].line1}, ${official.address[0].city}, ${official.address[0].state} ${official.address[0].zip}`}</h3>
      <h3 style={{width: '100%'}}>{'Phone Number: '}<a className='link-fonts' href={`tel:${official.phones[0]}`}>{official.phones[0]}</a></h3>
      <h3 style={{width: '100%'}}>{'Website: '}<a className='link-fonts' href={official.urls[0]} target='_blank'>{official.urls[0]}</a></h3>
    </div>
  </div>;

export default Profile;
