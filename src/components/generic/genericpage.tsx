import { Box, Button, Grid, SpeedDial, SpeedDialAction, Typography } from "@mui/material"
import {Contacts, Menu} from '@mui/icons-material'
import IGenericPage from "../../interfaces/genericpage"
import { Contact } from "./contact"
import { useState } from "react"
import { Popup } from "./popup"
import { LogIn } from "../fullgood/login"
import { useAppSelector } from "../../server/state/hooks"
import Cookies from 'js-cookie';

export const GenericPage = (props: {
    title: string,
    actions: IGenericPage[],
    colors: {
      color: string
      backgroundcolor: string
      anothercolor: string
    }
  }) => {

    const { title, actions, colors } = props
    const [open, setOpen] = useState<boolean>(false);
    const user = useAppSelector((state) => state.userSlice); 

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Grid container justifyContent="space-around" alignItems="center"
        sx={{backgroundColor: colors.backgroundcolor, color: colors.color, zIndex: 2, width: '100vw', height: '20vh', position: "fixed", top: 0, right: 0, left: 0, margin: 0, borderBottom: "solid 3px " + colors.color}}>
          <Grid item>
            <Box>
              <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'fixed', right: '10%', zIndex: 2, top: '6%', 
                  '& .MuiSpeedDial-fab': {
                    backgroundColor: colors.color
                  },
                  '&:hover': {
                    backgroundColor: colors.color,
                  }}}
                icon={<Menu  sx={{color: colors.backgroundcolor}} fontSize="large"/>}
                direction="down">
                {actions.map((action) => (
                    <SpeedDialAction
                    key={action.href}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={()=>window.location.hash = '#'+action.href}
                    sx={ {backgroundColor: colors.backgroundcolor, color: colors.color, '&:hover': {backgroundColor: colors.backgroundcolor} }}
                  />
                ))}
                  <SpeedDialAction
                  key="contact"
                  icon={<Contacts/>}
                  tooltipTitle="צור קשר"
                  onClick={()=>window.location.hash = '#contact'}
                  sx={ {backgroundColor: colors.backgroundcolor, color: colors.color, '&:hover': {backgroundColor: colors.backgroundcolor} }}
                  />
              </SpeedDial>
            </Box>
              {user.status==="DETACHED"?<Typography color={colors.color} fontSize={25}>שלום אורח <Button sx={{ fontSize: 18, color: colors.backgroundcolor, backgroundColor: colors.color,
                '&:hover': {
                  backgroundColor: colors.color,
                  color: colors.backgroundcolor
                }
              }} onClick={()=>setOpen(true)}>התחבר</Button></Typography>:
              <Typography color={colors.color} fontSize={25}> שלום {user.user.name} <Button sx={{ fontSize: 18, color: colors.backgroundcolor, backgroundColor: colors.color,
                '&:hover': {
                  backgroundColor: colors.color,
                  color: colors.backgroundcolor
                }
              }} onClick={()=>{Cookies.remove('userId'); window.location.reload();}}>התנתק</Button></Typography>
              }
          </Grid>
          <Grid item>
            <Typography color={colors.color} fontSize={35} fontWeight={"bold"}>{title}</Typography>
          </Grid>
        </Grid>
        {actions.map((action) => (
          <div id={action.href}>{<action.component/>}</div>
        ))}
        <div id="contact">{<Contact colors={colors}/>}</div>
        <Popup title={""} content={<LogIn handleCloseParent={handleClose}/>} open={open} handleClose={handleClose} colors={colors}/>
      </>
    )
  }