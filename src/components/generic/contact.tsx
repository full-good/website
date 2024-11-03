import { Grid, Typography, Button } from "@mui/material"
import { Popup } from "./popup";
import { useState } from "react";
import UseApiCall, { ApiCallType } from "../../server/apicalls/apicall";
import { ColorxTextField } from "../../style/colortextfield";

export const Contact = (props: {
  colors: {
    color: string
    backgroundcolor: string
    anothercolor: string
  }
}) => {

  const {colors} = props

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
      const response = await httpCall(ApiCallType.POST, '/message', {mail, name, subject, content})
      if(response)
        setOpen(true)
    }
  }

  return (
    <> 
        <Grid container justifyContent="flex-start" alignItems="center" direction={'column'}
        sx={{backgroundColor: colors.backgroundcolor, color: colors.color, zIndex: 2, width: '100vw', height: '80vh', bottom: 0, right: 0, left: 0, margin: 0}}>
            <Typography variant="h5" fontWeight={'bold'} color={colors.color} paddingTop={10} paddingBottom={3}>צור קשר:</Typography>
            <Grid container justifyContent="space-around" alignItems="center" direction={'row'} flexWrap={"wrap"} sx={{width: '60%'}}>
              <ColorxTextField borderColor={colors.anothercolor} textColor={colors.color} id="mail" label="מייל" variant="outlined" value={mail} sx={{ width: '49%', marginBottom: 2 }} onChange={(e)=>setMail(e.target.value)}/>
              <ColorxTextField borderColor={colors.anothercolor} textColor={colors.color} id="name" label="שם" variant="outlined" value={name} sx={{ width: '49%', marginBottom: 2 }} onChange={(e)=>setName(e.target.value)}/>
              <ColorxTextField borderColor={colors.anothercolor} textColor={colors.color} id="subject" label="נושא" variant="outlined" value={subject} sx={{ width: '99%', marginBottom: 2 }} onChange={(e)=>setSubject(e.target.value)}/>
              <ColorxTextField borderColor={colors.anothercolor} textColor={colors.color} id="content" label="תוכן" multiline rows={3} variant="outlined" value={content} sx={{ width: '99%', marginBottom: 2 }} onChange={(e)=>setContent(e.target.value)}/>
              <Button sx={{ fontSize: 18, width: '95%', backgroundColor: colors.color, color: colors.backgroundcolor,
                '&:hover': {
                  color: colors.backgroundcolor,
                  backgroundColor: colors.color
                }
              }} onClick={handleContact}>שליחה</Button>
              <Typography variant="overline" color={colors.color}>{error}</Typography>
            </Grid>
            {open?<Popup title={name + ','} content={<Typography sx={{ fontSize: 17 }}>ההודעה נקלטה במערכת בהצלחה!!</Typography>} open={open} handleClose={handleClose} colors={colors}/>:<></>}
        </Grid>
    </>
  )
}