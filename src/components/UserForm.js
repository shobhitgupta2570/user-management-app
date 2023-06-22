import React, { useState } from 'react';
import './Css/UserForm.css';

const UserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const validateForm = () => {
    let isValid = true;

    // Validate name
    if (!/^[a-zA-Z ]+$/.test(name)) {
      setNameError('Name should only contain alphabets');
      isValid = false;
    } else {
      setNameError('');
    }

    // Validate email
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Email should be in the format "example@example.com"');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate phone
    if (!/^\d{10}$/.test(phone)) {
      setPhoneError('Phone should be a 10-digit number');
      isValid = false;
    } else {
      setPhoneError('');
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const user = {
        name,
        email,
        phone,
      };

      addUser(user);

      // Reset form fields
      setName('');
      setEmail('');
      setPhone('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {nameError && <p className="error">{nameError}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {emailError && <p className="error">{emailError}</p>}
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        {phoneError && <p className="error">{phoneError}</p>}
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
