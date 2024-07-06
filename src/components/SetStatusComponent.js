import React, { useState } from 'react';

const SetStatusComponent = () => {
    const [token, setToken] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const handleTokenChange = (e) => {
        setToken(e.target.value);
    };

    const handleSetStatus = async () => {
        const data = {
            token: token,
            status: "increased"
        };

        console.log(data);

        try {
            const response = await fetch('http://193.19.100.32:7000/api/set-status', {
                // mode: 'no-cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)

            });

            console.log(response);

            if (response.ok) {
                setStatusMessage('Статус increased зафиксирован. Задание выполнено');
            } else {
                setStatusMessage('Error setting status');
            }
        } catch (error) {
            setStatusMessage('Error setting status');
        }
    };

    return (
        <div>
            <input type="password" value={token} onChange={handleTokenChange} placeholder="Введите токен" />
            <button onClick={handleSetStatus}>Установить статус increased</button>
            <p>{statusMessage}</p>
        </div>
    );
};

export default SetStatusComponent;