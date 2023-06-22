import React, { useState, useEffect } from 'react';

const EditUserForm = ({ currentUser, updateUser, closeModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
    setPhone(currentUser.phone);
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here before updating the user
    // For simplicity, let's assume all fields are required

    // Update the user's details
    const updatedUser = { ...currentUser, name, email, phone };
    updateUser(updatedUser);

    // Close the modal or navigate back to the main page
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit">Update User</button>
      <button type="button" onClick={closeModal}>Cancel</button>
    </form>
  );
};

export default EditUserForm;
