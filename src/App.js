import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    // Generate a unique ID for the user
    user.id = Date.now().toString();

    setUsers([...users, user]);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div>
      <h2>User Management Application</h2>
      <UserForm addUser={addUser} />
      <UserList users={users} setUsers={setUsers} deleteUser={deleteUser} />
    </div>
  );
};

export default App;

