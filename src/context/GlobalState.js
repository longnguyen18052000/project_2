import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
  const [valueButton, setValueButton] = useState();
  const [inputs, setInputs] = useState({
    selectService: "",
    date: "",
    time: "",
    codeNumber: "",
    mota: "",
    cost: 0,
  });
  const [infoInput, setInfoInput] = useState({
    username: "",
    yearInfo: "",
    phoneInfo: "",
    sex: "",
    address: "",
  });
  return (
    <GlobalContext.Provider
      value={{
        valueButton,
        setValueButton,
        setInputs,
        inputs,
        infoInput,
        setInfoInput,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
