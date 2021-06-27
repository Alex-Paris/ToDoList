import React, {FormEvent, useState, useEffect, MouseEvent} from 'react';
import {FiCircle, FiCheckCircle, FiTrash2} from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Header, Error, TodoGroups, PopUpForm } from './styles';
import {getStoredTodoGroup, setStoredTodoGroup, deleteStoredTodoGroup} from '../../containers/storeTodoGroup';
import TodoGroup from '../../models/TodoGroup';

const Home: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [showPopupForm, setShowPopupForm] = useState(false);
  const [newGroupTodo, setNewGroupTodo] = useState<TodoGroup>((new TodoGroup()));
  const [todoGroups, setTodoGroups] = useState<TodoGroup[]>(() => {
    return getStoredTodoGroup();
  });

  function handleAddGroupTodo(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (!newGroupTodo.name) {
      setInputError('Group Name needed.');
      return;
    }

    const isAlreadyUsed = todoGroups.findIndex(todogroup => todogroup.name == newGroupTodo.name) >= 0;

    if (isAlreadyUsed) {
      setInputError('Group Name already used.');
      return;
    }

    try {
      setTodoGroups([...todoGroups, newGroupTodo ]);
      setInputError('');
      setNewGroupTodo(new TodoGroup());
      setShowPopupForm(!showPopupForm);
    } catch (err) {
      setInputError('An error has happened.');
    }
  }

  useEffect(() => {
    setStoredTodoGroup(todoGroups);
  }, [todoGroups]);

  function handleDeleteGroupTodo(event: MouseEvent, todoGroup: TodoGroup): void {
    event.preventDefault();

    const filteredTodoGroups = todoGroups.filter(p => p.name !== todoGroup.name);

    setTodoGroups([...filteredTodoGroups ]);

    deleteStoredTodoGroup(todoGroup.name);
  }

  function handlePopupForm(): void {
    setShowPopupForm(!showPopupForm);
  }

  return (
    <>
      <Header>
        <h3>ToDo Group List</h3>
        <button onClick={handlePopupForm} >Add Group List</button>
        <hr />
      </Header>

      <PopUpForm hasVisible={showPopupForm}>
        <div>
          <h3>Group ToDo List</h3>
          <hr/>
          <form onSubmit={handleAddGroupTodo}>
            <input
              type="text"
              value={newGroupTodo.name}
              onChange={(e) =>
                setNewGroupTodo({name: e.target.value, totalItems: 0, doneItems: 0})}
              placeholder='Insert Group Name'
            />
            { inputError && <Error>{inputError}</Error>}
            <button type='submit' >Insert</button>
            <button type='button' onClick={handlePopupForm} >Close</button>
          </form>
        </div>
      </PopUpForm>

      <TodoGroups>
        {todoGroups.map((todoGroup) => (
          <Link
            id={todoGroup.totalItems !== todoGroup.doneItems ? 'undoneLink' : 'doneLink'}
            key={todoGroup.name} to={`/todogroup/${todoGroup.name}`}
          >
            {todoGroup.name}
            <div>
              { todoGroup.totalItems !== todoGroup.doneItems
                ? <p>{todoGroup.doneItems} of {todoGroup.totalItems} item(s) done</p>
                : <p>{todoGroup.doneItems} item(s) done</p>
              }
            </div>
            <button type='button' onClick={ e => handleDeleteGroupTodo(e, todoGroup)}>
              <FiTrash2 size={30} color='#dc0000'/>
            </button>
            { todoGroup.totalItems !== todoGroup.doneItems
              ? <FiCircle size={30} />
              : <FiCheckCircle size={30} />
            }
          </Link>
        ))}
      </TodoGroups>
    </>
  );
};

export default Home;
