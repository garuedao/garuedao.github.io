import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../theme';
const MainMenu = () => {
  return (
    <Ul>
      <li>
        <Link href='/'>HOME</Link>
      </li>
      <li>
        <Link href='#portfolio'>PORTFOLIO</Link>
      </li>
      <li>
        <Link href='#stacks'>SKILLS</Link>
      </li>
      <li>
        <Link href='/contact'>CONTACT ME</Link>
      </li>
    </Ul>
  );
};

const Ul = styled.ul`
  display: flex;
  min-width: 580px;

  margin: 0;
  & li {
    flex: 1;
    display: flex;
    justify-content: center;
    list-style: none;
  }
`;

const Link = styled.a`
  position: relative;
  outline: none;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 500;
  color: ${COLORS.background};
  width: 100%;
  height: calc(100% - 4px);
  text-align: center;
  line-height: 50px;

  &:hover {
    background-color: ${COLORS.btnSecondary};
    border-bottom: 3px solid ${COLORS.btnPrimary};
  }
  &:focus {
  }

  &:active {
    & img {
      opacity: 1;
      outline: none;
      transform: scale(1.1);
    }
  }
`;

export default MainMenu;
