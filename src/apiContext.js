import React, { useContext, useState, useEffect, createContext } from "react";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [ recipes, setRecipes ] = useState([]);
  const [ url, setUrl ] = useState('http://localhost:4000/recipes/')

  useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setRecipes(data);
            })
  }, []);

  return (
    <APIContext.Provider
      value={{
        recipes,
        url,
        setUrl,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}