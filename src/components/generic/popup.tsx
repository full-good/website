import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';

export const Popup = (props: {
    title: string,
    content: string,
    color: string,
    open: boolean,
    handleClose: () => void,
  }) => {

    const { title, content, color, open, handleClose } = props

    return (
        <>
            <Dialog open={open} onClose={handleClose} dir="rtl">
                <DialogTitle sx={{color: color}}>{title}</DialogTitle>
                <DialogContent sx={{color: color}}>
                <Typography sx={{ fontSize: 17 }}>{content}</Typography>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} sx={{ fontSize: 18, color: color,
                    '&:hover': {
                    color: color,
                    }
                }}>סגור</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}