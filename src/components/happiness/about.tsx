import { Grid, Typography } from "@mui/material"
import { useAppSelector } from "../../server/state/hooks"

export const About = () => {

  const colors = useAppSelector((state) => state.colorsSlice.happiness);

  return (
    <> 
        <Grid container justifyContent="center" alignItems="center" direction={'column'} sx={{backgroundColor: colors.backgroundcolor, width: '100vw'}}>
            <Typography variant="h3" fontWeight={'bold'} color={colors.color} paddingBottom={3} paddingTop={3}>רצון טוב</Typography>
            <Typography variant="body1" color={colors.color} textAlign={"center"} width={'45%'} padding={'30px'} border={'3px solid '+colors.anothercolor} borderRadius={'40px'} marginBottom={'50px'}>
            web mind - פיתוח חדשני לרעיונות יצירתיים. אנו כאן כדי לקחת את הרעיונות צעד קדימה, להפוך אותם למציאות בעזרת פיתוח מתקדם וכלים יצירתיים, עם דמיון והרבה מעוף. המשפט שנותן לנו השראה הוא: לעוף רחוק מעבר לשמיים ובדרך לגעת בכוכבים, המטרה שלנו היא להגשים את הפוטנציאל שטמון בכל אחד מאיתנו ולתרום מהיכולות שלנו לסביבה.אם יש לכם רעיון יצירתי, המלצה שתעיף אותנו רחוק, הערה שתשדרג אותנו, או פשוט מחשבות שאתם רוצים לחלוק – שתפו אותנו! ביחד נגע בכוכבים ונעוף עם היצירתיות מעבר לשמיים, כי השמיים הם רק תחנה בדרך להצלחה!!
            </Typography>
        </Grid>
    </>
  )
}