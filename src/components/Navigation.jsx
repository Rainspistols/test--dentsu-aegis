import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const data = ['NavItem1', 'NavItem2', 'NavItem3', 'NavItem4'];
  return (
    <NavigationStyled>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <Link to='/test--dentsu-aegis/'>{item}</Link>
          </li>
        ))}
      </ul>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.nav`
  ul {
    ${({ theme }) => theme.flex.between};
    flex-wrap: wrap;
  }
  li {
    margin-bottom: 20px;
    ${({ theme }) => theme.layoutStyles(20)};
    width: 48%;
  }

  ${({ theme }) => theme.media.tablet} {
    li {
      &:not(:last-of-type) {
        margin-right: 30px;
      }
      width: auto;
      flex-grow: 1;
      margin-bottom: 0;
    }

    ul {
    }
  }
`;

export default Navigation;
