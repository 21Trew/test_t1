import React, { useState } from 'react';

function SignUpForm() {
  const [formData, setFormData] = useState({
    last_name: '',
    first_name: '',
    email: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      const response = await fetch('http://193.19.100.32:7000/api/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Sign-up successful');
        console.log(response);
      } else {
        console.error('Sign-up failed');
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div>
      <h2>Форма регистрации</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Фамилия" />
        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="Имя" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <input type="text" name="role" value={formData.role} onChange={handleChange} placeholder="Роль" />
        <button type="submit">Отправить</button>
      </form>
    </div>

  );
}

export default SignUpForm;