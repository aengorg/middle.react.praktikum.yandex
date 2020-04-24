import React from 'react';
import './Avatar.css';

export default (props : any) => {
  return (
    <img
      className={props.className + ' avatar'}
      src={props.channel.avatar}
      alt={props.channel.title}
    />
  );
}
