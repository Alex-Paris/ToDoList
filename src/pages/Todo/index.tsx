import React, {FormEvent, useState, useEffect} from 'react';
import { FiCircle, FiCheckCircle } from 'react-icons/fi';
import { useRouteMatch, Link } from 'react-router-dom';

import { Header, Form, Error, Todos } from './styles';
import {getStoredTodo, setStoredTodo} from '../../containers/storeTodo';
import Todo from '../../models/Todo';

interface TodoGroupParams {
  todogroup: string;
}

const TodoList: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [newTodo, setNewTodo] = useState<Todo>((new Todo()));

  const { params } = useRouteMatch<TodoGroupParams>();

  const todoGroupName = params.todogroup;

  const [todos, setTodos] = useState<Todo[]>(() => {
    return getStoredTodo(todoGroupName);
  });

  function handleAddTodo(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (!newTodo.description) {
      setInputError('Todo description needed.');
      return;
    }

    const isAlreadyUsed = todos.findIndex(todo => todo.description == newTodo.description) >= 0;

    if (isAlreadyUsed) {
      setInputError('Already have a same Todo description used.');
      return;
    }

    try {
      setTodos([...todos, newTodo ]);
      setInputError('');
      setNewTodo(new Todo());
    } catch (err) {
      setInputError('An error has happened.');
    }
  }

  function handleSetDone(todo: Todo): void {
    const findTodo = todos.findIndex(p => p.description == todo.description);

    todos[findTodo].done = !todo.done;

    setTodos([...todos]);
  }

  useEffect(() => {
    setStoredTodo(todoGroupName, todos);
  }, [todoGroupName, todos]);

  return (
    <>
      <Header>
        <h3>ToDo Group List</h3>
        <Link to={'/'}>Back</Link>
      </Header>

      <Form hasError={!!inputError} onSubmit={handleAddTodo}>
        <input
          value={newTodo.description}
          onChange={(e) =>
            setNewTodo({description: e.target.value, done: false})}
          placeholder='Insert Todo Description ..'
        />
        <button type='submit'>Add</button>
      </Form>

      { inputError && <Error>{inputError}</Error>}

      <hr />

      <Todos>
        {todos.map((todo) => (
          <button
            id={!todo.done ? 'undoneLink' : 'doneLink'}
            key={todo.description} type='button' onClick={() => handleSetDone(todo)}
          >
            {todo.description}
            <div>
              { !todo.done
                ? <FiCircle size={30} />
                : <FiCheckCircle size={30} />
              }
            </div>
          </button>
        ))}
      </Todos>
    </>
  );
};

export default TodoList;
