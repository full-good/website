import { Grid, Typography } from "@mui/material"
import { useAppSelector } from "../../server/state/hooks";
import { Link } from "react-router-dom";

export const Projects = () => {

  const colors = useAppSelector((state) => state.colorsSlice.fullgood); 

  return (
    <> 
        <Grid container justifyContent="center" alignItems="center" direction={'column'} sx={{backgroundColor: colors.backgroundcolor, width: '100vw'}}>
            <Typography variant="h3" fontWeight={'bold'} color={colors.color} paddingTop={15} paddingBottom={3}>מסע לכוכבים</Typography>
            <Link to="/fullofhappiness" target="_blank">fullofhappiness</Link>
        </Grid>
    </>
  )
}