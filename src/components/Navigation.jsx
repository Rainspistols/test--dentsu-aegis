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
    flex-grow: 1;
    ${({ theme }) => theme.layoutStyles(20)};

    &:not(:last-of-type) {
      margin-right: 30px;
    }
  }
`;

export default Navigation;
