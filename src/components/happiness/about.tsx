import { Grid, Typography } from "@mui/material"
import { useAppSelector } from "../../server/state/hooks"

export const About = () => {

  const colors = useAppSelector((state) => state.colorsSlice.happiness);

  return (
    <> 
        <Grid container justifyContent="center" alignItems="center" direction={'column'} sx={{backgroundColor: colors.backgroundcolor, width: '100vw'}}>
            <Typography variant="h3" fontWeight={'bold'} color={colors.color} paddingBottom={3} paddingTop={3}>רצון טוב</Typography>
            <Typography variant="body1" fontSize={'20px'} color={colors.color} textAlign={"center"} width={'45%'} padding={'30px'} border={'3px solid '+colors.anothercolor} borderRadius={'40px'} marginBottom={'50px'}>
            היה לכם אירוע וקניתם או תפרתם שמלות ואין לכם מה לעשות איתם? יש לכם אירוע ואתם מחפשים את שמלת החלומות שלכם? פלטפורמה זו נועדה לתווך בינכם - להשכיר ולשכור שמלות, תוכלו לפרסם את השמלות שלכם וכן להוריד את הקטלוג ולבחור את שמלת החלומות שלכם, שיהיו רק שמחות לכל בית ישראל. בשמחות :)
            </Typography>
        </Grid>
    </>
  )
}