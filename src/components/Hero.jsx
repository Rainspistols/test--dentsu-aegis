import React from 'react';
import styled from '@emotion/styled';

const Hero = () => {
  return (
    <HeroStyled>
      <h1>Comnapy logo and slogan</h1>
    </HeroStyled>
  );
};

const HeroStyled = styled.section`
  ${({ theme }) => theme.layoutStyles(30)};
`;

export default Hero;
