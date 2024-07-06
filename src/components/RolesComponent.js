import React from 'react';

const RolesComponent = ({ roles, fetchRoles }) => {
  return (
    <div>
      <h2>Роли:</h2>
      <p>Чтобы ознакомиться со списком доступных ролей, нажмите кнопку "Ознакомиться"</p>
      <button onClick={fetchRoles}>Ознакомиться</button>
      <ul>
        {roles.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>
    </div>
  );
};

export default RolesComponent;