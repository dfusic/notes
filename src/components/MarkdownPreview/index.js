import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const MarkdownPreview = ({ markdown }) => (
  <StyledMarkdownPreview>{markdown}</StyledMarkdownPreview>
);

const StyledMarkdownPreview = styled(ReactMarkdown)`
  font-family: 'Merriweather', serif;
  display: block;
`;

MarkdownPreview.propTypes = {
  markdown: PropTypes.string
};

MarkdownPreview.defaultProps = {
  markdown: ''
};

export default MarkdownPreview;
