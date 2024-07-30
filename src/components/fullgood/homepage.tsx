import { Grid, Typography } from "@mui/material"

export const HomePage = () => {

  return (
    <> 
      <Grid container justifyContent="center" alignItems="center" direction={"column"}
      sx={{backgroundColor: '#000050', color: 'white', margin: 0,  width: '100vw', height: '100vh'}}>
        <Typography variant="h1" color={"white"} fontWeight={"bold"}>full good</Typography>
        <Typography variant="h4" color={"white"}>אתר שמכיל הכל</Typography>
      </Grid>
      {/* <About/> */}
    </>
  )
}