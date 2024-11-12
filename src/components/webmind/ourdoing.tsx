import { Grid, Typography } from "@mui/material"
import { useAppSelector } from "../../server/state/hooks"

export const OurDoing = () => {

  const colors = useAppSelector((state) => state.colorsSlice.webmind);

  return (
    <> 
        <Grid container justifyContent="center" alignItems="center" direction={'column'} sx={{backgroundColor: colors.backgroundcolor, width: '100vw'}} padding={"20px"}>
            <Typography variant="h3" fontWeight={'bold'} color={colors.color} paddingTop={15} paddingBottom={3}>רעיונות שעפים גבוה</Typography>
            <Grid container justifyContent="space-around" alignItems="center" direction={'row'} flexWrap={"wrap"} sx={{width: '60%'}}>
              <Grid container width={'30%'} direction={'column'}>
                <Grid width={"50%"} border={'5px solid '+colors.backgroundcolor} borderRadius={'40px'} marginRight={'25%'} marginBottom={'-25px'} sx={{backgroundColor: colors.backgroundcolor}} zIndex={1}>
                  <Typography variant="body1" fontSize={'24px'} color={colors.anothercolor} border={'3px solid '+colors.anothercolor} borderRadius={'40px'}>1</Typography>
                </Grid>
                <Typography variant="body1" color={colors.color} padding={'30px'} border={'3px solid '+colors.anothercolor} borderRadius={'40px'} height={'200px'}>
                  התפתחות אישית היא מפתח להצלחה. בואו להתחיל את המסע שלכם לשמים!! אנחנו מאמינים שכל אחד יכול לממש את הפוטנציאל שלו בדרך שמתאימה לו, התחילו להיעזר בפלטפורמה שפיתחנו וגם אתם תגיעו לכוכבים!
                </Typography>
              </Grid>
              <Grid container width={'30%'}>
                <Grid width={"50%"} border={'5px solid '+colors.backgroundcolor} borderRadius={'40px'} marginRight={'25%'} marginBottom={'-25px'} sx={{backgroundColor: colors.backgroundcolor}} zIndex={1}>
                  <Typography variant="body1" fontSize={'24px'} color={colors.anothercolor} border={'3px solid '+colors.anothercolor} borderRadius={'40px'}>2</Typography>
                </Grid>
                <Typography variant="body1" color={colors.color} padding={'30px'} border={'3px solid '+colors.anothercolor} borderRadius={'40px'} height={'200px'}>
                  יש לך עסק? רוצה להעיף אותו רחוק? להתפתח? לגעת בשמיים? למשש כוכבים בדרך? <br/>
                  מחפשים בעלי מקצוע? אנשים עם מעוף? רוצים להגיע לשמיים? לעוף עם היצירתיות? לקבל השראה? <br/>
                  במיוחד בשבילכם!!
                </Typography>
              </Grid>
              <Grid container width={'30%'}>
                <Grid width={"50%"} border={'5px solid '+colors.backgroundcolor} borderRadius={'40px'} marginRight={'25%'} marginBottom={'-25px'} sx={{backgroundColor: colors.backgroundcolor}} zIndex={1}>
                  <Typography variant="body1" fontSize={'24px'} color={colors.anothercolor} border={'3px solid '+colors.anothercolor} borderRadius={'40px'}>3</Typography>
                </Grid>
                <Typography variant="body1" color={colors.color} padding={'30px'} border={'3px solid '+colors.anothercolor} borderRadius={'40px'} height={'200px'}>
                  עוד כוכבים – רעיונות חדשניים ויצירתיים בדרך לשמים, פרויקטים עם עזרה לזולת, חשיבה על השני, תעופה רחוק. מחכים לכוכבים שלכם שיעזרו לנו לעוף לשמיים, ולרעיונות שיתרמו לנו בדרך להצלחה.
                </Typography>
              </Grid>
            </Grid>
        </Grid>
    </>
  )
}