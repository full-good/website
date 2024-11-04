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
                <DialogTitle sx={{color: colors.color, backgroundColor: colors.backgroundcolor}}>{title}</DialogTitle>
                <DialogContent sx={{color: colors.color, backgroundColor: colors.backgroundcolor}}>
                {content}
                </DialogContent>
                <DialogActions sx={{backgroundColor: colors.backgroundcolor}}>
                <Button onClick={handleClose} sx={{ fontSize: 18, color: colors.color,
                    '&:hover': {
                    color: colors.color,
                    }
                }}>סגור</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}