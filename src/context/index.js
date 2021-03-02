import React, { createContext, useState, useEffect, useMemo } from 'react';

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  // if the notes didn't change then return the memoized/"cached" notes
  const memoizedNotes = useMemo(() => notes, [notes]);

  // componentDidMount
  useEffect(() => {
    const localStorageNotes = JSON.parse(localStorage.getItem('notes'));
    if (localStorageNotes && localStorageNotes.notes) {
      setNotes(localStorageNotes.notes);
    }
  }, []);

  // on notes update save it to the local storage
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify({ notes: memoizedNotes }));
  }, [memoizedNotes]);

  return (
    <NotesContext.Provider value={{ notes: memoizedNotes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesProvider };
