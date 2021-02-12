import React, { useState, useEffect } from 'react';
import NotesContext from './NotesContext';

const NotesProvider = ({ children }) => {
  const dummyData = {
    notes: [{ id: 'note1', content: '# test' }]
  };

  localStorage.setItem('notes', JSON.stringify(dummyData));

  const { notes } = window.localStorage;

  const [localStorageNotes, setLocalStorageNotes] = useState('');

  useEffect(() => {
    if (notes.length > 0) {
      setLocalStorageNotes(JSON.parse(notes));
    }
  }, [notes]);

  return (
    <NotesContext.Provider value={localStorageNotes}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
