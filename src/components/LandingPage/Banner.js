import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { COLORS } from '../theme';

const QUOTE_AUTHORS = [
  'ALBERT EINSTEIN',
  'William of Ockham',
  'Roger Sessions',
  'Louis Zukofsky',
];

export default function Banner() {
  const text =
    'Everything Should Be Made as Simple as Possible, But Not Simpler.';
  const [banner, setBanner] = useState('');
  const [count, setCount] = useState(0);
  const [author, setAuthor] = useState('');
  const [index, setIndex] = useState(0);
  useEffect(() => {
    let timer;
    let timer2;
    if (banner.length < text.length) {
      timer = setTimeout(() => {
        setBanner(text.slice(0, count));
        setCount((n) => n + 1);
      }, 50);
    }
    if (count > 55 || author === 'Louis Zukofsky') {
      timer2 = setTimeout(() => {
        setAuthor(QUOTE_AUTHORS[index]);
        index > 2 ? setIndex(0) : setIndex((n) => n + 1);
      }, 1200);
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
    // eslint-disable-next-line
  }, [count, index]);
  return (
    <>
      <MainWrapper>
        <Wrapper>
          <Underline>{banner}</Underline> <Cursor />
        </Wrapper>
      </MainWrapper>
      <footer>
        <Author>{author}</Author>
      </footer>
    </>
  );
}

const MainWrapper = styled.div`
  position: relative;
  background: transparent;
  text-align: center;
`;

const Wrapper = styled.p`
  position: relative;
  margin: 15px 0;
`;

const caret = keyframes`
  50% {
    border-color: transparent;
  }
`;

const Cursor = styled.span`
  border-left: 0.09em solid;
  animation: ${caret} 1s steps(1) infinite;
  &::before {
    content: '”';
    position: relative;
    top: 30px;
    font-family: serif;
    font-size: 120px;
    line-height: 0px;
    color: ${COLORS.btnSecondary};
    z-index: -1;
  }
`;

const Underline = styled.span`
  @media (min-width: 1030px) {
    border-bottom: 5px solid ${COLORS.btnSecondary};
  }
`;

const Author = styled.div`
  position: relative;
  left: 80%;
  font-size: 0.9rem;
  font-style: normal;
`;
