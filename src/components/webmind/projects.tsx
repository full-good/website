import { Box, Grid, Typography } from "@mui/material";
import Slider from 'react-slick';
import { useAppSelector } from "../../server/state/hooks";
import { Link } from "react-router-dom";
import business from "../../assets/business.png";
import happiness from "../../assets/happiness.png";

export const Projects = () => {

  const colors = useAppSelector((state) => state.colorsSlice.webmind);

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      rtl: true,
      // nextArrow: (<IconButton><ArrowForwardIos sx={{color: colors.color, fontSize: '50px', position: 'absolute', top: '50%', right: '10px', zIndex: 2}}/></IconButton>),
      // prevArrow: (<IconButton><ArrowBackIos sx={{color: colors.color, fontSize: '50px', position: 'absolute', top: '50%', left: '10px', zIndex: 2}}/></IconButton>),
  };

  const projects = [
    {src: business, link: "/business"},
    {src: happiness, link: "/happiness"}
  ];

  return (
    <> 
        <Grid container justifyContent="center" alignItems="center" direction={'column'} sx={{backgroundColor: colors.backgroundcolor, width: '100vw', padding: '20px'}}>
            <Typography variant="h3" fontWeight={'bold'} color={colors.color} paddingTop={15} paddingBottom={3} margin={'5px'}>מסע לכוכבים</Typography>
            <Box sx={{ width: '55%'}}>
              <Slider {...settings}>
                {projects.map(project => (
                  <Grid>
                    <Link to={project.link} target="_blank">
                      <img src={project.src} style={{ width: '95%', height: 'auto', borderRadius: '40px', margin: 'auto'}}/>
                    </Link>
                  </Grid>
                ))}
              </Slider>
            </Box>
        </Grid>
    </>
  )
}