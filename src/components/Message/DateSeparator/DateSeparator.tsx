import React from 'react';
import './DateSeparator.scss';

import { formatDateTextRU } from '../../../utils/format';

import { Props } from './types';

export const DateSeparator = ({ date }: Props) => {
  const formattedDate: string = formatDateTextRU(date);

  return (
    <div className="date">
      <span className="date__text">{formattedDate}</span>
    </div>
  );
};
