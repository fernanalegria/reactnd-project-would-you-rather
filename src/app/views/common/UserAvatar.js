import React from 'react';
import noProfile from '../assets/noprofile.jpg';
import './common.scss';
import { string } from 'prop-types';

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

UserAvatar.propTypes = {
  url: string,
  size: string,
  className: string
};

export default UserAvatar;
