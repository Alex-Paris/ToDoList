import React, {useState} from 'react';
import {FiCircle, FiCheckCircle} from 'react-icons/fi';
import { Link } from 'react-router-dom';


import { Header, TodoGroups } from './styles';

interface TodoGroup {
  name: string;
  totalItems: number;
  doneItems: number;
}

const Home: React.FC = () => {
  const [todoDone, setTodoDone] = useState('');
  const [todoGroups, setTodoGroups] = useState<TodoGroup[]>(() => {
    return ([
      {name: 'places to go', totalItems: 0, doneItems: 0},
      {name: 'places to go', totalItems: 2, doneItems: 1},
      {name: 'places to go', totalItems: 2, doneItems: 2},
      {name: 'places to go', totalItems: 3, doneItems: 0}
    ]);

  });

  return (
    <>
      <Header>
        <h3>ToDo Group List</h3>
        <button>Add Group List</button>
        <hr />
      </Header>
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
