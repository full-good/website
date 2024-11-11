import { Grid, Typography } from "@mui/material"
import { useAppSelector } from "../../server/state/hooks"

export const About = () => {

  const colors = useAppSelector((state) => state.colorsSlice.business);

  return (
    <> 
        <Grid container justifyContent="center" alignItems="center" direction={'column'} sx={{backgroundColor: colors.backgroundcolor, width: '100vw'}}>
            <Typography variant="h3" fontWeight={'bold'} color={colors.color} paddingTop={15} paddingBottom={3}>השאיפה שלנו</Typography>
            <Typography variant="body1" color={colors.color} textAlign={"center"} width={'45%'} padding={'30px'} border={'3px solid '+colors.anothercolor} borderRadius={'40px'}>
            באתר זה תוכלו לנהל את העסק שלכם בצורה יעילה ואפקטיבית. מערכת הניהול שלנו עוזרת לכם לייעל את תהליכי העבודה, לעקוב אחר ביצועי הצוות, ולשפר את הפרודוקטיביות. כאן תקבלו את כל הכלים הנדרשים להצלחה!            </Typography>
        </Grid>
    </>
  )
}