import React from 'react';
import styled from '@emotion/styled';

const Header = () => {
  return <HeaderStyled>header</HeaderStyled>;
};

const HeaderStyled = styled.header`
  ${({ theme }) => theme.layoutStyles(150)};
`;

export default Header;
