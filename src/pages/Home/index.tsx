import React, {FormEvent, useState} from 'react';
import {FiCircle, FiCheckCircle} from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Header, Error, TodoGroups, PopUpForm } from './styles';

interface TodoGroup {
  name: string;
  totalItems?: number;
  doneItems?: number;


}

const Home: React.FC = () => {
  const [newGroupTodo, setNewGroupTodo] = useState<TodoGroup>({name: ''});
  const [showPopupForm, setShowPopupForm] = useState(false);
  const [inputError, setInputError] = useState('');
  const [todoGroups, setTodoGroups] = useState<TodoGroup[]>(() => {
    return [];
  });

  function handleAddGroupTodo(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (!newGroupTodo.name) {
      setInputError('Group Name needed.');
      return;
    }

    try {
      setTodoGroups([...todoGroups, newGroupTodo ]);
      setInputError('');
      setNewGroupTodo({name: ''});
      setShowPopupForm(!showPopupForm);
    } catch (err) {
      setInputError('An error has happened.');
    }
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
            <input type="text" value={newGroupTodo.name} onChange={(e) => setNewGroupTodo({name: e.target.value})} placeholder='Insert Group Name' />
            { inputError && <Error>{inputError}</Error>}
            <button type='submit' >Insert</button>
          </form>
        </div>
      </PopUpForm>

      <TodoGroups>
        {todoGroups.map((todoGroup) => (
          <Link
            id={todoGroup.totalItems === todoGroup.doneItems ? 'doneLink' : 'undoneLink'}
            key={todoGroup.name} to="#"
          >
            {todoGroup.name}
            <div>
              { todoGroup.totalItems === todoGroup.doneItems
                ? <p>{todoGroup.doneItems} of {todoGroup.totalItems} item(s) done</p>
                : <p>{todoGroup.doneItems} item(s) done</p>
              }
            </div>
            { todoGroup.totalItems === todoGroup.doneItems
              ? <FiCheckCircle size={30} />
              : <FiCircle size={30} />
            }
          </Link>
        ))}
      </TodoGroups>
    </>
  );
};

export default Home;
