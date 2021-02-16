import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const MarkdownPreview = ({ markdown }) => (
  <StyledMarkdownPreview>{markdown}</StyledMarkdownPreview>
);

const StyledMarkdownPreview = styled(ReactMarkdown)`
  font-family: 'Merriweather', serif;
  display: block;
  width: 100%;
  height: 500px;
`;

export default MarkdownPreview;
