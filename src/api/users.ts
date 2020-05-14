import { TUsersSave, IUserSave, ILoginUser, IUser } from '../types';
import { genKey } from '../utils/generation';

export const login = async (
  loginedUser: ILoginUser
): Promise<IUser | undefined> => {
  try {
    const users: TUsersSave = JSON.parse(localStorage.getItem('users') || '[]');
    const user: IUserSave | undefined = users.find(
      (user: IUserSave) =>
        user.name === loginedUser.username &&
        user.password === loginedUser.password
    );

    if (user) {
      const loginedUser: IUser = {
        id: user.id,
        name: user.name,
        avatar: user.avatar,
      };
      return loginedUser;
    }
    return undefined;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const registration = async (
  user: ILoginUser
): Promise<IUser | undefined> => {
  const key: string = genKey();

  const saveUser: IUserSave = {
    id: key,
    name: user.username,
    password: user.password,
    avatar: 'https://i.pravatar.cc/70?img=55',
  };

  const newUser: IUser = {
    id: key,
    name: user.username,
    avatar: 'https://i.pravatar.cc/70?img=55',
  };

  try {
    const users: TUsersSave = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(saveUser);
    localStorage.setItem('users', JSON.stringify(users));
    return newUser;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const checkUser = async (username: string): Promise<boolean> => {
  const users: TUsersSave = JSON.parse(localStorage.getItem('users') || '[]');
  const index: number = users.findIndex((user) => user.name === username);
  if (index > -1) return true;
  return false;
};

export default {
  login,
  registration,
};
