import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [saldo, setSaldo] = useState(0);

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        saldo,
        setSaldo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
