import {todoListStatsState} from '@/states/todo';
import {NextPage} from 'next';
import {useRecoilValue} from 'recoil';

const TodoStats: NextPage = () => {
  const {totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted} =
    useRecoilValue(todoListStatsState);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {percentCompleted}</li>
    </ul>
  );
};
export default TodoStats;
