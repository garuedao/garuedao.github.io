import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../theme';
import { STACKS } from '../data';

export default function StackImages() {
  return (
    <MainWrapper id='stacks'>
      <H2>Stacks</H2>
      <Wrapper>
        {STACKS.map((element) => (
          <Stack style={{ backgroundImage: `url(${element.src})` }}>
            <StackText>{element.description}</StackText>
          </Stack>
        ))}
      </Wrapper>
    </MainWrapper>
  );
}

const H2 = styled.h2`
  font-family: 'Permanent Marker', cursive;
  font-size: 3.5rem;
`;

const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 65px 10px;
  background-color: ${COLORS.mainBackground};
  color: ${COLORS.background};
`;

const Wrapper = styled.div`
  min-height: 200px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Stack = styled.div`
  font-weight: 600;
  text-align: center;
  margin: 30px;
  width: 40px;
  height: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const StackText = styled.div`
  position: relative;
  top: 65px;
  left: 50%;
  width: 90px;
  transform: translate(-50%, 0);
`;
