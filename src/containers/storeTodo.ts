import Todo from '../models/Todo';

export function getStoredTodo(): Todo[] {
  const storagedTodos = localStorage.getItem(
    '@ToDoList:todo'
  );

  if (storagedTodos) {
    return JSON.parse(storagedTodos);
  }

  return [];
}

export function setStoredTodo(todos: Todo[]): void {
  localStorage.setItem(
    '@ToDoList:todo',
    JSON.stringify(todos)
  );
}

export function countStoredTodo(): [number, number] {
  const storagedTodos = localStorage.getItem('@ToDoList:todo');

  if (!storagedTodos) {
    return [0,0];
  }

  const storagedTodosParsed = <Todo[]> JSON.parse(storagedTodos);

  const storageTotal = storagedTodosParsed.length+1;

  storagedTodosParsed.filter(p => p.done == true);

  const storageDone = storagedTodosParsed.length+1;

  return [storageTotal, storageDone];
}
