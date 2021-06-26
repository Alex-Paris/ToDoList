import Todo from '../models/Todo';
import TodoGroup from '../models/TodoGroup';

export function getStoredTodoGroup(): TodoGroup[] {
  const storagedTodoGroups = localStorage.getItem(
    '@ToDoList:todogroup'
  );

  if (!storagedTodoGroups) {
    return [];
  }

  const parsedGroup = <TodoGroup[]> JSON.parse(storagedTodoGroups);

  parsedGroup.forEach(todo => {
    [todo.totalItems, todo.doneItems] = countStoredTodo(todo.name);
  });

  return parsedGroup;
}

export function setStoredTodoGroup(todoGroups: TodoGroup[]): void {
  localStorage.setItem(
    '@ToDoList:todogroup',
    JSON.stringify(todoGroups)
  );
}

export function countStoredTodo(todoGroupName:string): [number, number] {
  const storagedTodos = localStorage.getItem(`@ToDoList:todo${todoGroupName}`);

  if (!storagedTodos) {
    return [0,0];
  }

  const storagedTodosParsed = <Todo[]> JSON.parse(storagedTodos);

  const storageTotal = storagedTodosParsed.length;

  const storageTodosDoneParsed = storagedTodosParsed.filter(p => p.done == true);

  const storageDone = storageTodosDoneParsed.length;

  return [storageTotal, storageDone];
}
