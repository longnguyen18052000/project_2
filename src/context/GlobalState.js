import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {

    const [valueButton, setValueButton] = useState();
    return (
        <GlobalContext.Provider value={{valueButton,setValueButton}}>{children}</GlobalContext.Provider>
    )
}
