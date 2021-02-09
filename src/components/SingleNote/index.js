import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const createMarkdownDisplay = content => ({
  __html: content
});

const SingleNote = props => {
  const { content = '', id, onClick } = props;

  return (
    <StyledSingleNote onClick={onClick} id={id} className="single-note">
      <div dangerouslySetInnerHTML={createMarkdownDisplay(content)} />
    </StyledSingleNote>
  );
};

const StyledSingleNote = styled.div`
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
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SingleNote;
