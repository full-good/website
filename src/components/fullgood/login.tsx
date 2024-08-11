import { Grid, Typography, TextField, styled, Button } from "@mui/material"
import { Popup } from "../generic/popup";
import { useState } from "react";
import { useAppSelector } from "../../server/state/hooks";
import UseApiCall, { ApiCallType } from "../../server/apicalls/apicall";

type ColorxTextFieldProps = {
  colorx?: string;
};

const ColorxTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== 'colorx',
})<ColorxTextFieldProps>(({ colorx = 'black' }) => ({
  '& .MuiInput-underline': {
    borderBottom: `2px solid ${colorx}`, 
  },
  '& .MuiInput-underline:after': {
    borderBottom: `2px solid ${colorx}`,
  },
  '& .MuiInputLabel-root': {
    right: 0,
    left: 'unset', 
    textAlign: 'right', 
    color: colorx,
  },
  '& .MuiInputLabel-shrink': {
    color: `${colorx} !important`,
  },
  '& .MuiInputBase-input': {
    color: colorx,
  }
}));

export const LogIn = (props: {
    handleCloseParent: () => void,
}) => {

  const { handleCloseParent } = props

  const colors = useAppSelector((state) => state.colorsSlice);

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
        if(response)
          setOpen(true)
      } else {
        const response = await httpCall(ApiCallType.GET, `/user/login?mail=${mail}&password=${password}`)
        if(response){        
          setName(response.name)
          setOpen(true)
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
        sx={{backgroundColor: colors.color, color: colors.backgroundcolor}}>
            {signUp?
                <Typography variant="h5" fontWeight={'bold'} color={colors.backgroundcolor} paddingBottom={3}>הרשם <Button sx={{ fontSize: 14, color: colors.backgroundcolor}} onClick={()=>setSignUp(false)}>נרשמתי כבר</Button></Typography>:
                <Typography variant="h5" fontWeight={'bold'} color={colors.backgroundcolor} paddingBottom={3}>התחבר <Button sx={{ fontSize: 14, color: colors.backgroundcolor}} onClick={()=>setSignUp(true)}>פעם ראשונה באתר</Button></Typography>
            }
            <Grid container justifyContent="space-around" alignItems="center" direction={'row'} flexWrap={"wrap"}>
              {signUp?<ColorxTextField colorx={colors.backgroundcolor} id="name" label="שם" variant="standard" value={name} sx={{ width: '95%' }} onChange={(e)=>setName(e.target.value)}/>:<></>}
              <ColorxTextField colorx={colors.backgroundcolor} id="mail" label="מייל" variant="standard" value={mail} sx={{ width: '95%' }} onChange={(e)=>setMail(e.target.value)}/>
              <ColorxTextField type="password" colorx={colors.backgroundcolor} id="password" label="סיסמא" variant="standard" value={password} sx={{ width: '95%' }} onChange={(e)=>setPassword(e.target.value)}/>
              <Button sx={{ fontSize: 18, width: '95%', marginTop: 3, backgroundColor: colors.backgroundcolor, color: colors.color,
                '&:hover': {
                  color: colors.color,
                  backgroundColor: colors.backgroundcolor
                }
              }} onClick={handleLogin}>אישור</Button>
              <Typography variant="overline" color={colors.backgroundcolor}>{error}</Typography>
            </Grid>
            {open?<Popup title={name + ','} content={<Typography sx={{ fontSize: 17 }}> נרשמת למערכת בהצלחה!!</Typography>} open={open} handleClose={handleClose}/>:<></>}
        </Grid>
    </>
  )
}