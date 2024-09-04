import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

export const Popup = (props: {
    title: string,
    content: React.ReactNode,
    open: boolean,
    handleClose: () => void,
    colors: {
        color: string
        backgroundcolor: string
    }
  }) => {


    const { title, content, open, handleClose, colors } = props

    return (
        <>
            <Dialog open={open} onClose={handleClose} dir="rtl">
                <DialogTitle sx={{color: colors.backgroundcolor, backgroundColor: colors.color}}>{title}</DialogTitle>
                <DialogContent sx={{color: colors.backgroundcolor, backgroundColor: colors.color}}>
                {content}
                </DialogContent>
                <DialogActions sx={{backgroundColor: colors.color}}>
                <Button onClick={handleClose} sx={{ fontSize: 18, color: colors.backgroundcolor,
                    '&:hover': {
                    color: colors.backgroundcolor,
                    }
                }}>סגור</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}