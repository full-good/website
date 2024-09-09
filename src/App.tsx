import './App.css'
import { FullGood } from './components/fullgood/fullgood'
import { FullOfHappiness } from './components/fullofhappiness/fullofhappiness'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FullGood />} />
          <Route path="/fullofhappiness" element={<FullOfHappiness />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
