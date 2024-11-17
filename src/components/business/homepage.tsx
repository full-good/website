import { useState, useEffect } from 'react';
import { Typography, Grid } from '@mui/material';
import { keyframes } from '@mui/system';
import { useAppSelector } from '../../server/state/hooks';
import { ArrowButton } from '../generic/arrowbutton';
import { Popup } from '../generic/popup';
import { BusinessLogIn } from './businesslogin';
import { NoConnectedUser } from '../generic/noconnecteduser';

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

const quotes = [
  'לעוף עם העסק לשמיים',
  'להגשים את החלום שלך',
  'לגעת בכוכבים בדרך להצלחה',
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
  const userStatus = useAppSelector((state) => state.userSlice.status); 
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" direction={"column"}
    sx={{backgroundColor: colors.backgroundcolor, color: colors.color, margin: 0,  width: '100vw', height: '100vh'}}>
      <Typography variant="h1" color={colors.color} fontWeight={"bold"} sx={{animation: `${fadeIn} 1s ease-in-out`, marginBottom: 5}}>{`${quotes[currentQuote]}`}</Typography>
      <ArrowButton words={'אני רוצה גם'} handle={() => setOpen(true)} colors={colors}/>
        {userStatus==="CONNECTED"?<Popup title={""} content={<BusinessLogIn handleCloseParent={handleClose}/>} open={open} handleClose={handleClose} colors={colors}/>:
        <Popup title={""} content={<NoConnectedUser colors={colors}/>} open={open} handleClose={handleClose} colors={colors}/>}
      </Grid>
  );
};
