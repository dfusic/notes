import React, { useContext } from 'react';
import styled from 'styled-components';

import { NotesContext } from '../../context/index';
import SingleNote from '../SingleNote';

const NotesList = () => {
  const { notes } = useContext(NotesContext);

  return (
    <StyledNotesList>
      <SingleNote addNewNote />
      {notes.map(note => (
        <SingleNote content={note.content} id={note.id} key={note.id} />
      ))}
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
