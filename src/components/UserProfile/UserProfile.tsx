import React from 'react';
import { Avatar } from '../../components/UI/Avatar';
import './UserProfile.scss';

import { Props } from './types';

import { ReactComponent as IconLogout } from '../../assets/icons/exit.svg';

export const UserProfile = ({
  className,
  localization,
  user,
  logoutUser,
}: Props) => {
  return (
    <div className={`${className} user-profile`}>
      <Avatar
        className="user-profile__avatar"
        avatar={user.avatar}
        title={user.name}
      />
      <span className="user-profile__name">{user.name}</span>
      <IconLogout
        className="user-profile__logout-icon"
        title={localization.logout}
        onClick={() => logoutUser()}
      />
    </div>
  );
};
