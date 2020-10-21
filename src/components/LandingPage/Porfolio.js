import React from 'react';
import styled from 'styled-components';
import Card from './Card';

export default function Portfolio() {
  return (
    <Wrapper id='portfolio'>
      <H2>PORTFOLIO</H2>
      <WrapperPort>
        <Card />
      </WrapperPort>
    </Wrapper>
  );
}

const H2 = styled.h2`
  font-family: 'Permanent Marker', cursive;
  font-size: 3.5rem;
  margin-bottom: 30px;
`;

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

const WrapperPort = styled.div`
  width: 90%;
`;
