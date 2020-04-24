import React from "react";
import "./Channel.css";

import Avatar from "../../UI/Avatar/Avatar";

export default (props: any): any => {
  const { title, lastUserName, lastMsg, lastDate } = props.channel;
  const date = new Date(lastDate).toLocaleDateString();

  return (
    <div className="channel">
      <Avatar className="channel__avatar" channel={props.channel} />
      <div className="channel-body">
        <div className="channel-top">
          <span className="channel__title">{title}</span>
          <span className="channel__date">{date}</span>
        </div>
        <div className="channel-bottom">
          <span className="channel__user-name">{lastUserName}</span>{` : `}
          <span className="channel__message">{lastMsg}</span>
        </div>
      </div>
    </div>
  );
};
