import { Grid, Typography } from "@mui/material"
import '../../style/butterflies.css'
import { useAppSelector } from "../../server/state/hooks"


export const HomePage = () => {

  const colors = useAppSelector((state) => state.colorsSlice.fullgood); 

  return (
    <> 
      <Grid container justifyContent="center" alignItems="center" direction={"column"}
      sx={{backgroundColor: colors.backgroundcolor, color: colors.color, margin: 0,  width: '100vw', height: '100vh'}}>
        <Typography variant="h1" color={colors.anothercolor} fontWeight={"bold"}>WEBMIND</Typography>
        <Typography variant="h4" color={colors.color}>fly to the sky</Typography>
      </Grid>
    </>
  )
}