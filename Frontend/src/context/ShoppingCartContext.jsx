/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useAuth } from "./AuthContext";
export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [count, setCount] = useState(0);

  console.log(count);
  return (
    <>
      {isAuthenticated ? (
        <ShoppingCartContext.Provider
          value={{
            count,
            setCount,
          }}
        >
          {children}
        </ShoppingCartContext.Provider>
      ) : (
        <></>
      )}
    </>
  );
};
