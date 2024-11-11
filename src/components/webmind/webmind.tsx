import { GenericPage } from '../generic/genericpage'
import { HomePage } from './homepage'
import { About } from "./about"
import { Projects } from "./projects"
import { useAppSelector } from '../../server/state/hooks'
import { useEffect } from 'react'
import { OurDoing } from './ourdoing'
import logo from "../../assets/WhiteLogo.png";

export const WebMind = () => {

  useEffect(() => {
    document.title = 'WebMind';
  }, []);

  const colors = useAppSelector((state) => state.colorsSlice.webmind);

  return (
    <>
        <GenericPage logo={logo} actions={[
          {name: "התחלה של רעיון", href: "home", component: HomePage },
          {name: "החלום שלנו", href: "about", component: About },
          {name: "מסע לכוכבים", href: "projects", component: Projects },
          {name: "רעיונות שעפים גבוה", href: "ideas", component: OurDoing },
        ]} colors={colors}/>    
    </>
  )
}