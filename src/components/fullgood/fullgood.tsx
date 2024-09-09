import { GenericPage } from '../generic/genericpage'
import { Home, TextSnippet, Web } from "@mui/icons-material"
import { HomePage } from './homepage'
import { About } from "./about"
import { Projects } from "./projects"
import { useAppSelector } from '../../server/state/hooks'
import { useEffect } from 'react'

export const FullGood = () => {

  useEffect(() => {
    document.title = 'full good';
  }, []);

  const colors = useAppSelector((state) => state.colorsSlice.fullgood);

  return (
    <>
        <GenericPage title={"full-good"} actions={[
          {name: "עמוד ראשי", icon: <Home/>, href: "home", component: HomePage },
          {name: "אודות", icon: <TextSnippet/>, href: "about", component: About },
          {name: "פרויקטים", icon: <Web/>, href: "projects", component: Projects },
        ]} colors={colors}/>    
    </>
  )
}