import { Box, Grid, IconButton, Typography } from "@mui/material";
import Slider from 'react-slick';
import { useAppSelector } from "../../server/state/hooks";
import { Link } from "react-router-dom";
import logo1 from "../../assets/WhiteLogo.png";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import logo2 from "../../assets/BlueLogo.png";
import '../../style/carusel.css'

export const Projects = () => {

  const colors = useAppSelector((state) => state.colorsSlice.fullgood);

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      nextArrow: (<IconButton><ArrowForwardIos sx={{color: colors.color, fontSize: '50px', position: 'absolute', top: '50%', right: '10px', zIndex: 2}}/></IconButton>),
      prevArrow: (<IconButton><ArrowBackIos sx={{color: colors.color, fontSize: '50px', opacity: 100, position: 'absolute', top: '50%', left: '10px', zIndex: 2}}/></IconButton>),
  };

  const projects = [
    {
      src: logo1,
      link: "/fullofhappiness",
    },
    {
      src: logo2,
      link: "/businessmanagement",
    }
  ];

  return (
    <> 
        <Grid container justifyContent="center" alignItems="center" direction={'column'} sx={{backgroundColor: colors.backgroundcolor, width: '100vw', padding: '20px'}}>
            <Typography variant="h3" fontWeight={'bold'} color={colors.color} paddingTop={15} paddingBottom={3} margin={'5px'}>מסע לכוכבים</Typography>
            <Box sx={{ width: '50%'}}>
              <Slider {...settings}>
                {projects.map(project => (
                  <Grid height={'320px'} border={'1px solid '+colors.anothercolor} borderRadius={'40px'}>
                    <Link to={project.link} target="_blank">
                      <img src={project.src} style={{ width: '100%', height: 'auto' }}/>
                    </Link>
                  </Grid>
                ))}
              </Slider>
            </Box>
        </Grid>
    </>
  )
}