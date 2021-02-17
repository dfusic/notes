import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;

const StyledContainer = styled.div`
  width: calc(100% - 150px);
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: 'Roboto', sans-serif;

  @media screen and (max-width: 985px) {
    justify-content: center;
  }
`;
