import { Grid, Typography } from "@mui/material"
import { useAppSelector } from "../../server/state/hooks"
import { fullofhappiness } from "../../assets/about.json";

export const About = () => {

  const colors = useAppSelector((state) => state.colorsSlice.fullofhappiness);

  return (
    <> 
        <Grid container justifyContent="center" alignItems="center" direction={'column'} sx={{backgroundColor: colors.color}}>
            <Typography variant="h5" fontWeight={'bold'} color={colors.backgroundcolor} paddingTop={15} paddingBottom={3}>אודות:</Typography>
            <Typography variant="body1" color={colors.backgroundcolor} textAlign={"center"} width={'45%'} paddingBottom={10}>{fullofhappiness}</Typography>
        </Grid>
    </>
  )
}