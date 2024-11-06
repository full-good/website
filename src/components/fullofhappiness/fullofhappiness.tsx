import { GenericPage } from '../generic/genericpage'
import { Home, TextSnippet } from "@mui/icons-material"
import { HomePage } from './homepage'
import { About } from "./about"
import { useAppSelector } from '../../server/state/hooks'
import { useEffect } from 'react'

export const FullOfHappiness = () => {

  useEffect(() => {
    document.title = 'full of happiness';
  }, []);

  const colors = useAppSelector((state) => state.colorsSlice.fullofhappiness);

  return (
    <>
        <GenericPage logo={"full-of-happiness"} actions={[
          {name: "עמוד ראשי", icon: <Home/>, href: "home", component: HomePage },
          {name: "אודות", icon: <TextSnippet/>, href: "about", component: About },
        ]} colors={colors}/>
    </>
  )
}