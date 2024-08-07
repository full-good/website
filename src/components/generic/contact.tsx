import { Grid, Typography, TextField, styled, Button } from "@mui/material"
import { Popup } from "./popup";
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

export const Contact = () => {

  const colors = useAppSelector((state) => state.colorsSlice);

  const [open, setOpen] = useState<boolean>(false);
  const [mail, setMail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [error, setError] = useState<string>('');
  const httpCall = UseApiCall()

  const handleClose = () => {
    setOpen(false);
    setMail('')
    setName('')
    setContent('')
    setSubject('')
  };

  const handleContact = async () => {
    const regexmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if(mail.length === 0 || name.length === 0 || subject.length === 0 || content.length === 0){
      setError('כל השדות הם חובה')
    } else if (!regexmail.test(mail)){
      setError('מייל לא תקין')
    } else {
      setError('')
      const http = import.meta.env.VITE_HTTPCALL;        
      const response = await httpCall(ApiCallType.POST, http + '/message', {mail, name, subject, content})
      if(response)
        setOpen(true)
    }
  }

  return (
    <> 
        <Grid container justifyContent="flex-start" alignItems="center" direction={'column'}
        sx={{backgroundColor: colors.backgroundcolor, color: colors.color, zIndex: 2, width: '100vw', height: '80vh', bottom: 0, right: 0, left: 0, margin: 0}}>
            <Typography variant="h5" fontWeight={'bold'} color={colors.color} paddingTop={10} paddingBottom={3}>צור קשר:</Typography>
            <Grid container justifyContent="space-around" alignItems="center" direction={'row'} flexWrap={"wrap"} sx={{width: '70%'}}>
              <ColorxTextField colorx={colors.color} id="mail" label="מייל" variant="standard" value={mail} sx={{ width: '45%' }} onChange={(e)=>setMail(e.target.value)}/>
              <ColorxTextField colorx={colors.color} id="name" label="שם" variant="standard" value={name} sx={{ width: '45%' }} onChange={(e)=>setName(e.target.value)}/>
              <ColorxTextField colorx={colors.color} id="subject" label="נושא" variant="standard" value={subject} sx={{ width: '95%' }} onChange={(e)=>setSubject(e.target.value)}/>
              <ColorxTextField colorx={colors.color} id="content" label="תוכן" multiline rows={3} variant="standard" value={content} sx={{ width: '95%'}} onChange={(e)=>setContent(e.target.value)}/>
              <Button sx={{ fontSize: 18, width: '95%', marginTop: 3, backgroundColor: colors.color, color: colors.backgroundcolor,
                '&:hover': {
                  color: colors.backgroundcolor,
                  backgroundColor: colors.color
                }
              }} onClick={handleContact}>שליחה</Button>
              <Typography variant="overline" color={colors.color}>{error}</Typography>
            </Grid>
            {open?<Popup title={name + ','} content={<Typography sx={{ fontSize: 17 }}>ההודעה נקלטה במערכת בהצלחה!!</Typography>} open={open} handleClose={handleClose}/>:<></>}
        </Grid>
    </>
  )
}