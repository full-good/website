import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CircularProgress, Box } from '@mui/material';
import { useAppSelector } from '../state/hooks';

interface LoadingContextType {
    setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const colors = useAppSelector((state) => state.colorsSlice);

    return (
        <LoadingContext.Provider value={{ setLoading }}>
            {children}
            {loading && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        zIndex: 10,
                    }}
                >
                    <CircularProgress sx={{color: colors.color}}/>
                </Box>
            )}
        </LoadingContext.Provider>
    );
};

export const useLoadingContext = (): LoadingContextType => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoadingContext must be used within a LoadingProvider');
    }
    return context;
};
