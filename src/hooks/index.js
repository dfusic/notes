import { useContext } from 'react';
import { NotesContext } from '../context/index';

const useNotes = () => {
  const { notes, setNotes } = useContext(NotesContext);

  const add = ({ id, content }) => {
    setNotes([...notes, { id, content }]);
  };
  const remove = ({ id }) => {
    setNotes(notes.filter(note => note.id !== id));
  };
  const get = ({ id }) => notes.find(note => note.id === id);

  const save = ({ id, content }) => {
    const newNotes = notes.map(note => {
      if (note.id === id) {
        return {
          ...note,
          content
        };
      }
      return note;
    });

    setNotes(newNotes);
  };

  return {
    add,
    remove,
    get,
    save
  };
};

export default useNotes;
