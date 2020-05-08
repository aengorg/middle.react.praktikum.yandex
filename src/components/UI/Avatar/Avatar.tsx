import React from 'react';
import './Avatar.scss';

import { IAvatarProps } from './types';

export const Avatar = ({ className = '', avatar, title }: Props) => {
  return <img className={`${className} avatar`} src={avatar} alt={title} />;
};
