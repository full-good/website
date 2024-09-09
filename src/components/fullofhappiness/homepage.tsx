import { Button, Grid, Typography } from "@mui/material"
import '../../style/butterflies.css'
import { useAppSelector } from "../../server/state/hooks"


export const HomePage = () => {

  const colors = useAppSelector((state) => state.colorsSlice.fullofhappiness); 

  return (
    <> 
      <Grid container justifyContent="center" alignItems="center" direction={"column"}
      sx={{backgroundColor: colors.backgroundcolor, color: colors.color, margin: 0,  width: '100vw', height: '100vh'}}>
        <Typography variant="h3" color={colors.color} fontWeight={"bold"} margin={10}>בשמחות!!</Typography>
        <Grid container justifyContent="center" alignItems="center" direction={"row"} width={'70vw'}>
          <Button sx={{ fontSize: 18, color: colors.backgroundcolor, backgroundColor: colors.color, margin: 2, width: '35%',
            '&:hover': {
              backgroundColor: colors.color,
              color: colors.backgroundcolor
            }
          }}>הוסף שמלה</Button>
          <Button sx={{ fontSize: 18, color: colors.backgroundcolor, backgroundColor: colors.color, margin: 2, width: '35%',
            '&:hover': {
              backgroundColor: colors.color,
              color: colors.backgroundcolor
            }
          }}>הורד קטלוג</Button>
          <Button sx={{ fontSize: 18, color: colors.backgroundcolor, backgroundColor: colors.color, margin: 2, width: '35%',
            '&:hover': {
              backgroundColor: colors.color,
              color: colors.backgroundcolor
            }
          }}>לשמלות שפרסמתי</Button>
        </Grid>
      </Grid>
    </>
  )
}