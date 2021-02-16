import React, { createContext, useState, useEffect } from 'react';

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  // componentDidMount

  useEffect(() => {
    const localStorageNotes = JSON.parse(localStorage.getItem('notes'));
    if (localStorageNotes && localStorageNotes.notes) {
      setNotes(localStorageNotes.notes);
    }
  }, []);

  // on notes update save it to the local storage
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify({ notes }));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesProvider };
