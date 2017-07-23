import { h, render, Component } from 'preact';

const Socials = ({ socials = [] }) => {
  return (
      <div>
        {
          socials.map((social) => {
            switch (social.type) {
              case 'Facebook':
                return <a href={`https://www.facebook.com/${social.id}`} target='_blank' className='hover-icon fa fa-facebook fa-6' aria-hidden='true' style={{ paddingRight: '20px' }}/>;
              case 'Twitter':
                return <a href={`https://twitter.com/${social.id}`} target='_blank' className='hover-icon fa fa-twitter-square fa-6' aria-hidden='true' style={{ paddingRight: '20px'}} />;
              case 'YouTube':
                return <a href={`https://youtube.com/${social.id}`} target='_blank' className='hover-icon fa fa-youtube fa-6' aria-hidden='true' />;
              default:
                return null;
            }
          })
        }
      </div>
  );
};

export default Socials;
