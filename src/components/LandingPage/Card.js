import React from 'react';
import styled from 'styled-components';
import kanban1 from '../../assets/kanban/Kanban1.JPG';
import { Link } from 'react-router-dom';

export default function Card() {
  return (
    <MainWrapper>
      <Wrapper>
        <Img src={kanban1} alt='project 1' />
        {/* <ImgDiv style={{ backgroundImage: `url(${kanban1})` }}></ImgDiv> */}
      </Wrapper>
      <Description>
        <h2>Kanban Board</h2>
        <p>
          Mintbean Hackathons: Javascript Bootcamp Olympics! Fri, Aug 28, 2020
          3:30 PM EDT (3 days)
        </p>
        <br></br>
        <p>
          Project build from scratch by a group of three people as a part of
          Mintbean's Javascript Bootcamp Olympics.
        </p>
        <br></br>
        <p>Stacks used:</p>
        <br></br>
        <Ul>
          <Li>Teamwork</Li>
          <Li>Git</Li>
          <Li>HTML</Li>
          <Li>CSS3</Li>
          <Li>JavaScript</Li>
          <Li>React</Li>
          <Li>Redux</Li>
          <Li>SCRUM Methodology</Li>
          <Li>Debugging</Li>
        </Ul>
        <br></br>
        <Link exact to='/kanban'>
          <h2>Details and Story</h2>
        </Link>
      </Description>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  position: relative;
  /* border-radius: 4px; */
  width: 60%;
  /* padding: 65px 30px; */
  font-size: 2rem;
  /* margin: 20px auto; */
  /* background: #f5f5f5; */

  /* border: 2px soLid red; */
  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 16px;
    width: 40%;
    height: 10px;
    box-shadow: 0 5px 14px rgba(0, 0, 0, 0.7);
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }

  &::before {
    left: 15px;
    transform: skew(-2deg) rotate(-2deg);
  }

  &::after {
    right: 15px;
    transform: skew(2deg) rotate(2deg);
  }

  &:hover::before,
  &:hover::after {
    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.4);
  }

  &:hover::before {
    left: 5px;
  }

  &:hover::after {
    right: 5px;
  }
`;

const Description = styled.div`
  margin-left: 30px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  border: 2px soLid #f5f5f5;
`;

// const ImgDiv = styled.div`
//   height: 250px;
//   width: 500px;
//   border: 2px soLid green;
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: center;
// `;

const Ul = styled.ul`
  margin-left: 30px;
`;

const Li = styled.li`
  list-style-type: circle;
  line-height: 1.4;
`;
