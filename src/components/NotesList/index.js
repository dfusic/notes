import React from 'react';
import styled from 'styled-components';

import SingleNote from '../SingleNote';
import NewNoteButton from '../NewNoteButton';

import NotesContext from '../../context/NotesContext';

const NotesList = () => (
  <StyledNotesList>
    <NewNoteButton onClick={() => console.log('add new note')} />
    <NotesContext.Consumer>
      {({ notes }) =>
        notes.map(note => (
          <SingleNote content={note.content} id={note.id} key={note.id} />
        ))
      }
    </NotesContext.Consumer>
  </StyledNotesList>
);

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
