import React from 'react';
import styled from '@emotion/styled';

const HomeLayout = ({
  row1,
  row2,
  row3,
  row4Left,
  row4RightA,
  row4RightB,
  row5,
}) => {
  return (
    <HomeLayoutStyled>
      <div className='row row1'>{row1}</div>

      <div className='row row2'>{row2}</div>

      <div className='row row3'>{row3}</div>

      <div className='row row4'>
        <div className='row4__left'>{row4Left}</div>
        <div className='row4__right'>
          <div className='row4__right--top'>{row4RightA}</div>
          <div className='row4__right--bottom'>{row4RightB}</div>
        </div>
      </div>

      <div className='row row5'>{row5}</div>

    </HomeLayoutStyled>
  );
};

const HomeLayoutStyled = styled.div`
  max-width: 1260px;
  margin: 0 auto;

  .row {
    &:not(:last-of-type) {
      margin-bottom: 30px;
    }
  }

  .row4 {
    display: flex;
    justify-content: space-between;

    .row4__left {
      flex-grow: 60;
      margin-right: 15px;
    }
    .row4__right {
      flex-grow: 40;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      margin-left: 15px;
    }

    .row4__right--top {
      flex-grow: 40;
      margin-bottom: 15px;
    }

    .row4__right--bottom {
      flex-grow: 60;
      margin-top: 15px;
    }
  }
`;

export default HomeLayout;
