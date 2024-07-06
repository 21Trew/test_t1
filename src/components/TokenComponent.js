import React, { useState } from 'react';

const TokenComponent = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [token, setToken] = useState('');

  const handleGenerateToken = () => {
    const dataToEncode = `${email}:${code}`;
    const token = btoa(dataToEncode);
    setToken(token);
    console.log(token);
  };

  return (
    <div>
      <h2>Токен:</h2>
      <input type="text" placeholder="Ваш Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Полученный код" value={code} onChange={(e) => setCode(e.target.value)} />
      <button onClick={handleGenerateToken}>Сгенерировать токен</button>
      <p>Это ваш токен: <input type="password" value={token} readOnly /> <br/>Скопируйте его и вставьте в поле ниже</p>
    </div>
  );
};

export default TokenComponent;