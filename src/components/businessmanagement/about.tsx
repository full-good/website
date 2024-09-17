import { Grid, Typography } from "@mui/material"
import { useAppSelector } from "../../server/state/hooks"

export const About = () => {

  const colors = useAppSelector((state) => state.colorsSlice.businessmanagement);

  return (
    <> 
        <Grid container justifyContent="center" alignItems="center" direction={'column'} sx={{backgroundColor: colors.color}}>
            <Typography variant="h5" fontWeight={'bold'} color={colors.backgroundcolor} paddingTop={15} paddingBottom={3}>אודות:
                <br></br>
            באתר זה תוכלו לנהל את העסק שלכם בצורה יעילה ואפקטיבית. מערכת הניהול שלנו עוזרת לכם
            לייעל את תהליכי העבודה, לעקוב אחר ביצועי הצוות, ולשפר את הפרודוקטיביות. כאן תקבלו את כל הכלים הנדרשים להצלחה!
            </Typography>
        </Grid>
    </>
  )
}