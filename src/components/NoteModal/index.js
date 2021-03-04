import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import Modal from '../Modal';
import Flexbox from '../Flexbox';
import Button from '../Button';
import MarkdownPreview from '../MarkdownPreview';

import useNotes from '../../hooks';

import { BackIcon, EditIcon, DeleteIcon, SaveIcon } from '../../icons';

const NoteModal = props => {
  const { id, onClose, addNewNote } = props;

  const { get, remove, add, save } = useNotes();

  const [isEditing, setIsEditing] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');

  useEffect(() => {
    const note = get({ id });
    if (note?.content) {
      setTextareaValue(note.content);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (addNewNote) {
      setTextareaValue('');
      setIsEditing(true);
    }
  }, [addNewNote]);

  const toggleEditMode = () => setIsEditing(!isEditing);

  const onModalClose = () => {
    if (addNewNote) {
      if (textareaValue.length === 0) {
        // eslint-disable-next-line no-alert
        alert("You didn't add any content to the note. Closing. ");
        onClose();
        return;
      }

      add({
        id: uuid(),
        content: textareaValue
      });
    }

    if (!addNewNote) {
      save({
        id,
        content: textareaValue
      });
    }

    onClose();
  };

  const onDelete = () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Are you sure you want to delete this note?')) {
      remove({ id });
      onClose();
    }
  };

  const onTextareaChange = e => {
    // immutability
    let currentTextareaValue = textareaValue;
    currentTextareaValue = e.target.value;
    setTextareaValue(currentTextareaValue);
  };

  return (
    <Modal>
      <Modal.Header>
        <Flexbox
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button onClick={onModalClose}>
            <img src={BackIcon} alt="Go back" />
          </Button>
          <Flexbox
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            <Button onClick={toggleEditMode}>
              <StyledIcon src={isEditing ? SaveIcon : EditIcon} alt="Edit" />
            </Button>
            <Button onClick={onDelete}>
              <StyledIcon src={DeleteIcon} alt="Delete" />
            </Button>
          </Flexbox>
        </Flexbox>
      </Modal.Header>
      <Modal.Content>
        {isEditing ? (
          <StyledTextArea
            autoFocus
            value={textareaValue}
            onChange={onTextareaChange}
          />
        ) : (
          <MarkdownPreview markdown={textareaValue} />
        )}
      </Modal.Content>
    </Modal>
  );
};

export default NoteModal;

NoteModal.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

const StyledTextArea = styled.textarea`
  display: block;
  width: 99%;
  height: 691px;
  overflow-x: hidden;
  border: none;
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
  resize: none;

  &:focus,
  &:hover {
    border: none;
    outline: none;
  }
`;

const StyledIcon = styled.img`
  height: 19px;
`;
