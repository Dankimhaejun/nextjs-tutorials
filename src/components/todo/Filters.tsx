import {todoListFilterState} from '@/states/todo';
import {NextPage} from 'next';
import {useRecoilState} from 'recoil';

const TodoFilters: NextPage = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="ALL">ALL</option>
        <option value="COMPLETED">COMPLETED</option>
        <option value="UNCOMPLETED">UNCOMPLETED</option>
      </select>
    </>
  );
};

export default TodoFilters;
