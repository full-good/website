import { useState, useEffect } from 'react';
import { Typography, Grid } from '@mui/material';
import { keyframes } from '@mui/system';
import { useAppSelector } from '../../server/state/hooks';
import { ArrowButton } from '../generic/arrowbutton';

// אנימציה למעבר של הטקסט
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// רשימת המשפטים
const quotes = [
  'ניהול עסקים מוצלח מתחיל כאן',
  'המערכת שלנו תעזור לך לייעל את התהליכים',
  'עקוב אחר ביצועי הצוות ושפר את התפוקה',
  'כל הכלים להצלחה שלך במקום אחד'
];

export const HomePage = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const colors = useAppSelector((state) => state.colorsSlice.business); 

  return (
    <Grid container justifyContent="center" alignItems="center" direction={"column"}
    sx={{backgroundColor: colors.backgroundcolor, color: colors.color, margin: 0,  width: '100vw', height: '100vh'}}>
      <Typography variant="h1" color={colors.color} fontWeight={"bold"} sx={{animation: `${fadeIn} 1s ease-in-out`, marginBottom: 5}}>{`${quotes[currentQuote]}`}</Typography>
      <ArrowButton words={'אני רוצה גם'} handle={function (): void {
        throw new Error('Function not implemented.');
      } } colors={colors}/>
    </Grid>
  );
};
