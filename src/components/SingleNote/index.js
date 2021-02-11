import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import Modal from '../Modal';
import Flexbox from '../Flexbox';
import Button from '../Button';

import { BackIcon, EditIcon, DeleteIcon } from '../../icons';

const createMarkdownDisplay = content => ({
  __html: content
});

const SingleNote = props => {
  const { content = '', id } = props;

  // used for showing/not showing modal
  const [showModal, setShowModal] = useState(false);
  // used for getting the textArea value
  const [textareaValue, setTextareaValue] = useState('');
  // toggles between editing mode and markdown preview mode
  // const [isEditing, setIsEditing] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const onTextareaChange = e => setTextareaValue(e.target.value);

  const dummyFunc = () => console.log('DUMMY');

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
                <Button onClick={dummyFunc}>
                  <img src={EditIcon} alt="Edit" />
                </Button>
                <Button onClick={dummyFunc}>
                  <img src={DeleteIcon} alt="Delete" />
                </Button>
              </div>
            </Flexbox>
          </Modal.Header>
          <Modal.Content>
            <textarea
              value={textareaValue}
              onChange={e => onTextareaChange(e)}
            />
            <ReactMarkdown>{textareaValue}</ReactMarkdown>
          </Modal.Content>
        </Modal>
      )}
      <StyledSingleNote onClick={openModal} id={id} className="single-note">
        <div dangerouslySetInnerHTML={createMarkdownDisplay(content)} />
      </StyledSingleNote>
    </>
  );
};

const StyledSingleNote = styled.li`
  width: 200px;
  height: 200px;
  background-color: #fdfdfd;
  border-radius: 10px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  padding: 20px;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'auto')};
  border: 3px solid #fdfdfd;
  transition: border-color 200ms ease-in-out;
  user-select: none;

  &:hover,
  &:focus {
    border-color: #b90445;
  }
`;

SingleNote.propTypes = {
  id: PropTypes.string.isRequired
};

export default SingleNote;
