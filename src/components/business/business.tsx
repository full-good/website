import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { useAppSelector } from "../../server/state/hooks"

export const Business = () => {

  const colors = useAppSelector((state) => state.colorsSlice.business);
  const business = useAppSelector((state) => state.businesSlice.Business);  

  return (
    <> 
        <Grid container justifyContent="center" alignItems="center" direction={'column'} sx={{backgroundColor: colors.backgroundcolor}}>
            <Typography variant="h3" fontWeight={'bold'} color={colors.color} paddingTop={15} paddingBottom={3} margin={'5px'}>עסקים בתעופה</Typography>
            <Grid container justifyContent="space-between" alignItems="center" direction={'row'} flexWrap={"wrap"} sx={{width: '60%'}}>
              {business.map(business => (
                <Card sx={{ width: '24%', height: '300px', backgroundColor: colors.backgroundcolor, marginBottom: '10px' }}>
                  <CardMedia component="img" height="100px" image={business.logo} alt={business.nameDeal}/>
                  <CardContent>
                    <Typography variant="body1" fontSize={'24px'} color={colors.anothercolor}>{business.nameDeal}</Typography>
                    <Typography variant="body1" color={colors.color}>{business.name}</Typography>
                    <Typography variant="body1" color={colors.color}>{business.phone}</Typography>
                    <Typography variant="body1" color={colors.color}>{business.mail}</Typography>
                    <Typography variant="body1" color={colors.color}>{business.city}</Typography>
                    {business.website!==""?<a href={business.website} target="_blank" style={{color: colors.color}}>לאתר</a>:<></>}
                  </CardContent>
                </Card>
              ))}
            </Grid>
        </Grid>
    </>
  )
}