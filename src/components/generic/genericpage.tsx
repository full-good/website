import { Box, Button, Grid, SpeedDial, SpeedDialAction, Typography } from "@mui/material"
import {Menu} from '@mui/icons-material'
import IGenericPage from "../../interfaces/Igenericpage"

export const GenericPage = (props: {
    title: string,
    actions: IGenericPage[],
    color: string,
    backgroundcolor: string
  }) => {

    const { title, actions, color, backgroundcolor } = props

    return (
      <>
        <Grid container justifyContent="space-around" alignItems="center"
        sx={{backgroundColor: backgroundcolor, color: color, zIndex: 1, width: '100vw', height: '20vh', position: "fixed", top: 0, right: 0, left: 0, margin: 0, borderBottom: "solid 3px " + color}}>
          <Grid item>
            <Box>
              <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'fixed', right: '14%', zIndex: 2, top: '6%', 
                  '& .MuiSpeedDial-fab': {
                    backgroundColor: color
                  },
                  '&:hover': {
                    backgroundColor: color,
                  }}}
                icon={<Menu  sx={{color: backgroundcolor}} fontSize="large"/>}
                direction="down">
                {actions.map((action) => (
                    <SpeedDialAction
                    key={action.href}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={()=>window.location.hash = '#'+action.href}
                    sx={ {backgroundColor: backgroundcolor, color: color, '&:hover': {backgroundColor: backgroundcolor} }}
                  />
                ))}
              </SpeedDial>
            </Box>
              <Typography color={color} fontSize={25}>שלום אורח <Button sx={{ fontSize: 18, color: backgroundcolor, backgroundColor: color,
                '&:hover': {
                  backgroundColor: color,
                  color: backgroundcolor
                }
              }}>התחבר</Button></Typography>
          </Grid>
          <Grid item>
            <Typography color={color} fontSize={35} fontWeight={"bold"}>{title}</Typography>
          </Grid>
        </Grid>
        {actions.map((action) => (
          <div id={action.href}>{<action.component/>}</div>
        ))}
      </>
    )
  }