import styled from 'styled-components';

export default function NotFound() {
  return <NotFoundWrap>Not Found Component</NotFoundWrap>;
}

const NotFoundWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
