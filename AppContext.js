// AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [listOfItems, setListOfItems] = useState([
    { text: "TEST", fav: true, key: Math.random().toString(36).substring(7) },
    { text: "TEST2\n1\n2\n3", fav: false, key: Math.random().toString(36).substring(7) }
  ]);

  const addItem = (data) => {
    setListOfItems((list) => [
      { text: data.text, fav: data.fav, key: Math.random().toString(36).substring(7) },
      ...list,
    ]);
  };

  const deleteItem = (key) => {
    setListOfItems((list) => list.filter(item => item.key !== key));
  };

  const changeItem = (key, data) => {
    setListOfItems((list) => {
      const itemIndex = list.findIndex(item => item.key === key);
      if (itemIndex !== -1) {
        const updatedList = [...list];
        updatedList[itemIndex] = { ...updatedList[itemIndex], ...data };
        return updatedList;
      }
      return list;
    });
  };

  return (
    <AppContext.Provider value={{ listOfItems, addItem, deleteItem, changeItem }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
