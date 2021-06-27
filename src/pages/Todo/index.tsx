import React, {FormEvent, useState, useEffect, MouseEvent} from 'react';
import { FiCircle, FiCheckCircle, FiChevronsLeft, FiTrash2 } from 'react-icons/fi';
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

  function handleDeleteTodo(event: MouseEvent, todo: Todo): void {
    event.stopPropagation();

    const filteredTodos = todos.filter(p => p.description !== todo.description);

    setTodos([...filteredTodos ]);
  }

  function handleSetDone(event: MouseEvent, todo: Todo): void {
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
        <Link to={'/'}>
          <FiChevronsLeft size={40} />
        </Link>
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
          <a
            id={!todo.done ? 'undoneLink' : 'doneLink'}
            key={todo.description} type='button' onClick={e => handleSetDone(e, todo)}
          >
            {todo.description}
            <button type='button' onClick={ e => handleDeleteTodo(e, todo)}>
              <FiTrash2 size={30} color='#dc0000'/>
            </button>
            { !todo.done
              ? <FiCircle size={30} />
              : <FiCheckCircle size={30} />
            }
          </a>
        ))}
      </Todos>
    </>
  );
};

export default TodoList;
