// useNotes hook, used for accessing notes state

const { localStorage } = window;

const notes = [
  {
    id: 'note1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat nisi ac nunc convallis volutpat. Mauris eu enim rutrum, porttitor mi eu, facilisis est. '
  },
  {
    id: 'note2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat nisi ac nunc convallis volutpat. Mauris eu enim rutrum, porttitor mi eu, facilisis est. '
  },
  {
    id: 'note3',
    content: '<h1>Content</h1><p>lorem ipsum dolor sit amet </p>'
  },
  {
    id: 'note4',
    content: '<h1>Content</h1><p>lorem ipsum dolor sit amet </p>'
  },
  {
    id: 'note5',
    content: '<h1>Content</h1><p>lorem ipsum dolor sit amet </p>'
  },
  {
    id: 'note6',
    content: '<h1>Content</h1><p>lorem ipsum dolor sit amet </p>'
  },
  {
    id: 'note7',
    content: '<h1>Content</h1><p>lorem ipsum dolor sit amet </p>'
  },
  {
    id: 'note8',
    content: '<h1>Content</h1><p>lorem ipsum dolor sit amet </p>'
  },
  {
    id: 'note9',
    content: '<h1>Content</h1><p>lorem ipsum dolor sit amet </p>'
  },
  {
    id: 'note10',
    content: '<h1>Content</h1><p>lorem ipsum dolor sit amet </p>'
  },
  {
    id: 'note11',
    content: '<h1>Content</h1><p>lorem ipsum dolor sit amet </p>'
  },
  {
    id: 'note12',
    content: '<h1>Content</h1><p>lorem ipsum dolor sit amet </p>'
  },
  {
    id: 'note13',
    content: '<h1>Content</h1><p>lorem ipsum dolor sit amet </p>'
  },
  {
    id: 'note14',
    content: '<h1>Content</h1><p>lorem ipsum dolor sit amet </p>'
  }
];

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
