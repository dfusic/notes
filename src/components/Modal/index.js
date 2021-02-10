import React, { useEffect } from 'react';
import styled from 'styled-components';

import Overlay from '../Overlay';

const Modal = ({ children, onClose }) => {
  // componentDidMount
  // listen for escape key
  useEffect(() => {
    document.addEventListener('keydown', e => {
      console.log(e.keyCode);
      if (e.keyCode === 27) {
        onClose();
      }
    });
  }, []);

  // componentWillUnmount
  // remove listener for escape key

  useEffect(() => {
    return document.removeEventListener('keydown');
  }, []);

  return (
    <Overlay centerChildren>
      <StyledModal>
        <button onClick={onClose} type="button">
          Close
        </button>
        {children}
      </StyledModal>
    </Overlay>
  );
};

const StyledModal = styled.div`
  width: 800px;
  height: 900px;
  display: block;
  background-color: #ffffff;
`;

export default Modal;
