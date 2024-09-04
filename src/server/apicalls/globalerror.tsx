import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Typography } from '@mui/material';
import { Popup } from '../../components/generic/popup';

interface ErrorContextType {
    error: string | null;
    setError: (error: string | null) => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const ErrorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [error, setError] = useState<string | null>(null);

    const handleClose = () => {
        setError(null);
    };

    return (
        <ErrorContext.Provider value={{ error, setError }}>
            {children}
            {error && (
                <Popup
                    title={'שגיאה!!'}
                    content={<Typography>{error}</Typography>}
                    open={!!error}
                    handleClose={handleClose} colors={{
                        color: 'white',
                        backgroundcolor: 'rgb(112, 1, 7)'
                    }}
                />
            )}
        </ErrorContext.Provider>
    );
};

export const useErrorContext = (): ErrorContextType => {
    const context = useContext(ErrorContext);
    if (context === undefined) {
        throw new Error('useErrorContext must be used within an ErrorProvider');
    }
    return context;
};

