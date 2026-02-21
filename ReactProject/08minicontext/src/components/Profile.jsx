import React ,{useContext}from 'react';
import UserContext from "../context/context"; // Correct path to Context.js


function Profile() {
    // Destructures the 'user' object from the context value
    const {user} = useContext(UserContext); 


    if(!user){ 
        return <div> Please Login </div>
    }

    return (
        <div>
            {/* Accesses the username property set in Login.jsx */}
            <h2> Welcome {user.username}</h2>
        </div>
    );
}

export default Profile;