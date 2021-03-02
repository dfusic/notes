import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = props => {
  const { children, onClick, disabled } = props;

  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
`;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  disabled: false
};

export default Button;
