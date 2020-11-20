import React from "react";
import { VideoCall, Menu, Search, Apps, Notifications } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <Menu />
        <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="" />
      </HeaderLeft>
      <HeaderInput>
        <input placeholder="Search" type="text" />
        <HeaderInputButton />
      </HeaderInput>
      <HeaderIcons>
        <VideoCall className="header__icons" />
        <Apps className="header__icons" />
        <Notifications className="header__icons" />
        <Avatar />
      </HeaderIcons>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 100;
  .header__logo {
    height: 25px;
    object-fit: contain;
    margin-left: 20px;
  }
`;

const HeaderLeft = styled.div``;
const HeaderInput = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  border: 1px solid lightgray;
  & > input {
    flex: 1;
    border: none;
    font-size: 1rem;
    &:focus {
      border: none;
      outline: none;
    }
  }
`;
const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  .header__icons {
    margin-right: 5px;
  }
`;
const HeaderInputButton = styled(Search)`
  width: 50px !important;
  background-color: #fafafa;
  border-left: 1px solid lightgray;
  color: gray;
`;
