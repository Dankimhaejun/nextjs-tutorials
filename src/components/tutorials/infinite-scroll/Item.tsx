import {memo} from 'react';
import styled from 'styled-components';

interface ItemProps {
  number: number;
}

const Item = ({number}: ItemProps) => {
  return (
    <StyledItemWrap>
      <StyledItemWrapTop>{number}</StyledItemWrapTop>
      <StyledItemWrapBody>
        <StyledItemWrapBodyTitle />
        <StyledItemWrapBodyTitle />
        <StyledItemWrapBodyTitle />
      </StyledItemWrapBody>
    </StyledItemWrap>
  );
};

export default memo(Item);

const StyledItemWrap = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 6px;
`;

const StyledItemWrapTop = styled.div`
  width: 350px;
  height: 170px;
  display: flex;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: #a2e5e7;
  color: #b66270;
  font-size: 2.25rem;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const StyledItemWrapBody = styled.div`
  height: 200px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 10px;
`;

const StyledItemWrapBodyTitle = styled.div`
  width: 300px;
  height: 36px;
  margin: 16px;
  border-radius: 4px;
  background-color: #d2e5e7;
`;
