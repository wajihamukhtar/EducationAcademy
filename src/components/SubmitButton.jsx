import React from 'react';
import { StyledButton } from '../../theme';

const SubmitButton = ({
  
  text,
  style,
  onClick,
  startIcon,
  endIcon,
  variant = 'contained',
  disabled = false,
  type = 'submit', 
}) => {
  return (
    text && (
      <StyledButton
        type={type}
        variant={variant}
        sx={style}
        text={text}
        onClick={onClick}
        startIcon={startIcon}
        endIcon={endIcon}
        disabled={disabled}
        disableRipple
      >
        {text}
      </StyledButton>
    )
  );
};

export default SubmitButton;