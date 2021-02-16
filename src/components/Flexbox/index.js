import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Flexbox = props => {
  const { flexDirection, justifyContent, alignItems, children } = props;

  return (
    <StyledFlexbox
      $flexDirection={flexDirection}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
    >
      {children}
    </StyledFlexbox>
  );
};

const StyledFlexbox = styled.div`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || 'row'};
  align-items: ${({ $alignItems }) => $alignItems || 'flex-start'};
  justify-content: ${({ $justifyContent }) => $justifyContent || 'flex-start'};
`;

Flexbox.propTypes = {
  flexDirection: PropTypes.oneOf(['row', 'column']),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'space-between'
  ]),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'space-between'
  ])
};

Flexbox.defaultProps = {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start'
};

export default Flexbox;
