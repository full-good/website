import { Grid, Typography } from "@mui/material"
import { useAppSelector } from "../../server/state/hooks"
import { ArrowOutward, Computer, TaskAlt } from "@mui/icons-material";

export const Numbers = () => {

  const colors = useAppSelector((state) => state.colorsSlice.business);

  return (
    <> 
        <Grid container justifyContent="center" alignItems="center" direction={'column'} sx={{backgroundColor: colors.backgroundcolor, width: '100vw'}} padding={"20px"}>
            <Typography variant="h3" fontWeight={'bold'} color={colors.color} paddingTop={15} paddingBottom={3}>בדרך להצלחה</Typography>
            <Grid container justifyContent="space-around" alignItems="center" direction={'row'} flexWrap={"wrap"} sx={{width: '60%'}}>
              <Grid container width={'30%'} direction={'column'}>
                <Grid width={"50%"} border={'5px solid '+colors.backgroundcolor} borderRadius={'40px'} marginRight={'25%'} marginBottom={'-25px'} sx={{backgroundColor: colors.backgroundcolor}} zIndex={1}>
                  <Typography variant="body1" fontSize={'24px'} color={colors.anothercolor} border={'3px solid '+colors.anothercolor} borderRadius={'40px'}><Computer/></Typography>
                </Grid>
                <Typography variant="body1" color={colors.color} fontSize={'18px'} paddingTop={'50px'} paddingRight={'10px'} paddingLeft={'10px'} border={'3px solid '+colors.anothercolor} borderRadius={'40px'} height={'100px'}>
                    יותר מ-<span style={{fontSize: '20px'}}><b>10,000</b></span> משתמשים נכנסים למערכת ביום
                </Typography>
              </Grid>
              <Grid container width={'30%'}>
                <Grid width={"50%"} border={'5px solid '+colors.backgroundcolor} borderRadius={'40px'} marginRight={'25%'} marginBottom={'-25px'} sx={{backgroundColor: colors.backgroundcolor}} zIndex={1}>
                  <Typography variant="body1" fontSize={'24px'} color={colors.anothercolor} border={'3px solid '+colors.anothercolor} borderRadius={'40px'}><ArrowOutward/></Typography>
                </Grid>
                <Typography variant="body1" color={colors.color} fontSize={'18px'} paddingTop={'50px'} paddingRight={'10px'} paddingLeft={'10px'} border={'3px solid '+colors.anothercolor} borderRadius={'40px'} height={'100px'}>
                    <span style={{fontSize: '20px'}}><b>78%</b></span> מהעסקים הגדילו את ההכנסות שלהם ב-<span style={{fontSize: '20px'}}><b>36%</b></span>
                </Typography>
              </Grid>
              <Grid container width={'30%'}>
                <Grid width={"50%"} border={'5px solid '+colors.backgroundcolor} borderRadius={'40px'} marginRight={'25%'} marginBottom={'-25px'} sx={{backgroundColor: colors.backgroundcolor}} zIndex={1}>
                  <Typography variant="body1" fontSize={'24px'} color={colors.anothercolor} border={'3px solid '+colors.anothercolor} borderRadius={'40px'}><TaskAlt/></Typography>
                </Grid>
                <Typography variant="body1" color={colors.color} fontSize={'18px'} paddingTop={'50px'} paddingRight={'20px'} paddingLeft={'20px'} border={'3px solid '+colors.anothercolor} borderRadius={'40px'} height={'100px'}>
                    <span style={{fontSize: '20px'}}><b>92%</b></span> מהלקוחות מוצאים את מה שהם צריכים באתר
                </Typography>
              </Grid>
            </Grid>
        </Grid>
    </>
  )
}