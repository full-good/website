import { Grid, Typography } from "@mui/material"
import { useAppSelector } from "../../server/state/hooks"
import { ArrowButton } from "../generic/arrowbutton";
import hall from "../../assets/hall2.png";


export const HomePage = () => {

  const colors = useAppSelector((state) => state.colorsSlice.happiness); 

  return (
    <> 
      <Grid container justifyContent="center" alignItems="center" direction={"column"}
      sx={{backgroundImage: `url(${hall})`, backgroundSize: 'cover', backgroundPosition: 'center', color: colors.color, margin: 0,  width: '100vw', height: '100vh'}}>
        <Typography variant="h1" color={colors.anothercolor} fontWeight={"bold"}>בשמחות!!</Typography>
        <Grid container justifyContent="center" alignItems="center" direction={"row"} width={'70vw'}>
          <Grid margin={5}><ArrowButton words={'הוסף שמלה'} handle={function (): void {
            throw new Error('Function not implemented.');
          } } colors={colors}/></Grid>
          <Grid margin={5}><ArrowButton words={'הורד קטלוג'} handle={function (): void {
            throw new Error('Function not implemented.');
          } } colors={colors}/></Grid>
          <Grid margin={5}><ArrowButton words={'לשמלות שלי'} handle={function (): void {
            throw new Error('Function not implemented.');
          } } colors={colors}/></Grid>
        </Grid>
      </Grid>
    </>
  )
}