// useNotes hook, used for accessing notes state

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

// append new note to the note array
const setNote = () => {
  console.log('set note');
};

// get one note via ID
const getNotes = () => notes;

// remove one note via id
const removeNote = () => {
  console.log('remove note');
};

// update one note via id
const updateNote = () => {
  console.log('update note with id');
};

// batch remove notes form array
// takes in array of IDs -> ["id1", "id2", "id3"]
const removeNotes = () => {
  console.log('remove multiple notes');
};

export default { setNote, getNotes, removeNote, removeNotes, updateNote };
