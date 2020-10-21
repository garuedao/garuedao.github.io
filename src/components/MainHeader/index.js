import React from 'react';
import styled from 'styled-components';
import cli from '../../assets/skills/CLI.svg';
import MainMenu from './MainMenu';
import { COLORS } from '../theme';

const MainHeader = () => {
  return (
    <Header>
      <Left>
        <Logo src={cli} />
        <PageTitle>Andres Rued@</PageTitle>
      </Left>
      <Right>
        <MainMenu />
      </Right>
    </Header>
  );
};

const Header = styled.header`
  position: sticky;
  top: 0%;
  display: flex;
  width: 100%;
  align-items: center;
  height: 50px;
  background-color: ${COLORS.mainBackground};
  color: ${COLORS.background};
  border-top: 3px solid ${COLORS.mainBackground};
  border-bottom: 3px solid ${COLORS.mainBackground};
  z-index: 100;
  border-bottom: 4px solid white;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 30px;
`;

const Left = styled.div`
  margin-left: 2.5%;
  flex: 4;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  margin-right: 2.5%;
  flex: 6;
`;

const PageTitle = styled.h1`
  user-select: none;
  display: inline-block;
  font-size: 34px;
  line-height: 135%;
  height: 35px;

  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

export default MainHeader;
