import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmailLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [id, setId] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8383/auth/login/email', {
                email: email,
                password: password
            }, {
                headers: {
                    'EcoBillKey': 'EcoBillValue'
                }
            });
            console.log(response);
            if (response && response.data && response.data.token) {
                const token = response.data.token;
                const userId = response.data.id;
                localStorage.setItem('token', token);
                setId(userId);
                navigate('/dashboard', { state: { id: userId } });
            } else {
                setError('Invalid response from server');
            }
        } catch (error) {
            console.error('Error occurred during API call:', error);
            setError('Invalid phone number or password');
        }
    };

    return (
        <div>
            <h2>Email Login</h2>
            {error && <div>{error}</div>}
            <div>
                <label>Email Login:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleLogin}>Login</button>

            {id && <div>Logged in user ID: {id}</div>}
        </div>
    );
};

export default EmailLogin;
