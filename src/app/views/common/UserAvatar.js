import React from 'react';
import noProfile from '../assets/noprofile.jpg';
import './common.scss';

/**
 * Profile picture
 */
const UserAvatar = ({ url, size = '', className = '' }) => (
  <img
    className={`user-avatar ${className} ${size === 'sm' ? size : ''}`}
    src={url ? url : noProfile}
    alt="Profile"
  />
);

export default UserAvatar;
