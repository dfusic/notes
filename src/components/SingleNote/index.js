import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from 'react-uuid';

import MarkdownPreview from '../MarkdownPreview';

import Modal from '../Modal';
import Flexbox from '../Flexbox';
import Button from '../Button';

import useNotes from '../../hooks';

import { BackIcon, EditIcon, DeleteIcon, SaveIcon } from '../../icons';

const SingleNote = props => {
  const { content, id, addNewNote } = props;

  // used for showing/not showing modal
  const [showModal, setShowModal] = useState(false);
  // used for getting the textArea value
  const [textareaValue, setTextareaValue] = useState(addNewNote ? '' : content);

  console.log({ textareaValue, content });
  const onTextareaChange = e => setTextareaValue(e.target.value);

  // toggles between editing mode and markdown preview mode
  // if the component is used for adding new note then it displays edit mode by default
  // otherwise it displays preview mode
  const [isEditing, setIsEditing] = useState(!!addNewNote);

  const openModal = () => setShowModal(true);

  const { remove, save, add } = useNotes();

  const closeModal = () => {
    if (addNewNote) {
      add({
        id: uuid(),
        content: textareaValue
      });
    }
    setShowModal(false);
  };

  const onDelete = () => remove({ id });

  const toggleEditMode = () => {
    if (isEditing) {
      save({ id, content: textareaValue });
    }
    setIsEditing(!isEditing);
  };

  // componentWIllUnoumt

  // eslint-disable-next-line arrow-body-style
  useEffect(() => {
    return () => {
      console.log('unmount');
    };
  }, []);

  return (
    <>
      {showModal && (
        <Modal>
          <Modal.Header>
            <Flexbox
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button onClick={closeModal}>
                <img src={BackIcon} alt="Go back" />
              </Button>
              <div>
                <Button onClick={toggleEditMode}>
                  <img src={isEditing ? SaveIcon : EditIcon} alt="Edit" />
                </Button>
                <Button onClick={onDelete}>
                  <img src={DeleteIcon} alt="Delete" />
                </Button>
              </div>
            </Flexbox>
          </Modal.Header>
          <Modal.Content>
            {isEditing ? (
              <StyledTextArea
                value={textareaValue}
                onChange={onTextareaChange}
              />
            ) : (
              <MarkdownPreview markdown={textareaValue} />
            )}
          </Modal.Content>
        </Modal>
      )}
      <StyledSingleNote
        onClick={openModal}
        id={id}
        className="single-note"
        $addNewNote={addNewNote}
      >
        {addNewNote ? (
          <p>Add new note</p>
        ) : (
          <MarkdownPreview markdown={content} />
        )}
      </StyledSingleNote>
    </>
  );
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
  overflow: hidden;
  display: flex;
  justify-content: ${({ $addNewNote }) =>
    $addNewNote ? 'center' : 'flex-start'};
  align-items: ${({ $addNewNote }) => ($addNewNote ? 'center' : 'flex-start')};

  &:hover,
  &:focus {
    border-color: #b90445;
  }
`;

const StyledTextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 744px;
  border: none;
  font-sioze: 14px;
  font-family: 'Roboto Mono', monospace;
  resize: none;

  &:focus,
  &:hover {
    border: none;
    outline: none;
  }
`;

SingleNote.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string,
  addNewNote: PropTypes.bool
};

SingleNote.defaultProps = {
  addNewNote: false,
  content: ''
};

export default SingleNote;
