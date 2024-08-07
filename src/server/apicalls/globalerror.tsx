import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Typography } from '@mui/material';
import { Popup } from '../../components/generic/popup';

const ErrorContext = createContext<any | undefined>(undefined);

export const ErrorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [openError, setOpenError] = useState<boolean>(false);

    const handleClose = () => {
        setOpenError(false);
    };

    return (
        <ErrorContext.Provider value={{ openError, setOpenError }}>
            {children}
            <Popup title={'שגיאה!!'} content={<Typography>המערכת לא יכלה לבצע את הפעולה שרצית, נסה שוב או מאוחר יותר.</Typography>} open={openError} handleClose={handleClose} />
        </ErrorContext.Provider>
    );
};

export const useErrorContext = () => {
    const context = useContext(ErrorContext);
    return context;
};

