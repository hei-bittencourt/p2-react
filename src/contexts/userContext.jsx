import React, { createContext, useEffect, useState } from "react";


export const UserContext = createContext();

export const UserProvider = ({children}) =>{
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if(storedUser){
            try {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
              } catch (error) {
                console.error('Failed to parse user from localStorage:', error);
                localStorage.removeItem('user');
              }
        }
    }, []);

    const saveUser = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logoutUser = () => {
        setUser(null);
        console.log(user)
        localStorage.removeItem('user');
    }

    return (
        <UserContext.Provider value={{user, saveUser, logoutUser}}>
            {children}
        </UserContext.Provider>
    )
}