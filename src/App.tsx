import './App.css'
import { FullGood } from './components/fullgood/fullgood'
import { FullOfHappiness } from './components/fullofhappiness/fullofhappiness'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BusinessManagement } from './components/businessmanagement/businessmanagement';
function App() {
  console.log('Environment Variables:', import.meta.env);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FullGood />} />
          <Route path="/fullofhappiness" element={<FullOfHappiness />} />
          <Route path="/businessmanagement" element={<BusinessManagement/>} />

        </Routes>
      </Router>
    </>
  )
}

export default App
