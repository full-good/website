import { Carousel } from 'react-responsive-carousel';
import business from "../../assets/business.png";
import happiness from "../../assets/happiness.png";
import { Link } from 'react-router-dom';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { useAppSelector } from '../../server/state/hooks';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import '../../style/carusel.css'

export const Projects = () => {

  const colors = useAppSelector((state) => state.colorsSlice.webmind);

  return (
    <Grid container justifyContent="center" alignItems="center" direction={'column'} sx={{backgroundColor: colors.backgroundcolor, width: '100vw', padding: '20px'}}>
      <Typography variant="h3" fontWeight={'bold'} color={colors.color} paddingTop={15} paddingBottom={3} margin={'5px'}>מסע לכוכבים</Typography>
      <Box sx={{ width: '70%'}}>
      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000} useKeyboardArrows={true} dynamicHeight={false} showArrows={true}
      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <IconButton onClick={clickHandler} disabled={!hasPrev}
            sx={{position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', cursor: 'pointer', zIndex: 3}}>
            <ArrowBackIos sx={{fontSize: '50px', color: colors.color}}/>
          </IconButton>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <IconButton onClick={clickHandler} disabled={!hasNext}
            sx={{position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', cursor: 'pointer', zIndex: 3}}>
            <ArrowForwardIos sx={{fontSize: '50px', color: colors.color}}/>
          </IconButton>
        );}}
      >
        <Grid>
            <Link to={'/business'} target="_blank">
              <img src={business} alt='business' style={{ width: '80%', height: 'auto', borderRadius: '40px'}}/>
            </Link>
        </Grid>
        <Grid>
            <Link to={'/happiness'} target="_blank">
              <img src={happiness} alt='happiness' style={{ width: '80%', height: 'auto', borderRadius: '40px'}}/>
            </Link>
        </Grid>
        </Carousel>
      </Box>
    </Grid>
  );
}