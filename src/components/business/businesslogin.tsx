import { Grid, Typography } from "@mui/material"
import { Popup } from "../generic/popup";
import { useState } from "react";
import UseApiCall, { ApiCallType } from "../../server/apicalls/apicall";
import { ColorxTextField } from "../../style/colortextfield";
import { ArrowButton } from "../generic/arrowbutton";
import { useAppSelector } from "../../server/state/hooks";

export const BusinessLogIn = (props: {
    handleCloseParent: () => void
}) => {

  const { handleCloseParent } = props
  const colors = useAppSelector((state) => state.colorsSlice.business);

  const [open, setOpen] = useState<boolean>(false);
  const [nameDeal, setDealName] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [website, setWebsite] = useState<string>('');
  const [logo, setLogo] = useState<string>('');
  const [error, setError] = useState<string>('');
  const httpCall = UseApiCall()

  const handleClose = () => {
    setOpen(false);
    handleCloseParent()
    window.location.reload()
  };

  const handleLogin = async () => {
    const regexmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if(nameDeal.length === 0 || name.length === 0 || mail.length === 0 || phone.length === 0 || city.length === 0 || logo.length === 0){
      setError('כל השדות הם חובה (חוץ מכתובת אתר)')
    } else if (!regexmail.test(mail)){
      setError('מייל לא תקין')
    } else {
      setError('')
      const response = await httpCall(ApiCallType.POST, '/deal', {nameDeal, name, mail, phone, city, logo, website})
      if(response){
        setOpen(true)
      }
    }
  }

  return (
    <> 
        <Grid container justifyContent="flex-start" alignItems="center" direction={'column'}
        sx={{backgroundColor: colors.backgroundcolor, color: colors.color}}>
            <Typography variant="h5" fontWeight={'bold'} color={colors.color} paddingBottom={3}>רישום עסק למערכת</Typography>
            <Grid container justifyContent="space-around" alignItems="center" direction={'row'} flexWrap={"wrap"}>
              <ColorxTextField borderColor={colors.anothercolor} textColor={colors.color} id="dealName" label="שם העסק" variant="outlined" value={nameDeal} sx={{ width: '95%', marginBottom: 2 }} onChange={(e)=>setDealName(e.target.value)}/>
              <ColorxTextField borderColor={colors.anothercolor} textColor={colors.color} id="name" label="שם בעל העסק" variant="outlined" value={name} sx={{ width: '95%', marginBottom: 2 }} onChange={(e)=>setName(e.target.value)}/>
              <ColorxTextField borderColor={colors.anothercolor} textColor={colors.color} id="phone" label="טלפון" variant="outlined" value={phone} sx={{ width: '95%', marginBottom: 2 }} onChange={(e)=>setPhone(e.target.value)}/>
              <ColorxTextField borderColor={colors.anothercolor} textColor={colors.color} id="mail" label="מייל" variant="outlined" value={mail} sx={{ width: '95%', marginBottom: 2 }} onChange={(e)=>setMail(e.target.value)}/>
              <ColorxTextField borderColor={colors.anothercolor} textColor={colors.color} id="city" label="מקום מגורים" variant="outlined" value={city} sx={{ width: '95%', marginBottom: 2 }} onChange={(e)=>setCity(e.target.value)}/>
              <ColorxTextField borderColor={colors.anothercolor} textColor={colors.color} id="website" label="כתובת אתר (אם יש)" variant="outlined" value={website} sx={{ width: '95%', marginBottom: 2 }} onChange={(e)=>setWebsite(e.target.value)}/>
              <ColorxTextField borderColor={colors.anothercolor} textColor={colors.color} id="logo" label="לוגו" variant="outlined" value={logo} sx={{ width: '95%', marginBottom: 2 }} onChange={(e)=>setLogo(e.target.value)}/>
              <Grid container justifyContent="space-between" alignItems="center" direction={'row'}  sx={{width: '100%'}}>
                <Typography variant="overline" fontSize={'18px'} color={colors.anothercolor} marginRight={'30px'}>{error}</Typography>
                <ArrowButton words={"אישור"} handle={handleLogin} colors={colors}/>
              </Grid>
            </Grid>
            {open?<Popup title={name + ','} content={<Typography sx={{ fontSize: 17 }}>העסק הוכנס בהצלחה!!</Typography>} open={open} handleClose={handleClose} colors={colors}/>:<></>}
        </Grid>
    </>
  )
}