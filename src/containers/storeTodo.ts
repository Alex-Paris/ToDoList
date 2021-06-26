import Todo from '../models/Todo';

export function getStoredTodo(todoGroupName:string): Todo[] {
  const storagedTodos = localStorage.getItem(
    `@ToDoList:todo${todoGroupName}`
  );

  if (storagedTodos) {
    return JSON.parse(storagedTodos);
  }

  return [];
}

export function setStoredTodo(todoGroupName:string, todos: Todo[]): void {
  localStorage.setItem(
    `@ToDoList:todo${todoGroupName}`,
    JSON.stringify(todos)
  );
}
