import { Grid, Typography } from "@mui/material"
import { useAppSelector } from "../../server/state/hooks"

export const OurDoing = () => {

  const colors = useAppSelector((state) => state.colorsSlice.fullgood);

  return (
    <> 
        <Grid container justifyContent="center" alignItems="center" direction={'column'} sx={{backgroundColor: colors.backgroundcolor, width: '100vw'}} padding={"20px"}>
            <Typography variant="h3" fontWeight={'bold'} color={colors.color} paddingTop={15} paddingBottom={3}>רעיונות שעפים גבוה</Typography>
            <Grid container justifyContent="space-around" alignItems="center" direction={'row'} flexWrap={"wrap"} sx={{width: '60%'}}>
              <Grid container width={'30%'} direction={'column'}>
                <Grid width={"50%"} border={'5px solid '+colors.backgroundcolor} borderRadius={'40px'} marginRight={'25%'} marginBottom={'-25px'} sx={{backgroundColor: colors.backgroundcolor}} zIndex={1}>
                  <Typography variant="body1" fontSize={'24px'} color={colors.anothercolor} border={'3px solid '+colors.anothercolor} borderRadius={'40px'}>1</Typography>
                </Grid>
                <Typography variant="body1" color={colors.color} padding={'30px'} border={'3px solid '+colors.anothercolor} borderRadius={'40px'}>
                  התפתחות אישית היא מפתח להצלחה. לכן פיתחנו פלטפורמה ייחודית שבה תוכלו לתכנן סדר יום, ליצור לוח עם מטרות ותזכורות, ולנהל את הזמן שלכם בצורה חכמה. בואו להתחיל את המסע שלכם להצלחה!! אנחנו מאמינים שכל אחד יכול לממש את הפוטנציאל שלו בדרך שמתאימה לו, התחילו להיעזר בפלטפורמה שפיתחנו וגם אתם תגיעו לכוכבים!
                </Typography>
              </Grid>
              <Grid container width={'30%'}>
                <Grid width={"50%"} border={'5px solid '+colors.backgroundcolor} borderRadius={'40px'} marginRight={'25%'} marginBottom={'-25px'} sx={{backgroundColor: colors.backgroundcolor}} zIndex={1}>
                  <Typography variant="body1" fontSize={'24px'} color={colors.anothercolor} border={'3px solid '+colors.anothercolor} borderRadius={'40px'}>2</Typography>
                </Grid>
                <Typography variant="body1" color={colors.color} padding={'30px'} border={'3px solid '+colors.anothercolor} borderRadius={'40px'}>
                  התפתחות אישית היא מפתח להצלחה. לכן פיתחנו פלטפורמה ייחודית שבה תוכלו לתכנן סדר יום, ליצור לוח עם מטרות ותזכורות, ולנהל את הזמן שלכם בצורה חכמה. בואו להתחיל את המסע שלכם להצלחה!! אנחנו מאמינים שכל אחד יכול לממש את הפוטנציאל שלו בדרך שמתאימה לו, התחילו להיעזר בפלטפורמה שפיתחנו וגם אתם תגיעו לכוכבים!
                </Typography>
              </Grid>
              <Grid container width={'30%'}>
                <Grid width={"50%"} border={'5px solid '+colors.backgroundcolor} borderRadius={'40px'} marginRight={'25%'} marginBottom={'-25px'} sx={{backgroundColor: colors.backgroundcolor}} zIndex={1}>
                  <Typography variant="body1" fontSize={'24px'} color={colors.anothercolor} border={'3px solid '+colors.anothercolor} borderRadius={'40px'}>3</Typography>
                </Grid>
                <Typography variant="body1" color={colors.color} padding={'30px'} border={'3px solid '+colors.anothercolor} borderRadius={'40px'}>
                  התפתחות אישית היא מפתח להצלחה. לכן פיתחנו פלטפורמה ייחודית שבה תוכלו לתכנן סדר יום, ליצור לוח עם מטרות ותזכורות, ולנהל את הזמן שלכם בצורה חכמה. בואו להתחיל את המסע שלכם להצלחה!! אנחנו מאמינים שכל אחד יכול לממש את הפוטנציאל שלו בדרך שמתאימה לו, התחילו להיעזר בפלטפורמה שפיתחנו וגם אתם תגיעו לכוכבים!
                </Typography>
              </Grid>
            </Grid>
        </Grid>
    </>
  )
}