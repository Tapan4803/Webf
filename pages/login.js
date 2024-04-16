import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    useEffect(() => {
        document.body.style.backgroundColor = '#C6EBC5'; // Ensures background color is applied
        return () => {
            document.body.style.backgroundColor = ''; // Resets to default on component unmount
        };
    }, []);

    const validUsername = "admin";
    const validPassword = "password123";

    const handleLogin = async (e) => {
        e.preventDefault();
        if (username === validUsername && password === validPassword) {
            const fakeToken = 'simulated-jwt-token';
            localStorage.setItem('token', fakeToken);
            router.push('/');
        } else {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Welcome to Our Ecommerce Store</h2>
            <div style={styles.formContainer}>
                <form onSubmit={handleLogin}>
                    <div style={styles.inputGroup}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input}
                        />
                    </div>
                    <button type="submit" style={styles.button}>Login</button>
                    {error && <p style={styles.error}>{error}</p>}
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '400px',
        margin: 'auto',
        marginTop: '50px',
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#D9EDBF',
        boxSizing: 'border-box', // Ensure padding is included in width
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputGroup: {
        marginBottom: '10px',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '5px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxSizing: 'border-box', // Fixes potential overflow issue
    },
    button: {
        padding: '10px',
        background: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
    },
};

export default Login;
















// import React, { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const router = useRouter();
//     const validUsername = "admin";
//     const validPassword = "password123";

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         // Check if the entered credentials match the hardcoded ones
//         if (username === validUsername && password === validPassword) {
//             // Simulate obtaining a JWT token
//             const fakeToken = 'simulated-jwt-token';
//             localStorage.setItem('token', fakeToken); // Store the simulated token
//             router.push('/'); // Redirect to the homepage
//         } else {
//             setError('Invalid credentials. Please try again.');
//         }
//     };
    
//     return (
//         <div>
//             <form onSubmit={handleLogin}>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button type="submit">Login</button>
//                 {error && <p>{error}</p>}
//             </form>
//         </div>
//     );
// };

// export default Login;
