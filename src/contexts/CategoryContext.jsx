import React, { createContext, useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider =({children}) => {
    const [category, setCategory] = useState('anime');
    return (        
        <CategoryContext.Provider
            value={{category, setCategory}}
        >
            { children }
        </CategoryContext.Provider>
    )
}