import {atom, selector} from 'recoil';

export interface Todo {
  id: number;
  text: string;
  isComplete: boolean;
}

export const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [],
});

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'ALL',
});

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({get}) => {
    console.log('todoListFilterState', todoListFilterState);
    const filter = get(todoListFilterState);
    const list = get(todoListState);
    console.log('list', list);
    console.log('filter', filter);
    switch (filter) {
      case 'ALL':
        return list;
      case 'COMPLETED':
        return list.filter((item) => item.isComplete);
      case 'UNCOMPLETED':
        return list.filter((item) => !item.isComplete);
      default:
        throw new Error('Unknown filter: ' + filter);
    }
  },
});

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({get}) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : Math.round((totalCompletedNum / totalNum) * 100);

    return {totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted};
  },
});
