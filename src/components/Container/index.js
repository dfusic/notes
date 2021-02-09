import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;

const StyledContainer = styled.div`
  width: calc(100% - 200px);
  margin: 0 auto;
  border: 1px solid red;
  font-family: 'Roboto', sans-serif;
`;
