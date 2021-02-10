import React from 'react';
import styled from 'styled-components';

import SingleNote from '../SingleNote';
import NewNoteButton from '../NewNoteButton';

import notes from '../../hooks/useNotes';

const NotesList = () => {
  const allNotes = notes.getNotes();

  const notesNodes = allNotes.map(note => (
    <SingleNote content={note.content} id={note.id} key={note.id} />
  ));

  return (
    <StyledNotesList>
      <NewNoteButton onClick={() => console.log('add new note')} />
      {notesNodes}
    </StyledNotesList>
  );
};

const StyledNotesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 80px 0;
  text-align: left;
  justify-content: flex-start;

  & .single-note {
    margin: 30px 30px;
  }
`;

export default NotesList;
