import React from 'react';
import styled from 'styled-components';

import { ContentHero } from './ContentHero';
import { ContentSponsors } from './ContentSponsors';
import { ContentCarousel } from './ContentCarousel';

import post from '../../assets/kanban/post.JPG';

const MainContent = () => {
  return (
    <Wrapper>
      <Section>
        <TextHolder>
          <p>
            The challenge really started on Aug 27, 2020. I was thrilled when I
            saw the post to participate in a hackathon. Our cohort was in the
            middle sections of the syllabus. We already had seen HTML and CSS,
            JavaScript, Express.js, React and we were starting with the firsts
            concepts of Redux. I had a bit of free time between my job and the
            studies since I had submitted the day before the final project for
            this section and I was looking for a new challenge to finally grasp
            and apply all we have learned.
          </p>
          <br />
          <p>
            Immediately, I started to look for other students from Concordia to
            form to the team and be able to participate. The things couldn't be
            better, two of the top students from my same cohort joined the team.{' '}
            <Link href='https://github.com/donnyesq' target='_blank'>
              Adonis Lahlou
            </Link>
            , and{' '}
            <Link href='https://github.com/g-thinh' target='_blank'>
              Gia Thinh Nguyen
            </Link>
            . The Reducers team was born!!
          </p>
          <br />
          <p>ROL: Front-End Developer - Debugger</p>
          <p>
            RESPONSABILITIES: Card Component - Task Component - Merging
            Components
          </p>
          <p>Tags: HTML - CSS - Javascript - React - Redux - Material-UI</p>
        </TextHolder>
        <Post src={post} />
      </Section>
      <ContentHero />
      <ContentCarousel />
      <ContentSponsors />
    </Wrapper>
  );
};

const Section = styled.section`
  display: flex;
  align-content: space-between;
`;

const TextHolder = styled.div`
  font-size: 1.3rem;
  text-align: justify;
  line-height: 1.5;
  padding-right: 40px;
`;
const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 85%;
`;

const Post = styled.img`
  height: 450px;
  margin-right: 30px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;
export default MainContent;
