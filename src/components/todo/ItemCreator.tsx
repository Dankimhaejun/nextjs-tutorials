import {todoListState} from '@/states/todo';
import {NextPage} from 'next';
import {useState} from 'react';
import {useSetRecoilState} from 'recoil';

let id = 0;
function getId() {
  return id++;
}

const TodoItemCreator: NextPage = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {id: getId(), text: inputValue, isComplete: false},
    ]);

    setInputValue('');
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default TodoItemCreator;
