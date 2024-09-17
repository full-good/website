import { GenericPage } from '../generic/genericpage'
import { Home, TextSnippet } from "@mui/icons-material"
import { HomePage } from './homepage'
// import { About } from "./about"
import { useAppSelector } from '../../server/state/hooks'
import { useEffect } from 'react'
import { About } from './about'

export const BusinessManagement = () => {

  useEffect(() => {
    document.title = 'business management';
  }, []);

  const colors = useAppSelector((state) => state.colorsSlice.businessmanagement);

  return (
    <>
        <GenericPage title={"business management"} actions={[
          {name: "עמוד ראשי", icon: <Home/>, href: "home", component: HomePage },
          {name: "אודות", icon: <TextSnippet/>, href: "about", component: About },
        ]} colors={colors}/>
    </>
  )
}