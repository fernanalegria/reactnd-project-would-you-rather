import React from 'react';
import noProfile from '../assets/noprofile.jpg';
import './common.scss';

const UserAvatar = ({ url, size = '' }) => (
  <img
    className={`user-avatar ${size === 'sm' ? size : ''}`}
    src={url ? url : noProfile}
    alt="Profile"
  />
);

export default UserAvatar;
