import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon, Typography } from "@mui/material"

export const TopNav = (props: {
    title: string,
    actions: string[],
    color: string,
    backgroundcolor: string
  }) => {

    const { title, actions, color, backgroundcolor } = props

    return (
      <>
          <Box sx={{ height: 150, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              sx={{ position: 'absolute', bottom: 20, right: 20,
                '& .MuiSpeedDial-fab': {
                  backgroundColor: color
                },
                '& .MuiSpeedDialIcon-root': {
                  color: backgroundcolor,
                }}}
              icon={<SpeedDialIcon />}
              direction="down"
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action}
                  icon={action}
                  tooltipTitle={action}
                  sx={ {backgroundColor: backgroundcolor, color: color }}
                />
              ))}
            </SpeedDial>
            <Typography>{title}</Typography>
          </Box>
      </>
    )
  }