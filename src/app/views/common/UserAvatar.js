import React, { Component } from 'react';
import noProfile from '../assets/noprofile.jpg';
import './common.scss';

class UserAvatar extends Component {
  render() {
    const { url } = this.props;
    const avatar = url ? (
      <div
        className="user-avatar"
        style={{
          backgroundImage: `url(${url})`
        }}
      />
    ) : (
      <img className="user-avatar" src={noProfile} alt="No profile" />
    );

    return avatar;
  }
}

export default UserAvatar;
