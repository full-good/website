import { Grid, Typography } from "@mui/material"

export const Projects = () => {

  return (
    <> 
        <Grid container justifyContent="center" alignItems="center" direction={'column'}>
            <Typography variant="h5" fontWeight={'bold'} color={'#000050'} paddingTop={15} paddingBottom={3}>פרויקטים:</Typography>
        </Grid>
    </>
  )
}