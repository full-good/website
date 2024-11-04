import { GenericPage } from '../generic/genericpage'
import { Home, TextSnippet, Web } from "@mui/icons-material"
import { HomePage } from './homepage'
import { About } from "./about"
import { Projects } from "./projects"
import { useAppSelector } from '../../server/state/hooks'
import { useEffect } from 'react'
import { OurDoing } from './ourdoing'
import logo from "../../assets/WhiteLogo.png";

export const FullGood = () => {

  useEffect(() => {
    document.title = 'full good';
  }, []);

  const colors = useAppSelector((state) => state.colorsSlice.fullgood);

  return (
    <>
        <GenericPage logo={logo} actions={[
          {name: "התחלה של רעיון", icon: <Home/>, href: "home", component: HomePage },
          {name: "החלום שלנו", icon: <TextSnippet/>, href: "about", component: About },
          {name: "מסע לכוכבים", icon: <Web/>, href: "projects", component: Projects },
          {name: "רעיונות שעפים גבוה", icon: <Web/>, href: "ideas", component: OurDoing },
        ]} colors={colors}/>    
    </>
  )
}