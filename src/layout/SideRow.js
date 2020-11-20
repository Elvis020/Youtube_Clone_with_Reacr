import React from "react";
import styled from "styled-components";
import "../App.css";

const SideRow = ({ selected, title, icon }) => {
  return (
    <div className={`sideRowContainer ${selected && "selected"}`}>
    {/* // <div className="sideRowContainer"> */}
      <SidebarIcon className="icon">{icon}</SidebarIcon>
      <SidebarTitle className="title">{title}</SidebarTitle>
    </div>
  );
};

export default SideRow;

const SidebarTitle = styled.h2`
  flex: 1;
  margin-left: 20px;
  font-size: 12px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
`;
const SidebarIcon = styled.div`
  color: #606060;
  &:hover {
    color: red !important;
  }
  .MuiSvgIcon-root {
    font-size: large !important;
  }
`;
