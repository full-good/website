import './App.css'
import { GenericPage } from './components/generic/genericpage'
import { Home, TextSnippet, Web, Contacts } from "@mui/icons-material"
import { HomePage } from './components/fullgood/homepage'
import { About } from "./components/fullgood/about"
import { Projects } from "./components/fullgood/projects"
import { Contact } from "./components/fullgood/contact"

function App() {

  return (
    <>
        <GenericPage title={"full-good"} actions={[
          {name: "עמוד ראשי", icon: <Home/>, href: "home", component: HomePage },
          {name: "אודות", icon: <TextSnippet/>, href: "about", component: About },
          {name: "פרויקטים", icon: <Web/>, href: "projects", component: Projects },
          {name: "צור קשר", icon: <Contacts/>, href: "contact", component: Contact }
        ]} color={'white'} backgroundcolor={'#000050'}/>    </>
  )
}

export default App
