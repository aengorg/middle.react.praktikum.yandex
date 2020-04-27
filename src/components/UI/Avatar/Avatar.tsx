import React from 'react';
import './Avatar.scss';

interface Props {
  className: string;
  avatar: string;
  title: string;
}

export const Avatar = ({ className, avatar, title }: Props) => {
  return <img className={className + ' avatar'} src={avatar} alt={title} />;
};
