import React from 'react';

import './TextField.scss';

import { Props } from './types';

export const TextField = ({ className, ...props }: Props) => {
  return <input className={`${className} text-field`} {...props} />;
};
