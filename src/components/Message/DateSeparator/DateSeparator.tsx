import React from 'react';
import './DateSeparator.css';

import { formatDateTextRU } from '../../../utils/format';

interface IProps {
  date: number;
}

export const DateSeparator = ({ date }: IProps) => {
  const formattedDate: string = formatDateTextRU(date);

  return (
    <div className='date'>
      <span>{formattedDate}</span>
    </div>
  );
};
