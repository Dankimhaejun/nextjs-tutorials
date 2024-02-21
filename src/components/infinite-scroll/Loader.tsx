import styled from 'styled-components';
import ReactLoading from 'react-loading';
import {memo} from 'react';

const Loader = () => {
  return (
    <StyledLoaderWrap>
      <ReactLoading type="spin" color="#A593E0" />
    </StyledLoaderWrap>
  );
};

export default memo(Loader);

const StyledLoaderWrap = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
