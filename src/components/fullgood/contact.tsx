import { Grid, Typography, TextField, styled, Button } from "@mui/material"
import { Popup } from "../generic/popup";
import { useState } from "react";

const WhiteTextField = styled(TextField)({
  '& .MuiInput-underline': {
    borderBottom: '2px solid white', 
  },
  '& .MuiInput-underline:after': {
    borderBottom: '2px solid white',
  },
  '& .MuiInputLabel-root': {
    right: 0,
    left: 'unset', 
    textAlign: 'right', 
    color: 'white',
  },
  '& .MuiInputLabel-shrink': {
    color: 'white  !important',
  },
  '& .MuiInputBase-input': {
    color: 'white',
  }
});

export const Contact = () => {

  const [open, setOpen] = useState<boolean>(false);
  const [mail, setMail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleClose = () => {
    setOpen(false);
    setMail('')
    setName('')
    setContent('')
    setSubject('')
  };

  const handleContact = () => {
    setOpen(true)
  }

  return (
    <> 
        <Grid container justifyContent="flex-start" alignItems="center" direction={'column'}
        sx={{backgroundColor: '#000030', color: 'white', zIndex: 2, width: '100vw', height: '80vh', bottom: 0, right: 0, left: 0, margin: 0}}>
            <Typography variant="h5" fontWeight={'bold'} color={'white'} paddingTop={10} paddingBottom={3}>צור קשר:</Typography>
            <Grid container justifyContent="space-around" alignItems="center" direction={'row'} flexWrap={"wrap"} sx={{width: '70%'}}>
              <WhiteTextField id="mail" label="מייל" variant="standard" value={mail} sx={{ width: '45%' }} onChange={(e)=>setMail(e.target.value)}/>
              <WhiteTextField id="name" label="שם" variant="standard" value={name} sx={{ width: '45%' }} onChange={(e)=>setName(e.target.value)}/>
              <WhiteTextField id="subject" label="נושא" variant="standard" value={subject} sx={{ width: '95%' }} onChange={(e)=>setSubject(e.target.value)}/>
              <WhiteTextField id="content" label="תוכן" multiline rows={3} variant="standard" value={content} sx={{ width: '95%'}} onChange={(e)=>setContent(e.target.value)}/>
              <Button sx={{ fontSize: 18, width: '95%', margin: 3, backgroundColor: 'white', color: '#000030',
                '&:hover': {
                  color: '#000030',
                  backgroundColor: 'white'
                }
              }} onClick={handleContact}>שליחה</Button>
            </Grid>
            {open?<Popup title={name + ','} color={"#000030"} content={"ההודעה נקלטה במערכת בהצלחה!!"} open={open} handleClose={handleClose}/>:<></>}
        </Grid>
    </>
  )
}