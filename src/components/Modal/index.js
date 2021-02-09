import React from 'react';
import styled from 'styled-components';

const Modal = ({ children }) => <StyledModal>{children}</StyledModal>;

const StyledModal = styled.div`
  width: 300px;
  height: 300px;
  display: block;
  border: 2px solid blue;
`;

export default Modal;
