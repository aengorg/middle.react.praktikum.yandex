import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.scss';

import { Props } from './types';

import { ReactComponent as IconError } from '../../assets/icons/error.svg';

export const ErrorPage = ({ localization }: Props) => {
  return (
    <div className="error-page">
      <IconError className="error-page__icon" title={localization.page404} />
      <span className="error-page__text">{localization.page404}</span>
      <Link to="/" className="error-page__link">
        {localization.goHome}
      </Link>
    </div>
  );
};
