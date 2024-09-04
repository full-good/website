import { Grid, Typography } from "@mui/material"
import '../../style/butterflies.css'
import butterfly from "../../assets/Butterfly.svg"
import butterfly1 from "../../assets/Butterfly1.svg"
import butterfly2 from "../../assets/Butterfly2.svg"
import butterfly3 from "../../assets/Butterfly3.svg"
import butterfly5 from "../../assets/Butterfly5.svg"
import butterfly6 from "../../assets/Butterfly6.svg"
import butterfly7 from "../../assets/Butterfly7.svg"
import butterfly8 from "../../assets/Butterfly8.svg"
import butterfly9 from "../../assets/Butterfly9.svg"
import butterfly10 from "../../assets/Butterfly10.svg"
import butterfly11 from "../../assets/Butterfly11.svg"
import butterfly12 from "../../assets/Butterfly12.svg"
import butterfly13 from "../../assets/Butterfly13.svg"
import butterfly14 from "../../assets/Butterfly14.svg"
import { useAppSelector } from "../../server/state/hooks"


export const HomePage = () => {

  const colors = useAppSelector((state) => state.colorsSlice.fullgood); 

  return (
    <> 
      <Grid container justifyContent="center" alignItems="center" direction={"column"}
      sx={{backgroundColor: colors.backgroundcolor, color: colors.color, margin: 0,  width: '100vw', height: '100vh'}}>
        <Typography variant="h1" color={colors.color} fontWeight={"bold"}>full good</Typography>
        <Typography variant="h4" color={colors.color}>אתר שמכיל הכל</Typography>
      </Grid>
      <img src={butterfly} id="butterfly"/>
      <img src={butterfly1} id="butterfly1"/>
      <img src={butterfly2} id="butterfly2"/>
      <img src={butterfly3} id="butterfly3"/>
      <img src={butterfly5} id="butterfly5"/>
      <img src={butterfly6} id="butterfly6"/>
      <img src={butterfly7} id="butterfly7"/>
      <img src={butterfly8} id="butterfly8"/>
      <img src={butterfly9} id="butterfly9"/>
      <img src={butterfly10} id="butterfly10"/>
      <img src={butterfly11} id="butterfly11"/>
      <img src={butterfly12} id="butterfly12"/>
      <img src={butterfly13} id="butterfly13"/>
      <img src={butterfly14} id="butterfly14"/>
      <img src={butterfly11} id="butterfly15"/>
      <img src={butterfly11} id="butterfly16"/>
      <img src={butterfly9} id="butterfly17"/>
      <img src={butterfly9} id="butterfly18"/>
      <img src={butterfly8} id="butterfly19"/>
      <img src={butterfly8} id="butterfly20"/>
      <img src={butterfly7} id="butterfly21"/>
      <img src={butterfly7} id="butterfly22"/>
      <img src={butterfly6} id="butterfly23"/>
      <img src={butterfly5} id="butterfly24"/>
      <img src={butterfly3} id="butterfly25"/>
      <img src={butterfly2} id="butterfly26"/>
      <img src={butterfly1} id="butterfly27"/>
      <img src={butterfly7} id="butterfly28"/>
      <img src={butterfly12} id="butterfly29"/>
      <img src={butterfly9} id="butterfly30"/>
      <img src={butterfly10} id="butterfly31"/>
      <img src={butterfly6} id="butterfly32"/>
      <img src={butterfly10} id="butterfly33"/>
    </>
  )
}