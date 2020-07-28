import React from 'react';
import styled from '@emotion/styled';

const QuickLinks = () => {
  return <QuickLinksStyled>quick links</QuickLinksStyled>;
};

const QuickLinksStyled = styled.div`
  background: ${({ theme }) => theme.color.grey};
  /* text-align: center; */
  height: 100%;
  width: 100%;
  ${({ theme }) => theme.flex.center};
`;

export default QuickLinks;
