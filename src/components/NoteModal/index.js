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
  const { id, onClose, addNewNote, content } = props;

  const { get, remove, add, save } = useNotes();

  const [isEditing, setIsEditing] = useState(!!addNewNote);
  const [textareaValue, setTextareaValue] = useState(addNewNote ? '' : content);

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

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
    remove({ id });
    onClose();
  };

  const onTextareaChange = e => setTextareaValue(e.target.value);

  // on component mount get the note by id
  useEffect(() => {
    const note = get({ id });
    if (note && note.content && note.id) {
      setTextareaValue(note.content);
    }
    // Optimistic programming :D
    // we only want to run the useEffect hook on mount
    // but eslint detects that the get and note should be dep's
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <StyledTextArea value={textareaValue} onChange={onTextareaChange} />
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
  font-sioze: 14px;
  font-family: 'Roboto Mono', monospace;
  resize: none;

  &:focus,
  &:hover {
    border: none;
    outline: none;
  }
`;
