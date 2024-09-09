import { TextField, styled } from "@mui/material"

type ColorxTextFieldProps = {
    colorx?: string;
  };
  
export const ColorxTextField = styled(TextField, {
    shouldForwardProp: (prop) => prop !== 'colorx',
  })<ColorxTextFieldProps>(({ colorx = 'black' }) => ({
    '& .MuiInput-underline': {
      borderBottom: `2px solid ${colorx}`, 
    },
    '& .MuiInput-underline:after': {
      borderBottom: `2px solid ${colorx}`,
    },
    '& .MuiInputLabel-root': {
      right: 0,
      left: 'unset', 
      textAlign: 'right', 
      color: colorx,
    },
    '& .MuiInputLabel-shrink': {
      color: `${colorx} !important`,
    },
    '& .MuiInputBase-input': {
      color: colorx,
    }
}));