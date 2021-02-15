// useNotes hook, used for accessing notes state

const { localStorage } = window;

// set notes in localStorage
const setNotes = data => localStorage.setItem('notes', data);

// get one note via id
const getNoteById = id => {
  const localStorageNotes = JSON.parse(localStorage.getItem('notes'));

  return localStorageNotes.find(note => note.id === id);
};

// remove note by id
const deleteNoteById = id => {
  const localStorageNotes = JSON.parse(localStorage.getItem('notes'));
  return localStorageNotes.filter(note => note.id !== id);
};

export default { setNotes, getNoteById, deleteNoteById };
