import React from 'react';
import styled from 'styled-components';

import Overlay from '../Overlay';

const Modal = ({ children }) => (
  <Overlay centerChildren>
    <StyledModal>{children}</StyledModal>
  </Overlay>
);

const Header = ({ children }) => (
  <StyledModalHeader>{children}</StyledModalHeader>
);

const Content = ({ children }) => (
  <StyledModalContent>{children}</StyledModalContent>
);

const StyledModal = styled.div`
  width: 800px;
  height: 900px;
  display: block;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 50px;
`;

const StyledModalHeader = styled.div`
  display: block;
  width: 100%;
  height: 80px;
`;

const StyledModalContent = styled.div`
  display: block;
  width: 100%;
  height: 710px;
  overflow-y: auto;
`;

Modal.Header = Header;
Modal.Content = Content;

export default Modal;
