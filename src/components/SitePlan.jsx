import React from 'react';
import styled from '@emotion/styled';

const SitePlan = () => {
  return <SitePlanStyled>site plan and copyright info</SitePlanStyled>;
};

const SitePlanStyled = styled.footer`
  ${({ theme }) => theme.layoutStyles(50)}
`;

export default SitePlan;
