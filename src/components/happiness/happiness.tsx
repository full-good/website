import { GenericPage } from '../generic/genericpage'
import { HomePage } from './homepage'
import { About } from "./about"
import { useAppSelector } from '../../server/state/hooks'
import { useEffect } from 'react'

export const Happiness = () => {

  useEffect(() => {
    document.title = 'WebMind / Happiness';
  }, []);

  const colors = useAppSelector((state) => state.colorsSlice.happiness);

  return (
    <>
        <GenericPage logo={"full-of-happiness"} actions={[
          {name: "בשמחות!!", href: "home", component: HomePage },
          {name: "רצון טוב", href: "about", component: About },
        ]} colors={colors}/>
    </>
  )
}