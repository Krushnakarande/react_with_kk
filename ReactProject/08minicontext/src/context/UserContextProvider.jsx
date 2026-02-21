import React, { useState } from "react";
import UserContext from "./context"; // Imports the adjacent Context.js file

const UserContextProvider = ({ children }) => { // Standard prop name is 'children'
    const [user, setUser] = useState(null); // Standard setter name is 'setUser'
    
    // Note: If you were using this component to wrap your App, you would import it like:
    // import UserContextProvider from "./context/UserContextProvider";

    return (
        // Use the Context object's .Provider
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;