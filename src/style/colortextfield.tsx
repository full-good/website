// import { TextField, styled } from "@mui/material"

// type ColorxTextFieldProps = {
//     colorx?: string;
//   };
  
// export const ColorxTextField = styled(TextField, {
//     shouldForwardProp: (prop) => prop !== 'colorx',
//   })<ColorxTextFieldProps>(({ colorx = 'black' }) => ({
//     '& .MuiInput-underline': {
//       borderBottom: `2px solid ${colorx}`, 
//     },
//     '& .MuiInput-underline:after': {
//       borderBottom: `2px solid ${colorx}`,
//     },
//     '& .MuiInputLabel-root': {
//       right: 0,
//       left: 'unset', 
//       textAlign: 'right', 
//       color: colorx,
//     },
//     '& .MuiInputLabel-shrink': {
//       color: `${colorx} !important`,
//     },
//     '& .MuiInputBase-input': {
//       color: colorx,
//     }
// }));

import { TextField, styled } from "@mui/material";

type ColorxTextFieldProps = {
    borderColor?: string;
    textColor?: string;
};

export const ColorxTextField = styled(TextField, {
    shouldForwardProp: (prop) => prop !== 'colorx',
})<ColorxTextFieldProps>(({ borderColor = 'black', textColor = 'black' }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: borderColor,
            borderRadius: '30px',
        },
        '&:hover fieldset': {
            borderColor: borderColor,
        },
        '&.Mui-focused fieldset': {
            borderColor: borderColor,
        },
    },
    '& .MuiInputLabel-root': {
        color: textColor,
    },
    '& .MuiInputLabel-shrink': {
        color: `${textColor} !important`,
    },
    '& .MuiInputBase-input': {
        color: textColor,
    }
}));
