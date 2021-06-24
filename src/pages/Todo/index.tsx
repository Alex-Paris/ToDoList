import React, {FormEvent, useState, useEffect} from 'react';
import {FiCircle, FiCheckCircle} from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Header, Form, Error, Todos } from './styles';
import {getStoredTodo, setStoredTodo} from '../../containers/storeTodo';
import Todo from '../../models/Todo';

const TodoList: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [newTodo, setNewTodo] = useState<Todo>((new Todo()));
  const [todos, setTodos] = useState<Todo[]>(() => {
    return getStoredTodo();
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

  useEffect(() => {
    setStoredTodo(todos);
  }, [todos]);

  return (
    <>
      <Header>
        <h3>ToDo Group List</h3>
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
          <Link
            id={todo.done ? 'undoneLink' : 'doneLink'}
            key={todo.description} to="#"
          >
            {todo.description}
            <div>
              { todo.done
                ? <FiCircle size={30} />
                : <FiCheckCircle size={30} />
              }
            </div>
          </Link>
        ))}
      </Todos>
    </>
  );
};

export default TodoList;
