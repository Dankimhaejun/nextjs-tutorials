import {useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import styled from 'styled-components';
import Item from '../Item';
import Loader from '../Loader';

const InfiniteScroll = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemLists, setItemLists] = useState([1, 2, 3, 4, 5]);
  const [ref, inView] = useInView();

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setItemLists((prev) => [...prev, prev.length > 0 ? prev[prev.length - 1] + 1 : 1]);
    setIsLoaded(false);
  };

  useEffect(() => {
    if (inView) {
      getMoreItem();
    }
  }, [inView]);

  return (
    <StyledInfiniteScrollWrap>
      {itemLists.map((item) => {
        return <Item number={item} key={item} />;
      })}
      <StyledTargetElement ref={ref}>{isLoaded && <Loader />}</StyledTargetElement>
    </StyledInfiniteScrollWrap>
  );
};

export default InfiniteScroll;

const StyledInfiniteScrollWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const StyledTargetElement = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
