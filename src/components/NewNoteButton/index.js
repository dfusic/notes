import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NewNoteButton = ({ onClick }) => (
  <StyledNewNoteButton onClick={onClick} className="single-note">
    <p>Add new</p>
  </StyledNewNoteButton>
);

const StyledNewNoteButton = styled.li`
  width: 200px;
  height: 200px;
  color: white;
  border-radius: 10px;
  background-color: #b90445;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  cursor: pointer;
  border: 3px solid #b90445;
  transition: border-color 200ms ease-in-out;

  &:hover,
  &:focus {
    border-color: #fdfdfd;
  }
`;

NewNoteButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default NewNoteButton;
