import React ,{useState, useContext}from 'react';
import UserContext from "../context/context"; // Correct path to Context.js


function Login() {
    const [username , setUsername] = useState(''); // Corrected setter name
    const [password , setPassword] = useState(''); // Corrected setter name

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        // 1. Must pass the event 'e' to the function signature
        e.preventDefault(); // Prevents page reload on form submission 
        
        // 2. Call setUser with the new state object
        setUser({ username, password }); 
        
        // Optional: clear the form fields
        // setUsername('');
        // setPassword('');
    }

    return (
        <div>
            <h2> Login </h2>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text" 
                placeholder='username' 
            />
            <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" 
                placeholder='password' 
            />
            {/* The handler now receives the event object implicitly from the button click */}
            <button onClick={handleSubmit}>Submit </button> 
        </div>
    )
}

export default Login