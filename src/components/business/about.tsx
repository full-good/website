import { Grid, Typography } from "@mui/material"
import { useAppSelector } from "../../server/state/hooks"

export const About = () => {

  const colors = useAppSelector((state) => state.colorsSlice.business);

  return (
    <> 
        <Grid container justifyContent="center" alignItems="center" direction={'column'} sx={{backgroundColor: colors.backgroundcolor, width: '100vw'}}>
            <Typography variant="h3" fontWeight={'bold'} color={colors.color} paddingBottom={3}>שאיפה לשמיים</Typography>
            <Typography variant="body1" fontSize={'20px'} color={colors.color} textAlign={"center"} width={'45%'} padding={'30px'} border={'3px solid '+colors.anothercolor} borderRadius={'40px'}>
              יש לך עסק? רוצה להעיף אותו רחוק? להתפתח? לגעת בשמיים? למשש כוכבים בדרך? יש לך ידע בתחום מסוים? יצירתי? חדש בתחום? רוצה לשתף את הכישרונות שלך? רוצה שעוד אנשים יכירו אותך? מקום זה במיוחד בשבילך!! <br/>
              מחפשים בעלי מקצוע? אנשים עם מעוף? רוצים להגיע לשמיים? לעוף עם היצירתיות? לקבל השראה? להתחדש? רוצים להכיר כישרונות חדשים? כוכבים מנצנצים? מקום זה במיוחד בשבילכם!!
           </Typography>
        </Grid>
    </>
  )
}