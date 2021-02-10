import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import PropTypes from 'prop-types';

const Overlay = ({ children, centerChildren }) => {
  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={animationProps}>
      <StyledOverlay $centerChildren={centerChildren}>{children}</StyledOverlay>
    </animated.div>
  );
};

const StyledOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.25);
  top: 0;
  left: 0;
  display: flex;
  justify-content: ${({ $centerChildren }) =>
    $centerChildren ? 'center' : 'flex-start'};
  align-items: ${({ $centerChildren }) =>
    $centerChildren ? 'center' : 'flex-start'};
`;

Overlay.propTypes = {
  centerChildren: PropTypes.bool
};

Overlay.defaultProps = {
  centerChildren: false
};

export default Overlay;
