import React from "react";
import Channel from "./Channel/Channel";

const channels = [
  {
    avatar: "https://i.pravatar.cc/70?img=1",
    title: "Brooklyn Cooper",
    lastMsg: "lastMsg lastMsglastMsg lastMsg lastMsglastMsglastMsg  lastMsg lastMsglastMsg lastMsg lastMsg lastMsg lastMsg",
    lastUserName:"lastUserName",
    lastDate: 1587000328094
  },
  {
    avatar: "https://i.pravatar.cc/70?img=2",
    title: "Preact",
    lastMsg: "t nisi ullamco labore tempor ex laboris cupidatat. Eu minim ad exercitation et nulla sit",
    lastUserName:"Tanya Pena",
    lastDate: 1587735314570 
  },
  {
    avatar: "https://i.pravatar.cc/70?img=3",
    title: "Harold Howard",
    lastMsg: "fugiat elit incididunt culpa duis reprehenderit fugiat. Incididunt non veniam eiusmod esse esse ut anim c",
    lastUserName:"Gregory",
    lastDate: 1587235302641
  }
];

const channelsList = channels
.sort((a, b): any => b.lastDate - a.lastDate)
.map((channel, key): any => (
  <Channel key={key.toString()} channel={channel} />
));

export default (props: any): any => {
  return <div>{channelsList}</div>;
};
