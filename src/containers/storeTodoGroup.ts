import TodoGroup from '../models/TodoGroup';

export function getStoredTodoGroup(): TodoGroup[] {
  const storagedTodoGroups = localStorage.getItem(
    '@ToDoList:todogroup'
  );

  if (storagedTodoGroups) {
    return JSON.parse(storagedTodoGroups);
  }

  return [];
}

export function setStoredTodoGroup(todoGroups: TodoGroup[]): void {
  localStorage.setItem(
    '@ToDoList:todogroup',
    JSON.stringify(todoGroups)
  );
}

export function countStoredTodoGroup(): number {
  const storagedTodoGroups = localStorage.getItem('@ToDoList:todogroup');

  if (!storagedTodoGroups) {
    return 0;
  }

  const storagedTodoGroupsParsed = <TodoGroup[]> JSON.parse(storagedTodoGroups);

  return storagedTodoGroupsParsed.length+1;
}
