import {Todo, todoListState} from '@/states/todo';
import {NextPage} from 'next';
import {useRecoilState} from 'recoil';

interface TodoItemProps {
  item: Todo;
}

const replaceItemAtIndex = (arr: Todo[], index: number, newValue: Todo) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr: Todo[], index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

const TodoItem: NextPage<TodoItemProps> = ({item}: TodoItemProps) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {...item, text: e.target.value});
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {...item, isComplete: !item.isComplete});
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input type="checkbox" checked={item.isComplete} onChange={toggleItemCompletion} />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default TodoItem;
