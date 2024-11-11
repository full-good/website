import { Grid, Typography } from "@mui/material"
import { useAppSelector } from "../../server/state/hooks"

export const Business = () => {

  const colors = useAppSelector((state) => state.colorsSlice.business);

  return (
    <> 
        <Grid container justifyContent="center" alignItems="center" direction={'column'} sx={{backgroundColor: colors.backgroundcolor}}>
            <Typography variant="h3" fontWeight={'bold'} color={colors.color} paddingTop={15} paddingBottom={3} margin={'5px'}>עסקים בתעופה</Typography>
        </Grid>
    </>
  )
}