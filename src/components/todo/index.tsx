import {filteredTodoListState} from '@/states/todo';
import {useRecoilValue} from 'recoil';
import TodoItemCreator from './ItemCreator';
import TodoItem from './Item';
import TodoStats from './Stats';
import TodoFilters from './Filters';

export default function Todo() {
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
}
