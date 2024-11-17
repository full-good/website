import { Typography } from "@mui/material"
import { Popup } from "./popup";
import { useState } from "react";
import { ArrowButton } from "./arrowbutton";
import { LogIn } from "../webmind/login";

export const NoConnectedUser = (props: {
  colors: {
    color: string
    backgroundcolor: string
    anothercolor: string
  }
}) => {

  const {colors} = props

  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
        <Typography variant="body1" fontSize={"24px"} color={colors.color}>משתמש לא מחובר למערכת</Typography>
        <ArrowButton words={"התחבר/הרשם"} handle={() => setOpen(true)} colors={colors}/>
        <Popup title={""} content={<LogIn handleCloseParent={handleClose} colors={colors}/>} open={open} handleClose={handleClose} colors={colors}/>
    </>
  )
}