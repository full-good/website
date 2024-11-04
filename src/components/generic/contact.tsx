import { Grid, Typography, Button, IconButton } from "@mui/material"
import { Popup } from "./popup";
import { useState } from "react";
import UseApiCall, { ApiCallType } from "../../server/apicalls/apicall";
import { ColorxTextField } from "../../style/colortextfield";
import { ArrowBack } from "@mui/icons-material";

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
        sx={{backgroundColor: colors.backgroundcolor, color: colors.color, width: '100vw', height: '85vh'}}>
            <Typography variant="h3" fontWeight={'bold'} color={colors.color} paddingTop={10} paddingBottom={3}>שתפו אותנו במחשבות שלכם</Typography>
            <Grid container justifyContent="space-around" alignItems="center" direction={'row'} flexWrap={"wrap"} sx={{width: '60%'}}>
              <ColorxTextField borderColor={colors.anothercolor} textColor={colors.color} id="mail" label="מייל" variant="outlined" value={mail} sx={{ width: '49%', marginBottom: 2 }} onChange={(e)=>setMail(e.target.value)}/>
              <ColorxTextField borderColor={colors.anothercolor} textColor={colors.color} id="name" label="שם" variant="outlined" value={name} sx={{ width: '49%', marginBottom: 2 }} onChange={(e)=>setName(e.target.value)}/>
              <ColorxTextField borderColor={colors.anothercolor} textColor={colors.color} id="subject" label="נושא" variant="outlined" value={subject} sx={{ width: '99%', marginBottom: 2 }} onChange={(e)=>setSubject(e.target.value)}/>
              <ColorxTextField borderColor={colors.anothercolor} textColor={colors.color} id="content" label="תוכן" multiline rows={3} variant="outlined" value={content} sx={{ width: '99%', marginBottom: 2 }} onChange={(e)=>setContent(e.target.value)}/>
            </Grid>
            <Grid container justifyContent="space-between" alignItems="center" direction={'row'}  sx={{width: '60%'}}>
              <Typography variant="overline" fontSize={'18px'} color={colors.anothercolor} marginRight={'30px'}>{error}</Typography>
              <Grid item>
                <Button sx={{fontSize: 18, width: '110px', height: '35px', color: colors.color, border: '3px solid '+colors.anothercolor, borderRadius: '30px', marginLeft: '-10px',
                '&:hover': {
                    color: colors.backgroundcolor,
                    backgroundColor: colors.anothercolor
                  }
                }} onClick={handleContact}>שליחה</Button>
                <IconButton onClick={handleContact}><ArrowBack sx={{color: colors.backgroundcolor, backgroundColor: colors.anothercolor, border: '3px solid '+colors.anothercolor, borderRadius: '50px', fontSize: '30px'}}/></IconButton>
              </Grid>
            </Grid>
            {open?<Popup title={name + ','} content={<Typography sx={{ fontSize: 17 }}>ההודעה נקלטה במערכת בהצלחה!!</Typography>} open={open} handleClose={handleClose} colors={colors}/>:<></>}
        </Grid>
    </>
  )
}