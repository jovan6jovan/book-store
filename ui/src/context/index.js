import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <AppContext.Provider value={{ books, users }}>
      {props.children}
    </AppContext.Provider>
  );
};

const AppConsumer = AppContext.Consumer;

export { AppContext, AppProvider, AppConsumer };
