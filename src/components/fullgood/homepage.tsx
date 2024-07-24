import { TopNav } from "../generic/topnav"

export const HomePage = () => {

  return (
    <>
        <TopNav title={"שלום אורח"} actions={["עמוד ראשי", "אודות", "פרויקטים", "צור קשר"]} color={'yellow'} backgroundcolor={'red'}/>
        <h1>full good</h1>
        <p>אתר שמכיל הכל</p>
    </>
  )
}