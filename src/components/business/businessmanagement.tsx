import { GenericPage } from '../generic/genericpage'
import { HomePage } from './homepage'
import { useAppSelector } from '../../server/state/hooks'
import { useEffect } from 'react'
import { About } from './about'
import { Business } from './business';
import { Numbers } from './numbers'

export const BusinessManagement = () => {

  useEffect(() => {
    document.title = 'WebMind / Business';
  }, []);

  const colors = useAppSelector((state) => state.colorsSlice.business);

  return (
    <>
        <GenericPage logo={"business management"} actions={[
          {name: "כוכב חדש", href: "home", component: HomePage },
          {name: "שאיפה לשמיים", href: "about", component: About },
          {name: "עסקים בתעופה", href: "business", component: Business },
          {name: "בדרך להצלחה", href: "numbers", component: Numbers },
        ]} colors={colors}/>
    </>
  )
}