import { Button, Grid, IconButton } from "@mui/material"
import { ArrowBack } from "@mui/icons-material";

export const ArrowButton = (props: {
    words: string,
    handle: () => void,
    colors: {
        color: string
        backgroundcolor: string
        anothercolor: string
    }
}) => {

    const { words, handle, colors } = props;

    return (
        <> 
            <Grid item>
                <Button sx={{fontSize: 18, width: '120px', height: '35px', color: colors.color, border: '3px solid '+colors.anothercolor, borderRadius: '30px', marginLeft: '-10px',
                '&:hover': {
                    color: colors.backgroundcolor,
                    backgroundColor: colors.anothercolor
                }
                }} onClick={handle}>{words}</Button>
                <IconButton onClick={handle}><ArrowBack sx={{color: colors.backgroundcolor, backgroundColor: colors.anothercolor, border: '3px solid '+colors.anothercolor, borderRadius: '50px', fontSize: '30px'}}/></IconButton>
            </Grid>
        </>
    )
}