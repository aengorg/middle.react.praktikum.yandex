// Users
export type TUserId = string;

export interface IUser {
  id: TUserId;
  name: string;
  avatar: string;
}

export interface IUserSave extends IUser {
  password: string;
}

export interface ILoginUser {
  username: string;
  password: string;
}

export type TUsers = IUser[];
export type TUsersSave = IUserSave[];

// Messages

export type TMessageId = string;

export interface IMessageContent {
  id: TMessageId;
  date: number;
  content: string;
}

export interface IMessage {
  user: IUser;
  message: IMessageContent;
}

export type TMessagesList = IMessage[];

// Channels

export type TChannelId = string;

export interface ILastMessage {
  userName: string;
  text: string;
  date: number;
}

export interface IChannel {
  id: TChannelId;
  title: string;
  avatar: string;
  lastMessage?: ILastMessage;
}

export type TChannelsList = IChannel[];

// Снипет для типов компонента

// личные пропсы компонента
// interface OwnProps {}

// состояние-пропсы компонента
// interface StateProps {}

// пути роута в компоненте
// interface RouteProps {}

// дополнительные пропсы от HOC
// interface HOCProps {}

// стандартные пропсы от реакта
// события / атрибуты

// итоговые просы
// export type Props = OwnProps & StateProps & HOCProps & RouteComponentProps<RouteProps>;

// состояние компонента
// export interface State {}
