import React from 'react';
import styled from '@emotion/styled';

const About = () => {
  return (
    <AboutStyled>
      <h2>about</h2>
    </AboutStyled>
  );
};

const AboutStyled = styled.section`
  ${({ theme }) => theme.layoutStyles(200)};
`;

export default About;
