import React, { useState } from 'react';
import RolesComponent from './components/RolesComponent';
import TokenComponent from './components/TokenComponent';
import SignUpForm from './components/SignUpForm';
import GetCodeComponent from './components/GetCodeComponent';
import SetStatusComponent from './components/SetStatusComponent';

const App = () => {
  const [roles, setRoles] = useState([]);
  // const [token, setToken] = useState('');

  const fetchRoles = async () => {
    const response = await fetch('http://193.19.100.32:7000/api/get-roles');
    const data = await response.json();
    setRoles(data.roles);
  };

  return (
    <div>
      <RolesComponent roles={roles} fetchRoles={fetchRoles} />
      <SignUpForm />
      <GetCodeComponent />
      <TokenComponent />
      <SetStatusComponent />
    </div>
  );
};

export default App;