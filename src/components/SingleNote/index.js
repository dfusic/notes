import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import uuid from 'react-uuid';

import MarkdownPreview from '../MarkdownPreview';
import NoteModal from '../NoteModal';

const SingleNote = props => {
  const { id, content, addNewNote } = props;

  // used for showing/not showing modal
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      {showModal && (
        <NoteModal
          onClose={closeModal}
          id={id}
          addNewNote={addNewNote}
          content={content}
        />
      )}
      <StyledSingleNote
        onClick={openModal}
        id={id}
        $addNewNote={addNewNote}
        className="single-note"
      >
        {addNewNote ? (
          <p className="add-new-note-plus">+</p>
        ) : (
          <StyledMarkdownPreviewWrapper>
            <MarkdownPreview markdown={content} />
          </StyledMarkdownPreviewWrapper>
        )}
      </StyledSingleNote>
    </>
  );
};

SingleNote.defaultProps = {
  addNewNote: false
};

const StyledSingleNote = styled.li`
  width: 200px;
  height: 200px;
  background-color: ${({ $addNewNote }) =>
    $addNewNote ? '#B90445' : '#fdfdfd;'};
  color: ${({ $addNewNote }) => ($addNewNote ? 'white' : 'black')};
  border-radius: 10px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  padding: 20px;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'auto')};
  border: 3px solid #fdfdfd;
  transition: border-color 200ms ease-in-out;
  user-select: none;

  display: flex;
  justify-content: ${({ $addNewNote }) =>
    $addNewNote ? 'center' : 'flex-start'};
  align-items: ${({ $addNewNote }) => ($addNewNote ? 'center' : 'flex-start')};

  position: relative;
  transform-origin: top left;
  overflow: hidden;
  z-index: 998;

  &:hover,
  &:focus {
    border-color: ${({ $addNewNote }) => ($addNewNote ? 'none' : '#b90445')};
  }

  & > .add-new-note-plus {
    color: white;
    font-size: 64px;

    font-family: 'Roboto', sans-serif;
  }
`;

const StyledMarkdownPreviewWrapper = styled.span`
  display: block;
  width: 100%;
  height: 100%;

  transform: scale(0.25) translate(calc(50% + 80px), calc(50% + 80px));
  position: absolute;
  top: -50%;
  left: -50%;
`;

SingleNote.propTypes = {
  id: PropTypes.string.isRequired,
  addNewNote: PropTypes.bool
};

export default SingleNote;
