import React, { useState } from 'react';
import EditUserForm from './EditUserForm';
import './Css/UserList.css';

const UserList = ({ users, setUsers, deleteUser }) => {
  const [editUser, setEditUser] = useState(null);

  const handleEditUser = (user) => {
    setEditUser(user);
  };

  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );

    setUsers(updatedUsers);
    setEditUser(null);
  };

  const closeModal = () => {
    setEditUser(null);
  };

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <button onClick={() => handleEditUser(user)}>Edit</button>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
      {editUser && (
        <div>
          <h3>Edit User</h3>
          <EditUserForm
            currentUser={editUser}
            updateUser={handleUpdateUser}
            closeModal={closeModal}
          />
        </div>
      )}
    </div>
  );
};

export default UserList;
