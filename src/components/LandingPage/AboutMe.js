import React from 'react';
import styled from 'styled-components';

export default function AboutMe() {
  return (
    <Wrapper>
      “I’m a Full Stack Web Developer who loves solving coding puzzles and learn
      new things throughout the process. My background in engineering as my
      experience working for Finance and Manufacturing organizations has allowed
      me to develop my skills to streamline processes, work under pressure, and
      build new tools. I like challenges and pushing myself out of my comfort
      zone.”
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 10px 0;
  width: 70%;
  text-align: justify;
`;
