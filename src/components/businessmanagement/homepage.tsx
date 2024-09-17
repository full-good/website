import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { keyframes } from '@mui/system';

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
      // החלפת המשפט כל 3 שניות
      setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length);
    }, 3000);

    return () => clearInterval(intervalId); // ניקוי ה-interval כאשר הקומפוננטה מתנקה
  }, []);

  return (
    <Box 
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      {/* הכותרת עם האנימציה */}
      <Typography
        variant="h2"
        sx={{
          animation: `${fadeIn} 1s ease-in-out`,
          marginBottom: '30px',
        }}
      >
        {`"${quotes[currentQuote]}"`}
      </Typography>
    </Box>
  );
};
