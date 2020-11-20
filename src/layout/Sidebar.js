import React from "react";
import styled from "styled-components";
import SideRow from "./SideRow";
import { Home, Whatshot, Subscriptions, ExpandMoreOutlined, VideoLibrary, History, OndemandVideo, WatchLater, ThumbUpAltOutlined } from "@material-ui/icons";

const sideRowDetails1 = [
  {
    title: "Home",
    icon: <Home />,
    selected: true,
  },
  {
    title: "Trending",
    icon: <Whatshot />,
    selected: false,
  },
  {
    title: "Subscription",
    icon: <Subscriptions />,
    selected: false,
  },
];
const sideRowDetails2 = [
  {
    title: "Library",
    icon: <VideoLibrary />,
    selected: false,
  },
  {
    title: "History",
    icon: <History />,
    selected: false,
  },
  {
    title: "Your Videos",
    icon: <OndemandVideo />,
    selected: false,
  },
  {
    title: "Watch Later",
    icon: <WatchLater />,
    selected: false,
  },
  {
    title: "Liked videos",
    icon: <ThumbUpAltOutlined />,
    selected: false,
  },
  {
    title: "Show more",
    icon: <ExpandMoreOutlined />,
    selected: false,
  },
];

const Sidebar = () => {
  return (
    <SidebarContainer>
      {sideRowDetails1.map((item, index) => {
        return <SideRow key={index} {...item} />;
      })}
      <hr />
      {sideRowDetails2.map((item, index) => {
        return <SideRow key={index} {...item} />;
      })}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  flex: 0.2;
  > hr {
    height: 1px;
    border: 0;
    background-color: lightgray;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
