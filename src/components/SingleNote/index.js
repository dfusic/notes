import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Modal from '../Modal';

const createMarkdownDisplay = content => ({
  __html: content
});

const SingleNote = props => {
  const { content = '', id } = props;

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      {showModal && (
        <Modal onClose={closeModal}>
          <h1>Modal</h1>
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
