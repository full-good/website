import { Box, Button, Grid, IconButton, styled, Tooltip, tooltipClasses, TooltipProps, Typography } from "@mui/material"
import IGenericPage from "../../interfaces/genericpage"
import { Contact } from "./contact"
import { useState } from "react"
import { Popup } from "./popup"
import { LogIn } from "../fullgood/login"
import { useAppSelector } from "../../server/state/hooks"
import Cookies from 'js-cookie';
import { PersonOutline } from "@mui/icons-material"

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

export const GenericPage = (props: {
    logo: string,
    actions: IGenericPage[],
    colors: {
      color: string
      backgroundcolor: string
      anothercolor: string
    }
  }) => {

    const { logo, actions, colors } = props
    const [open, setOpen] = useState<boolean>(false);
    const user = useAppSelector((state) => state.userSlice); 

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Grid container justifyContent="space-between" alignItems="center"
        sx={{backgroundColor: colors.backgroundcolor, width: '100vw', height: '13vh', position: "fixed", top: 0}}>
          <Grid item marginRight={'30px'}>
            <Box>
                {actions.map((action) => (
                  <Button sx={{color: colors.color, border: '3px solid '+colors.anothercolor, borderRadius: '30px', margin: '5px'}} onClick={()=>window.location.hash = '#'+action.href}>{action.name}</Button>
                ))}
                  <Button sx={{color: colors.color, border: '3px solid '+colors.anothercolor, borderRadius: '30px', margin: '5px'}} onClick={()=>window.location.hash = '#contact'}>שתפו אותנו במחשבות שלכם</Button>
            <HtmlTooltip
              title={
                user.status==="DETACHED"?
                <Box sx={{backgroundColor: colors.color, direction: 'rtl', padding: '5px'}}>
                  <Typography sx={{color: colors.backgroundcolor, borderBottom: '1px solid '+colors.backgroundcolor}}>אורח</Typography>
                  <Button sx={{color: colors.backgroundcolor}} onClick={()=>setOpen(true)}>הרשם / התחבר</Button>
                </Box>
                :<Box sx={{backgroundColor: colors.color, direction: 'rtl', padding: '5px'}}>
                  <Typography sx={{color: colors.backgroundcolor, borderBottom: '1px solid '+colors.backgroundcolor}}>{user.user.name}</Typography>
                  <Button sx={{color: colors.backgroundcolor}} onClick={()=>{Cookies.remove('userId'); window.location.reload();}}>התנתק</Button>
                </Box>
              }
            >
              <IconButton><PersonOutline sx={{color: colors.anothercolor, border: '3px solid '+colors.anothercolor, borderRadius: '50px', fontSize: '40px'}}/></IconButton>
            </HtmlTooltip>
            </Box>
          </Grid>
          <Grid item marginLeft={'30px'}>
            <img src={logo} width={'200px'} style={{margin: '10px'}}/>
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