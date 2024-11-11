import { Grid, Typography, Button } from "@mui/material"
import { Popup } from "../generic/popup";
import { useState } from "react";
import UseApiCall, { ApiCallType } from "../../server/apicalls/apicall";
import Cookies from 'js-cookie';
import { ColorxTextField } from "../../style/colortextfield";
import { ArrowButton } from "../generic/arrowbutton";

export const LogIn = (props: {
    handleCloseParent: () => void,
    colors: {
      color: string
      backgroundcolor: string
      anothercolor: string
    }
}) => {

  const { handleCloseParent, colors } = props

  const [open, setOpen] = useState<boolean>(false);
  const [signUp, setSignUp] = useState<boolean>(false);
  const [mail, setMail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const httpCall = UseApiCall()

  const handleClose = () => {
    setOpen(false);
    handleCloseParent()
    window.location.reload()
  };

  const handleLogin = async () => {
    const regexmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if(mail.length === 0 || (name.length === 0 && signUp === true) || password.length === 0){
      setError('כל השדות הם חובה')
    } else if (!regexmail.test(mail)){
      setError('מייל לא תקין')
    } else if (password.length < 4){
        setError('סיסמא חייבת להכיל לפחות 4 תווים')
    } else {
      setError('')
      if(signUp){
        const response = await httpCall(ApiCallType.POST, '/user', {name, mail, password})
        if(response){
          setOpen(true)
          Cookies.set('userId', response._id, { expires: 30 })
        }
      } else {
        const response = await httpCall(ApiCallType.GET, `/user/login?mail=${mail}&password=${password}`)
        if(response){        
          setName(response.name)
          setOpen(true)       
          Cookies.set('userId', response._id, { expires: 30 })
        }
        else{
          setError('מייל או סיסמא שגויים')
        }
      }
    }
  }

  return (
    <> 
        <Grid container justifyContent="flex-start" alignItems="center" direction={'column'}
        sx={{backgroundColor: colors.backgroundcolor, color: colors.color}}>
            {signUp?
                <Typography variant="h5" fontWeight={'bold'} color={colors.color} paddingBottom={3}>הרשם <Button sx={{ fontSize: 14, color: colors.anothercolor}} onClick={()=>setSignUp(false)}>נרשמתי כבר</Button></Typography>:
                <Typography variant="h5" fontWeight={'bold'} color={colors.color} paddingBottom={3}>התחבר <Button sx={{ fontSize: 14, color: colors.anothercolor}} onClick={()=>setSignUp(true)}>פעם ראשונה באתר</Button></Typography>
            }
            <Grid container justifyContent="space-around" alignItems="center" direction={'row'} flexWrap={"wrap"}>
              {signUp?<ColorxTextField borderColor={colors.anothercolor} textColor={colors.color} id="name" label="שם" variant="outlined" value={name} sx={{ width: '95%', marginBottom: 2 }} onChange={(e)=>setName(e.target.value)}/>:<></>}
              <ColorxTextField borderColor={colors.anothercolor} textColor={colors.color} id="mail" label="מייל" variant="outlined" value={mail} sx={{ width: '95%', marginBottom: 2 }} onChange={(e)=>setMail(e.target.value)}/>
              <ColorxTextField borderColor={colors.anothercolor} type="password" textColor={colors.color} id="password" label="סיסמא" variant="outlined" value={password} sx={{ width: '95%', marginBottom: 2 }} onChange={(e)=>setPassword(e.target.value)}/>
              <Grid container justifyContent="space-between" alignItems="center" direction={'row'}  sx={{width: '100%'}}>
                <Typography variant="overline" fontSize={'18px'} color={colors.anothercolor} marginRight={'30px'}>{error}</Typography>
                <ArrowButton words={"אישור"} handle={handleLogin}  colors={colors}/>
              </Grid>
            </Grid>
            {open?<Popup title={name + ','} content={<Typography sx={{ fontSize: 17 }}> נרשמת למערכת בהצלחה!!</Typography>} open={open} handleClose={handleClose} colors={colors}/>:<></>}
        </Grid>
    </>
  )
}