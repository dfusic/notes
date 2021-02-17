import React, { useContext } from 'react';
import styled from 'styled-components';

import { NotesContext } from '../../context/index';
import SingleNote from '../SingleNote';

const NotesList = () => {
  const { notes } = useContext(NotesContext);

  return (
    <StyledNotesList>
      <SingleNote addNewNote id="add-new-note" />
      {notes.map(note => (
        <SingleNote id={note.id} key={note.id} content={note.content} />
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

  @media screen and (max-width: 985px) {
    justify-content: center;
  }
`;

export default NotesList;
