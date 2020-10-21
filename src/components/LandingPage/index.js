import React from 'react';
import styled from 'styled-components';
import andres from '../../assets/AndresRueda2.JPG';
import { COLORS } from '../theme';
import StackImages from './StackImages';
import Banner from './Banner';
import AboutMe from './AboutMe';
import Portfolio from './Porfolio';

const LandingPage = () => {
  return (
    <>
      <Wrapper>
        <Img
          style={{
            backgroundImage: `url(${andres})`,
          }}
        />
        <Quote>
          <Print>
            <Banner />
          </Print>
        </Quote>
        <AboutMe />
      </Wrapper>
      <StackImages />
      <Portfolio />
    </>
  );
};

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 90px;
`;

const Img = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 250px;
  min-width: 250px;
  border-radius: 50%;
`;

const Quote = styled.blockquote`
  /* display: flex; */
  flex-direction: column;
  position: relative;
  font-family: 'Helvetica Neue';
  font-style: italic;
  font-weight: 600;
  font-size: 2rem;
  height: 110px;
  @media (max-width: 950px) {
    min-height: 200px;
  }
  @media (max-width: 800px) {
    min-height: 250px;
  }
  /* padding: 1em 0 1em 1em; */
  /* background-color: ${COLORS.background}; */

  &::before {
    content: '“';
    position: absolute;
    top: 50%;
    left: -80px;
    font-family: serif;
    font-size: 120px;
    line-height: 0px;
    color: ${COLORS.btnSecondary};
  }
`;

const Print = styled.span`
  @media (min-width: 1530px) {
    border-bottom: 5px solid ${COLORS.btnSecondary};
  }
`;

export default LandingPage;
