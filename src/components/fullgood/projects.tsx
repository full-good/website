import { Grid, Typography } from "@mui/material"
import { useAppSelector } from "../../server/state/hooks";

export const Projects = () => {

  const colors = useAppSelector((state) => state.colorsSlice); 

  return (
    <> 
        <Grid container justifyContent="center" alignItems="center" direction={'column'} sx={{backgroundColor: colors.color}}>
            <Typography variant="h5" fontWeight={'bold'} color={colors.backgroundcolor} paddingTop={15} paddingBottom={3}>פרויקטים:</Typography>
        </Grid>
    </>
  )
}