import {filteredTodoListState} from '@/states/todo';
import {useRecoilValue} from 'recoil';
import TodoItemCreator from './ItemCreator';
import TodoItem from './Item';
import TodoStats from './Stats';
import TodoFilters from './Filters';

const Todo = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoStats />
      <TodoFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default Todo;
